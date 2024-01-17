from fastapi import FastAPI
from modal import Image, Stub, asgi_app
from .graphql_router import graphql_router

web_app = FastAPI()
web_app.include_router(graphql_router)

stub = Stub("api")
image = Image.debian_slim().pip_install("boto3")

@stub.function(image=image)
@asgi_app()
def fastapi_app():
    return web_app
