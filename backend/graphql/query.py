import strawberry
from typing import List

@strawberry.type
class Book:
    title: str
    author: str

def get_books():
    return [
        Book(
            title="The Great Gatsby",
            author="F. Scott Fitzgerald",
        ),
    ]

@strawberry.type
class Query:
    books: List[Book] = strawberry.field(resolver=get_books)
