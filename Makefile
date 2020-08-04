# Convenience scripts

docker_tag=neonfuz/ccmke-site
docker_cmd=docker run --name ccmke --rm -it -v ${PWD}:/app -p 8000:8000 -p 8081:8081 $(docker_tag)

docker_build: Dockerfile
	docker build . -t $(docker_tag) | tee docker_build

run: docker_build
	$(docker_cmd) $(CMD)

bash: docker_build
	$(docker_cmd) bash

clean: docker_build
	docker stop ccmke 2>/dev/null && sleep 1 || true
	$(docker_cmd) gatsby clean


.PHONY: run bash clean
