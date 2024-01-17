import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  silent: false,
  schema: "src/graphql/__generated__/schema.graphql",
  documents: ["src/graphql/**/*.queries.ts"],
  generates: {
    "./src/graphql/__generated__/types.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
