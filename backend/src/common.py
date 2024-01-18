from modal import Stub, Image

# TODO: Construct Modal image directly from pyproject.toml
image = Image.debian_slim().pip_install("strawberry-graphql[debug-server,fastapi]>=0.217.1,<1.0.0")
stub = Stub("modalproject", image=image)
