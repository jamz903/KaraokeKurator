from pydantic import BaseSettings

class CommonSettings(BaseSettings):
    APP_NAME: str = "API"
    DEBUG_MODE: bool = True

class ServerSettings(BaseSettings):
    HOST: str = "localhost"
    PORT: int = 8000

class DatabaseSettings(BaseSettings):
    DB_URL: str = "mongodb+srv://tasks_api_user:tasksapiuser123@cluster0.mchrlop.mongodb.net/?retryWrites=true&w=majority"
    DB_NAME: str = "tasksDatabase"

class Settings(CommonSettings, ServerSettings):
    pass

settings = Settings()