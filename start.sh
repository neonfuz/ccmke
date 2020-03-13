#!/usr/bin/env bash

set -e

mkdir .cache
chown $USER:$USER -R .cache
docker build . -t neonfuz/ccmke-site
docker run -it -v $PWD:/app -p 8000:8000 neonfuz/ccmke-site $@
