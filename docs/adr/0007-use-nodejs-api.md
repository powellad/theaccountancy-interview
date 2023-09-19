# 7. use-nodejs-api

Date: 2023-09-19

## Status

Accepted

## Context

The React UI will need an API to communicate with that handles the communication with the data repository.

## Decision

A Node.js-based app using Express will be used for this.

I don't have a huge amount of experience in using Node.js as an API, but it uses my existing
skillset and would likely be the better choice (for me) over Python.

## Consequences

Node.js can suffer a bit when it comes to performance, especially with larger queries.
However, for this type of application where data is small, this shouldn't be an issue.
