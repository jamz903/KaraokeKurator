import os
import uvicorn
from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from config import settings
from pymongo import MongoClient
from pymongo.errors import PyMongoError
from dotenv import load_dotenv
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

DB_URL = "mongodb+srv://{}:{}@cluster0.awoxkwm.mongodb.net/?retryWrites=true&w=majority".format(os.environ.get("DB_USERNAME"), os.environ.get("DB_PASSWORD"))

# Models
class Song(BaseModel):
    song_id: int
    song_name: str
    artist_name: str
    album_name: str

class Playlist(BaseModel):
    playlist_id: int
    playlist_name: str
    songs: List[Song]
    is_deleted: bool
    date_created: datetime 

class User(BaseModel):
    user_id: Optional[int] = None
    name: str
    username: str
    email: str
    to_go_playlist: Optional[str] = None
    playlists: List[Playlist]
    blacklist: List[Song]


load_dotenv()

# Create the FastAPP app
app = FastAPI()

# Establish a connection to MongoDB
client = MongoClient(DB_URL)
db = client["karamonke"]
collection = db["users"]

# Startup Event
@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = AsyncIOMotorClient(settings.DB_URL)
    app.mongodb = app.mongodb_client[settings.DB_NAME]

# Shutdown Event
@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()

# Root
@app.get("/")
async def root():
    return { "endpoints": {
        "users": "/users",
        "playlists": "/users/{user_id}/playlists",
        "songs": "/users/{user_id}/playlists/{playlist_id}/songs"
    } }

# Users
@app.get("/users/{user_id}")
async def get_user(user_id):
    return 

@app.post("/users/")
async def create_user(obj: User):
    try:
        new_user = {
            "name": obj.name,
            "username": obj.username,
            "email": obj.email,
            "to_go_playlist": obj.to_go_playlist,
            "playlists": [],
            "blacklist": []
        }
        res = collection.insert_one(new_user)
        user_id = res.inserted_id
        print(f"User inserted with user_id: {user_id}")
        return user_id
    except PyMongoError as e:
        print(f"Error occurred: {str(e)}")

@app.delete("/users/{user_id}")
async def delete_user(user_id):
    return 

# Playlists
@app.get("/users/{user_id}/playlists/{playlist_id}")
async def get_playlist(user_id, playlist_id):
    return 

@app.post("/users/{user_id}/playlists/")
async def create_playlist(user_id, obj):
    return

@app.delete("/users/{user_id}/playlists/{playlist_id}")
async def delete_playlist(user_id, playlist_id):
    return 

# Songs
@app.get("/users/{user_id}")
async def get_song(user_id):
    return 

@app.post("/users/{user_id}/playlist/{playlist_id}/songs/")
async def create_song(user_id, playlist_id, obj):
    return

@app.delete("/users/{user_id}/playlists/{playlist_id}/songs/{song_id}")
async def delete_song(user_id, playlist_id, obj):
    return 


# Define our main function so we can easily run the server
if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host=settings.HOST,
        reload=settings.DEBUG_MODE,
        port=settings.PORT,
    )