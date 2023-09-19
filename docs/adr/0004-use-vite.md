# 4. use-vite

Date: 2023-09-19

## Status

Accepted

## Context

Starting fresh on a new project can be difficult and can vary greatly between developers.

## Decision

Vite is a useful front-end tool for scaffolding new projects. I've used it a number of times and it's always been a good place to start.

## Consequences

Once created, you're partly "stuck" with Vite until you eject the application.

We've seen this recently with `create-react-app` that it no longer becomes maintained
and therefore dependencies become stale (read: vulnerable).

Once ejected, maintenance effort will increase. 
However, dependency maintenance will be typical in any JavaScript project,
regardless if scaffolding frameworks are used or not.
