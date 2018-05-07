###########################################################
#
# Dockerfile for tfk-saksbehandling-error-reporter
#
###########################################################

# Setting the base to nodejs 4.4.0
FROM mhart/alpine-node:4.4.0@sha256:33ee65bbe19bacb3310a6304255395765a6c2780c2e87d5c05392ed027d865bf

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update git && rm -rf /var/cache/apk/*

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV TFK_SER_CALLBACK_STATUS_MESSAGE Varselbrev produsert
ENV TFK_SER_JOB_DIRECTORY_PATH test/data/errors
ENV TFK_SER_GITHUB_REPO_URL https://api.github.com/repos/:user/:repo
ENV TFK_SER_GITHUB_USER yourgithubuser
ENV TFK_SER_GITHUB_ASSIGNEE githubassigneeuser
ENV TFK_SER_GITHUB_TOKEN yourgithubtoken

# Startup
ENTRYPOINT node example.js