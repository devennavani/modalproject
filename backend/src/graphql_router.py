from strawberry.fastapi import GraphQLRouter
from src.graphql.schema import schema

graphql_router = GraphQLRouter(
    schema=schema,
    graphiql=False,
    path="/graphql",
)
