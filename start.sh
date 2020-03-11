#!/usr/bin/env bash

set -e

docker build . -t neonfuz/ccmke-site
docker run -it -v $PWD:/app -p 8000:8000 neonfuz/ccmke-site $@