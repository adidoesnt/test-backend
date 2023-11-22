#!/bin/zsh
if [ $# -eq 0 ]; then
  echo "Usage: yarn configure <environment>"
  exit 1
fi

ENVIRONMENT=$1
CONFIG_PATH="src/config.js"

case "$ENVIRONMENT" in
  prod)
    MODELS_PATH="src/models/prod"
    MIGRATIONS_PATH="src/migrations/prod"
    SEEDERS_PATH="src/seeders/prod"
    ;;
  *)
    MODELS_PATH="src/models/dev"
    MIGRATIONS_PATH="src/migrations/dev"
    SEEDERS_PATH="src/seeders/dev"
    ;;
esac

cat > .sequelizerc <<EOL
const path = require("path");

module.exports = {
    config: path.resolve(__dirname, "$CONFIG_PATH"),
    "models-path": path.resolve(__dirname, "$MODELS_PATH"),
    "migrations-path": path.resolve(__dirname, "$MIGRATIONS_PATH"),
    "seeders-path": path.resolve(__dirname, "$SEEDERS_PATH"),
};
EOL
