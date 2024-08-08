# Hindu Scripture Library

A web application to browse and view Hindu scriptures by chapter and verse, including translations from different sources.


## Prerequisites

- Node.js (v14.x or later)
- MongoDB (local or cloud instance)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/inddev/apna-temp.git
cd apna-temp
```
### 2. Install Dependencies
```
npm install
```
### 3.Environment Variables
##### Create a .env file in the root directory and add the following environment variables:

```
MONGODB_URI = your mongo URL
PORT = 8000
CORS_ORIGIN = *
ACCESS_TOKEN_SECRET = YOUR_ACCESS_TOKEN
ACCESS_TOKEN_EXPIRY = 1d
REFRESH_TOKEN_SECRET = YOUR_SECRET_TOKEN
REFRESH_TOKEN_EXPIRY = 10d 
VEDICASTRO_API_KEY = YOUR_VEDICATRO_API_KEY
AGORA_APP_ID = YOUR_AGORA_API_ID
AGORA_APP_CERTIFICATE = YOUR_AGORA_APP_CERTIFICATE
```
### 4. Run the application
```
npm run dev
```