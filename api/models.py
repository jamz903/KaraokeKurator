import uuid
from pydantic import BaseModel, Field

class TaskModel(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    name: str = Field(...)
    description: str = Field(...)
    is_finished: bool = Field(...)

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "id": "0000000",
                "name": "Task 1",
                "description": "Description of task 1",
                "is_finished": False
            }
        }
    
class TaskUpdateModel(BaseModel):
    name: str = Field(...)
    description: str = Field(...)
    is_finished: bool = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "name": "Task 1",
                "description": "Description of task 1",
                "is_finished": False
            }
        }