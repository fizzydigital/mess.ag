#!/bin/sh

# this script checks if the mongod is running, kills it and starts it

MNG_ID="`ps -ef | awk '/[m]ongod/{print $2}'`"

if [ -n "$MNG_ID" ]; then
    kill $MNG_ID
fi

mongod --config mongo.config