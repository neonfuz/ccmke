# Convenience scripts

docker_build: Dockerfile
	docker build . -t neonfuz/ccmke-site | tee docker_build

run: docker_build
	docker run --name ccmke --rm -it -v ${PWD}:/app -p 8000:8000 -p 8081:8081 neonfuz/ccmke-site $(CMD)

bash: docker_build
	CMD=bash make run

clean: docker_build
	docker stop ccmke && sleep .5
	CMD="gatsby clean" make run

.PHONY: run bash clean
