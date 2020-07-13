FROM node:12
RUN yarn global add 'gatsby-cli@2.12.60' && gatsby telemetry --disable
EXPOSE 8000
WORKDIR /app
CMD ["gatsby", "develop", "-H", "0.0.0.0"]
