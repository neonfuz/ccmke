#!/usr/bin/env bash

set -e

mkdir -p .cache
sudo chown $USER:users -R .cache
docker build . -t neonfuz/ccmke-site
docker run -it -v $PWD:/app -p 8000:8000 neonfuz/ccmke-site $@
