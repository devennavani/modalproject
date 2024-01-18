"""Module containing the FastAPI app."""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from modal import Image, asgi_app
from src.api.graphql_router import graphql_router
from src.common import modal_stub

# Construct FastAPI app
web_app = FastAPI()
origins = ["*"]
web_app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # List of allowed origins
    allow_credentials=True,  # This allows cookies and credentials to be sent along with the requests.
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)
web_app.include_router(graphql_router)

# TODO: Construct Modal image directly from pyproject.toml
image = Image.debian_slim().pip_install("strawberry-graphql[debug-server,fastapi]>=0.217.1,<1.0.0")

@modal_stub.function(image=image)
@asgi_app()
def fastapi_app():
    return web_app
