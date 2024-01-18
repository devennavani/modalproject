"""Module containing /graphql FastAPI router."""
from strawberry.fastapi import GraphQLRouter
from src.api.graphql.schema import schema

graphql_router = GraphQLRouter(
    schema=schema,
    graphiql=False,
    path="/graphql",
)
