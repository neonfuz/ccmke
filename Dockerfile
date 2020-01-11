FROM node:12
RUN yarn global add gatsby-cli node-gyp
RUN gatsby telemetry --disable
WORKDIR /app
RUN npm rebuild node_modules/sharp
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
EXPOSE 8000
CMD ["gatsby", "develop", "-H", "0.0.0.0"]
