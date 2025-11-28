FROM node:18-alpine

WORKDIR /opt/app

# Install dependencies for building
RUN apk add --no-cache python3 make g++ 

# Create Strapi v4 project (more stable)
RUN echo "Creating Strapi v4 project..." && \
    npx create-strapi-app@4.25.11 . --quickstart --no-run

# Install additional dependencies
RUN npm install

# Expose port
EXPOSE 1337

# Create database config for PostgreSQL
RUN mkdir -p config && \
    echo 'module.exports = ({ env }) => ({' > config/database.js && \
    echo '  connection: {' >> config/database.js && \
    echo '    client: "postgres",' >> config/database.js && \
    echo '    connection: {' >> config/database.js && \
    echo '      host: env("DATABASE_HOST", "postgres"),' >> config/database.js && \
    echo '      port: env.int("DATABASE_PORT", 5432),' >> config/database.js && \
    echo '      database: env("DATABASE_NAME", "intus_db"),' >> config/database.js && \
    echo '      user: env("DATABASE_USERNAME", "intus_user"),' >> config/database.js && \
    echo '      password: env("DATABASE_PASSWORD", "intus_password"),' >> config/database.js && \
    echo '      ssl: env.bool("DATABASE_SSL", false),' >> config/database.js && \
    echo '    },' >> config/database.js && \
    echo '  },' >> config/database.js && \
    echo '});' >> config/database.js

# Start Strapi in development mode
CMD ["npm", "run", "develop"]