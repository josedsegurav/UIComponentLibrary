# Component Library

A Docker-containerized component library project for building and showcasing reusable UI components.

## Prerequisites

Ensure Docker is installed on your local machine:

- [Download Docker](https://www.docker.com/get-started)

## Getting Started

1. **Clone the repository**

   ```
   git clone https://github.com/josedsegurav/UIComponentLibrary.git
   cd component_library
   ```

2. **Build and run the application**

   ```
   docker-compose -f docker-compose.prod.yml up --build
   ```

3. **Access the application**

   Open your browser and navigate to [http://localhost:8018](http://localhost:8018)

## Usage

The component library will be available at the local development server. Browse through the available components and their documentation.

## Stopping the Application

To stop the running container:

```
Ctrl + C
```

To remove the container:

```
docker-compose -f docker-compose.prod.yml down
```
