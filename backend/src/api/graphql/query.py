from typing import List
import strawberry
from src.modal_functions.functions import square

@strawberry.type
class Query:

    @strawberry.field
    def square(self, num: int) -> int:
        return square.remote(num)
    
    @strawberry.field
    def square_map(self, nums: List[int]) -> List[int]:
        return square.map(nums)
