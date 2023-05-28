from pymongo import MongoClient

db_connection = MongoClient(process.env.MONGODB_URI)
db = db_connection.database_name
collection = db["posts"]