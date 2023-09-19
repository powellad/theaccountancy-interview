# 3. use-c4-diagrams

Date: 2023-09-19

## Status

Accepted

## Context

Accurately conveying the architecture of any given system is a difficult task, as there are many different services, databases, users, and overall context to consider.

## Decision

One way to do this is to use (C4 diagrams)[https://c4model.com].
The C4 method aims to codify the language of visually representing the architecture of a system.
C4 stands for the four levels of granularity that any given software system exists at:
- System Context: Where the system fits into the overall ecosystem and how it provides value.
- Container: Represents an application or data store within a software system (e.g. a server-side web app, database, mobile app).
- Component: A group of related functionality within a container that cannot be deployed separately.
- Code: The lowest level and should be generated using tooling, if ever needed.

These are best produced using a DSL called [Structurizr](https://structurizr.com/dsl), which means it can live in source code and be put into version control.
Diagrams are produced using a local docker image, Java MVC app, or cloud service.
Structurizr can also display ADRs, which would keep all documentation in one place.

## Consequences

As with most documentation, it will increase the overhead of the work done.
However, as it lives in version control, its use can be regulated during the PR process to ensure that any new relationships are captured when code is added.
