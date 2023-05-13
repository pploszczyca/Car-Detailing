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

### Path to api documentation (Swagger)

localhost:32780/swagger/index.html

### With docker
Production build can be run by Docker. To build image go to `/backend/Car-Detailing-Backend` and write:
```bash
> docker build -t car-detailing-backend .
```
Then run image
```bash
> docker run -p 32780:80 car-detailing-backend
```

### Without docker
First it is needed to install all required packages. Go to `/backend/Car-Detailing-Backend` and run

Important
If you do not have the .NET 6.0 LTS SDK on your local device download it from the website:
https://dotnet.microsoft.com/en-us/download

Otherwise the next steps will not work

First install all dependencies
```bash
> dotnet restore
```
Compile the programme
```bash
> dotnet build
```
Run the programme
```bash
> dotnet run
```