# Product Listing with Authentication

All requirements are implemented and developed the product listing application with user authentication using Node.js, Express, React, Redux, and TypeScript.

## Setup & start services (Without docker):

### #Backend

Backend Folder Location (./backend).

#### Architecture

The structure is based on Clean Architecture (aka Ports and Adapters, Hexagonal Architecture).<br>
Basic Implementation Details:

- **Core**: Contains the business logic and domain entities.
  - **Entities**: Represents core business objects (e.g., `Product`, `User`).
  - **Use Cases**: Application Services with business logic (e.g., `GetAllProducts`, `Auth`).
  - **Ports**: Ports not added for this application.
- **Adapters**: Adapters provide a way to the application core to communicate with the outside world.
  - **Primary Adapters**: Handles HTTP requests (e.g., `Routes`, `Controllers`).
  - **Secondary Adapters**: Not implemented for this application.

#### Prerequisites

- Node.js (version v20.0.0 or higher)
- pnpm (version 9.0.0 or higher)

#### Installation and Run

1. Install pnpm:

```bash
npm install -g pnpm
```

2. Install dependencies:

```bash
pnpm install
```

3. Setup environment variables:<br>
   Copy `.env.example` to `.env`.
4. Start app

```bash
pnpm dev
```

Local address of the backend app will be `http://127.0.0.1:8008` (if this port is not already used).

### #Frontend

Frontend Folder Location (./frontend).

#### Prerequisites

- Node.js (version v20.0.0 or higher)
- pnpm (version 9.0.0 or higher)

#### Installation and Run

1. Install pnpm (if it's not already installed):

```bash
npm install -g pnpm
```

2. Install dependencies:

```bash
pnpm install
```

3. Setup environment variables:<br>
   Copy `.env.example` to `.env`.
4. Start app

```bash
pnpm dev
```

Local address of the frontend app will be `http://localhost:5173` (if this port is not already in use).

## Setup & start services (With docker):

#### Prerequisites

- Docker
- Docker Compose

#### Running the Applications

1. Build and start the Docker containers:

```bash
docker-compose up --build
```

2. Access the applications:

- Frontend: Open your browser and navigate to http://localhost:5173
- Backend: The backend server is running on http://localhost:8008
