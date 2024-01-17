from strawberry.fastapi import GraphQLRouter
from graphql.schema import schema

graphql_router = GraphQLRouter(
    schema=schema,
    graphiql=False,
    path="/graphql",
)