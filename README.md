# modalproject

This is a full-stack template project with an autoscaling, serverless Python backend entirely hosted on [Modal](https://modal.com).

This Python backend is predominantly a FastAPI API, accompanied by some example Python functions in `backend/src/modal_functions`.

The frontend is a NextJS app, using ReactJS, Typescript, and TailwindCSS. It's hosted on Vercel, at [https://modalproject.vercel.app](https://modalproject.vercel.app).

The project uses GraphQL for the API, with Strawberry GraphQL on the backend and Apollo Client on the frontend.

## Dev Setup

I suggest having 1 terminal window for the backend, and 1 terminal window for the frontend.

### Backend

In the root directory, run `make install_pipx` (requires Homebrew). This will install `pipx`, which is a tool for installing Python CLI tools in isolated environments. We use it to install `poetry`, which is a tool for managing Python dependencies.

Then, run `make install_poetry` to install `poetry` using `pipx`.

Finally, run `make py_reqs` to install the Python dependencies, and `poetry@1.7.1 shell` to enter the virtual environment that `poetry` created.

To introduce more requirements, edit `pyproject.toml` and run `make py_reqs` again, or run `poetry add <package>`.

### Frontend

If you'd like to use a NodeJS virtual environment, run `sudo pip install nodeenv` (globally, outside of any virtual environment). Then, run `make create_nenv` to create a NodeJS virtual environment in the `frontend` directory.

Finally, run `. env/bin/activate` to enter the virtual environment.

Then, run `npm install` to install the NodeJS dependencies.

## CI/CD

This project includes a CI/CD GitHub workflow that runs on every push to the `main` branch, as well as every push to a pull request's branch.

For PRs, it will create a [Modal environment(https://modal.com/docs/guide/environments) for the PR, and deploy the Modal stub to that environment. For 

## Developing Locally

### Backend

Run `make {MODAL_ENVIRONMENT}.api` to start the FastAPI server in development mode. Under the hood, this is running `modal serve`. `MODAL_ENVIRONMENT` is nominally the Modal environment tied to the PR you are working on, namely `pr{PR_NUMBER}`.

### Frontend

Once you have the FastAPI server running in development mode, run `make {MODAL_ENVIRONMENT}.ui` to run the UI locally. This will point the UI to the FastAPI server running in development mode.