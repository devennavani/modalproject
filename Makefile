########################
#### Python targets ####
########################

# Needed to install Poetry (see below)
install_pipx:
	brew install pipx
	pipx ensurepath

install_poetry:
	pipx install --suffix=@1.7.1 poetry==1.7.1
	poetry@1.7.1 --version

## This can be run outside of the Python virtual environment ##
py_reqs: # Install Python requirements (afterwards, enter shell via "poetry@1.7.1 shell")
	( \
		cd backend && \
		poetry@1.7.1 install --no-root \
	)

########################
#### NodeJS targets ####
########################

create_nenv: # Create Node virtual environment (enter via ". env/bin/activate")
	( \
		cd frontend && \
		nodeenv env --node=20.11.0 \
	)

## Run this target inside the Node virtual environment ##
%.ui: ## Run UI locally and point to dev-mode API (see %.api Makefile target) in provided Modal environment
	( \
		cd frontend && \
		echo "\nNEXT_PUBLIC_MODAL_ENVIRONMENT=$*" >> .env.local && \
		npm run dev \
	)

########################
#### GraphQL targets ###
########################

## Run this target inside the Python virtual environment ##
graphql-schema: ## Codegen GraphQL schema
	rm -f frontend/src/graphql/__generated__/schema.graphql
	( \
		cd backend && \
		strawberry export-schema src.api.graphql.schema:schema > ../frontend/src/graphql/__generated__/schema.graphql \
	)
	

## Run this target inside the Node virtual environment ##
graphql-client: ## Codegen client GraphQL types
	( \
		cd frontend && \
		npm run graphql-codegen \
	)

########################
#### Modal targets #####
########################

## Run this target inside the Python virtual environment ##
%.api: ## Run API in dev mode in provided Modal environment (nominally the one tied to the PR of the branch you're working on)
	( \
		cd backend && \
		MODAL_ENVIRONMENT="$*" modal serve src.api.app \
	)
