#!/bin/zsh
if [ $# -ne 2 ]; then
    echo "Usage: yarn migrate <environment> <action>"
    exit 1
fi

ENVIRONMENT=$1
ACTION=$2

echo "ENVIRONMENT set to \"$ENVIRONMENT\""
echo "ACTION set to \"$ACTION\""

if [ "$ENVIRONMENT" != "development" ] && [ "$ENVIRONMENT" != "production" ]; then
    echo "Invalid environment. Use 'development' or 'production'."
    exit 1
fi

if [ "$ACTION" = "up" ]; then
    source .envrc && sequelize-cli db:migrate --env="$ENVIRONMENT"
elif [ "$ACTION" = "down" ]; then
    source .envrc && sequelize-cli db:migrate:undo --env="$ENVIRONMENT"
else
    echo "Invalid action. Use 'up' or 'down'."
    exit 1
fi
