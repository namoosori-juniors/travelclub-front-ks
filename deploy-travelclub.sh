#!/bin/bash

REPOSITORY=/home/ec2-user/app/travis/travel-club-front
APP_NAME="travel-club-front"

CURRENT_APP_PID=$(docker ps -aqf "name=$APP_NAME")

echo "$CURRENT_APP_PID"

if [ -z "$CURRENT_APP_PID" ]; then
    echo "> No running app."
else
    echo "> kill $CURRENT_APP_PID"
    docker stop "$CURRENT_APP_PID"
fi

cd "$REPOSITORY"

docker build -t "$APP_NAME" .
docker run -p 80:8080 "$APP_NAME"

