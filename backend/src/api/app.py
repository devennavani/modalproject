"""Module containing the FastAPI app."""
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from modal import asgi_app
from src.api.graphql_router import graphql_router
from src.common import stub

# Construct FastAPI app
web_app = FastAPI()
web_app.include_router(graphql_router)
web_app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_origin_regex='https://modalproject.*\.vercel\.app',
    allow_credentials=True,  # This allows cookies and credentials to be sent along with the requests.
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@stub.function()
@asgi_app()
def fastapi_app():
    return web_app
