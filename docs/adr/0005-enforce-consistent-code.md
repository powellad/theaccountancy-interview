# 5. enforce-consistent-code

Date: 2023-09-19

## Status

Accepted

## Context

A code base that is consistent is more easily maintained and understood.

## Decision

We will use common tools to enforce consist coding style.
`eslint` and `prettier` for TypeScript will be used.

These rules should be consistent across the UI and API.

## Consequences

Overhead for coding _can_ be increased when using strict styling.
However, modern tooling decreases this to virtually trivial,
especially when automatic formatting can be done on-save and using git pre-commit hooks.
