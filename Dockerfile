# Use the official Python image from the Docker Hub
FROM python:3.11-slim

# Set the working directory inside the container
WORKDIR /app

# Copy all content from the local 'app' directory to the '/app' directory in the container
COPY . /app

# Expose port 8000 to the outside world
EXPOSE 8000

# Run the HTTP server on port 8000
CMD ["python3", "-m", "http.server", "8000"]

