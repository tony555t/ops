# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency files first (better caching)
COPY package*.json ./

# Install all dependencies (including dev)
RUN npm ci

# Copy source code
COPY . .

# Run build step (if you have a frontend or TS build step)
# If backend only (plain JS), you can skip this
# RUN npm run build


# Stage 2: Production image
FROM node:18-alpine

WORKDIR /app

# Copy only built assets + package.json
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

# Install only production dependencies
RUN npm ci --only=production

# Expose port
EXPOSE 3000

# Start app
# CMD ["node", "dist/server.js"]
