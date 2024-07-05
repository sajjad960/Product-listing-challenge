# Product Listing with Authentication

All requirements are implemented and developed the product listing application with user authentication.

## Setup & start services (Without docker):

### Backend

The structure is based on Clean Architecture (aka Ports and Adapters, Hexagonal Architecture).

- Explanation depends on this basic application.

- **Core**: Contains the business logic and domain entities.
  - **Entities**: Represents core business objects (e.g., `Product`, `User`).
  - **Use Cases**: Application Services with business logic (e.g., `GetAllProducts`, `Auth`).
  - **Ports**: Ports not added for this application.
- **Adapters**:.
  - **Primary Adapters**: Handles HTTP requests (e.g., `Routes`, `Controllers`).
  - **Secondary Adapters**: Not implemented for this application.
