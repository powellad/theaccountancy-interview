workspace {
    model {
        user = person "User"
        softwareSystem = softwareSystem "Recruiter System" {
            webApp = container "Web Application" "" "React + TypeScript" {
                user -> this "Uses"
                webAppApiLayer = component "API Layer"
                webAppSpa = component "Single Page Application"
                webAppSpa -> webAppApiLayer "Uses"
            }
            api = container "GraphQL API" "" "Node.js + TypeScript" {
                jobService = component "Job Service"
                candidateService = component "Candidate Service"
                repoService = component "Repository Service"
                
                webAppApiLayer -> jobService "Read and write operations to"
                webAppApiLayer -> candidateService "Read and write operations to"

                jobService -> repoService "Stores and retrieves jobs using"
                candidateService -> repoService "Stores and retrieves candidates using"
            }
            container "Relational Database" "" "Oracle, PostgreSQL, etc." {
                repoService -> this "Reads from and writes to"
            }
        }
    }

    views {
        systemContext softwareSystem {
            include *
            autolayout lr
        }

        container softwareSystem {
            include *
            autolayout lr
        }
        
        component api {
            include *
            autolayout lr
        }
        
        component webApp {
            include *
            autolayout lr
        }

        theme default
    }
}
