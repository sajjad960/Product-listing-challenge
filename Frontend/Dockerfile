FROM node:20

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

# Copy environment files
COPY .env .env

# Copy the rest of the application code
COPY . .

# Expose port 5173 (default Vite port)
EXPOSE 5173

# Start the Vite development server
CMD ["pnpm", "dev"]
