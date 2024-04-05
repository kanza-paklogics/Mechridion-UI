# Use an official Node.js runtime as a parent image
FROM node:16.14.0


# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the frontend files to the container
COPY . .

ENV CANONICAL_URL http://localhost:4000
ENV BUILD_GRAPHQL_URL https://workshop.mechiridion.com/graphql 
ENV EXTERNAL_GRAPHQL_URL https://workshop.mechiridion.com/graphql 
ENV INTERNAL_GRAPHQL_URL https://workshop.mechiridion.com/graphql 
ENV NEXT_PUBLIC_IMAGE_URL=http://52.205.81.185:3000/upload
ENV NEXT_PUBLIC_BASIC_PLAN_PRICE_ID=price_1NKym5B8RK1QdFnYaWU9Mr2E
ENV NEXT_PUBLIC_PRO_PLAN_PRICE_ID=price_1NKwk0B8RK1QdFnYy0fflSsW
ENV PORT 4000
ENV SEGMENT_ANALYTICS_SKIP_MINIMIZE true
ENV SEGMENT_ANALYTICS_WRITE_KEY ENTER_KEY_HERE
ENV SESSION_MAX_AGE_MS 2592000000
ENV SESSION_SECRET CHANGEME
ENV STRIPE_PUBLIC_API_KEY ENTER_STRIPE_PUBLIC_KEY_HERE

ENV BUILD_ENV=production NODE_ENV=production

EXPOSE 4000

RUN npm run build

CMD ["npm", "run", "start"]
