#!/bin/zsh
if [ $# -ne 2 ]; then
    echo "Usage: yarn seed <environment> <action>"
    exit 1
fi

ENVIRONMENT=$1
ACTION=$2

echo "ENVIRONMENT set to \"$ENVIRONMENT\""
echo "ACTION set to \"$ACTION\""

if [ "$ENVIRONMENT" != "dev" ] && [ "$ENVIRONMENT" != "prod" ]; then
    echo "Invalid environment. Use 'dev' or 'prod'."
    exit 1
fi

if [ "$ACTION" = "up" ]; then
    source .envrc && sequelize-cli db:seed:all --env="$ENVIRONMENT"
elif [ "$ACTION" = "down" ]; then
    source .envrc && sequelize-cli db:seed:undo:all --env="$ENVIRONMENT"
else
    echo "Invalid action. Use 'up' or 'down'."
    exit 1
fi
