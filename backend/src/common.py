from modal import Stub, Image

stub = Stub("modalproject")
# TODO: Construct Modal image directly from pyproject.toml
api_image = Image.debian_slim().pip_install("strawberry-graphql[debug-server,fastapi]>=0.217.1,<1.0.0")