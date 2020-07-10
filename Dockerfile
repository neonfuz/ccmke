FROM neonfuz/node-caching:12
RUN yarn global add 'gatsby-cli@2.10.2'
EXPOSE 8000
CMD ["gatsby", "develop", "-H", "0.0.0.0"]
