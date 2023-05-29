from pydantic import BaseModel
from typing import List
from datetime import datetime

class Link(BaseModel):
    url: str

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
    is_blacklist: bool
    date_created: datetime 

class User(BaseModel):
    user_id: int
    name: str
    username: str
    email: str
    to_go_playlist: Link
    playlists: List[Playlist]
    blacklist: List[Song]

