FROM node:12
RUN curl --compressed -o- -L https://yarnpkg.com/install.sh | bash && \
    yarn global add 'gatsby-cli@2.10.2'
WORKDIR /app
EXPOSE 8000
CMD ["gatsby", "develop", "-H", "0.0.0.0"]
