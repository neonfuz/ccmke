FROM node:12
RUN yarn global add 'gatsby-cli@2.12.60' 'netlify-cms-proxy-server@1.3.0' && gatsby telemetry --disable
EXPOSE 8000 8081
WORKDIR /app
CMD ["sh", "-c", "gatsby develop -H 0.0.0.0 & netlify-cms-proxy-server"]
