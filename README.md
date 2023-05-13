# Car-Detailing
Car-Detailing project for Frontend Design Techniques

# Technologies
## Backend
- .NET 6

## Frontend
- React
- TypeScipt
- TanStack Query V4

# How to run
## Frontend
### With docker
Production build can be run by Docker. To build image go to `/frontend` and write:
```bash
> docker build -t car-detailing-frontend .
```
Then run image
```bash
> docker run -p 9000:9000 car-detailing-frontend
```

### Without docker
First it is needed to install all required packages. Go to `/frontend` and run
```bash
> npm install
```
If you want to run dev build:
```bash
> npm run dev
```

If you want to run production build:
```bash
> npm run build
> npm run preview
```

---------------------
## Backend
### With docker
Production build can be run by Docker. To build image go to `/backend/Car-Detailing-Backend` and write:
```bash
> docker build -t car-detailing-backend .
```

To run applications for HTTPS, use the command
```bash
> docker run -p 32776:443 car-detailing-backend
```

To run applications for HTTP, use the command
```bash
> docker run -p 32777:80 car-detailing-backend
```

To run image for HTTPS and HTTP simultaneously, use the command
```bash
> docker run -p 32776:443 -p 32777:80 car-detailing-backend
```

### Without docker
First it is needed to install all required packages. Go to `/frontend` and run
```bash
> npm install
```
If you want to run dev build:
```bash
> npm run dev
```

If you want to run production build:
```bash
> npm run build
> npm run preview
```