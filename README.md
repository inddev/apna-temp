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
ACCESS_TOKEN_SECRET = ed04696ef8da9ef47e38cf0abce60a206730ea0842f633c3fd074a630d660caa
ACCESS_TOKEN_EXPIRY = 1d
REFRESH_TOKEN_SECRET = 7c6526871e52ca541cedda10e395437f827738f66f6ea7752c4173460e4fbcc0
REFRESH_TOKEN_EXPIRY = 10d 
VEDICASTRO_API_KEY = YOUR_VEDICATRO_API_KEY
AGORA_APP_ID = YOUR_AGORA_API_ID
AGORA_APP_CERTIFICATE = YOUR_AGORA_APP_CERTIFICATE
```
### 4. Run the application
```
npm run dev
```