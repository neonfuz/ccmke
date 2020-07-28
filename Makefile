# Convenience scripts

docker_build: Dockerfile
	docker build . -t neonfuz/ccmke-site | tee docker_build

run: docker_build
	docker run --name ccmke --rm -it -v ${PWD}:/app -p 8000:8000 -p 8081:8081 neonfuz/ccmke-site $(CMD)

bash: docker_build
	docker run --name ccmke --rm -it -v ${PWD}:/app -p 8000:8000 -p 8081:8081 neonfuz/ccmke-site bash

.PHONY: run bash
