# 6. use-relational-database

Date: 2023-09-19

## Status

Accepted

## Context

I will need a way to permanently store and access job and candidate listings.

## Decision

I believe a relational database will be best choice for this, as there are clear relations
between the relevant entities in the system.

The schema isn't likely to change much, given the use-case and content.
If it does, it's unlikely to change so much that it would warrant the use of a more flexible
database.

## Consequences

Only a few consequences here and none are large.
The normalized approach of a relational database here suits the approach at hand.
