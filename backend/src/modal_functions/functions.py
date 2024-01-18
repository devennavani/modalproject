from modal import Stub

stub = Stub("functions")

@stub.function()
def square(num: int):
    return num ** 2


