"""Module containing the FastAPI app."""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from modal import Image, asgi_app
from src.api.graphql_router import graphql_router
from src.common import stub, api_image

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

@stub.function(image=api_image)
@asgi_app()
def fastapi_app():
    return web_app
