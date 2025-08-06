# Google OAuth Setup Guide

## Prerequisites
1. Google Cloud Console account
2. MongoDB database running

## Step 1: Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing project
3. Enable Google Identity Services API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Identity Services API" and enable it
   - Also enable "Google+ API" if not already enabled
4. Create OAuth 2.0 Credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client IDs"
   - Configure consent screen if prompted:
     - Choose "External" user type for testing
     - Fill in required fields (App name, User support email, Developer contact)
     - Add your email to test users
   - Set Application type to "Web application"
   - Add authorized JavaScript origins:
     - `http://localhost:5173` (for Vite dev server)
     - `http://127.0.0.1:5173` (alternative localhost)
   - Add authorized redirect URIs:
     - `http://localhost:5173`
     - `http://127.0.0.1:5173`
5. Copy the Client ID and Client Secret

## Step 2: Backend Environment Setup

1. Copy `.env.example` to `.env` in the backend folder:
   ```bash
   cp BACKEND/.env.example BACKEND/.env
   ```

2. Update `BACKEND/.env` with your values:
   ```env
   MONGO_URI=mongodb://localhost:27017/figgz_cafe
   JWT_SECRET=your_super_secret_jwt_key_here
   JWT_EXPIRE=30d
   GOOGLE_CLIENT_ID=your_google_client_id_here
   GOOGLE_CLIENT_SECRET=your_google_client_secret_here
   CLIENT_URL=http://localhost:5173
   PORT=5000
   NODE_ENV=development
   ```

## Step 3: Frontend Environment Setup

1. Copy `.env.example` to `.env` in the frontend folder:
   ```bash
   cp frontend/.env.example frontend/.env
   ```

2. Update `frontend/.env` with your values:
   ```env
   VITE_API_URL=http://localhost:5000
   VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
   ```

## Step 4: Install Dependencies

### Backend:
```bash
cd BACKEND
npm install google-auth-library
```

### Frontend dependencies are already installed

## Step 5: Start the Applications

### Start Backend:
```bash
cd BACKEND
npm run dev
```

### Start Frontend:
```bash
cd frontend
npm run start
```

## How it Works

1. **User clicks "Sign In" button** - Opens login modal
2. **User clicks "Continue with Google"** - Opens Google OAuth popup
3. **User authenticates with Google** - Google returns ID token
4. **Frontend sends token to backend** - POST /api/auth/google
5. **Backend verifies token** - Uses Google Auth Library
6. **User created/updated in database** - Stores email, name, avatar
7. **JWT token returned** - User is logged in
8. **User info displayed in navigation** - Shows avatar and name

## Features

- ✅ Google OAuth 2.0 integration
- ✅ Automatic user creation on first login
- ✅ JWT token authentication
- ✅ User avatar display
- ✅ Persistent login state
- ✅ User dropdown with profile options
- ✅ Secure logout functionality

## Testing

1. Click the user icon or "Sign In" button in the navigation
2. Choose "Continue with Google"
3. Authenticate with your Google account
4. Your profile should appear in the navigation bar
5. Check the database to see your user record

## Troubleshooting

### Common Issues and Solutions:

1. **"Can't continue with google.com - Something went wrong"**
   - Go to Google Cloud Console > APIs & Services > Credentials
   - Edit your OAuth 2.0 Client ID
   - Under "Authorized JavaScript origins", make sure you have:
     - `http://localhost:5173`
     - `http://127.0.0.1:5173`
   - Under "Authorized redirect URIs", make sure you have:
     - `http://localhost:5173`
     - `http://127.0.0.1:5173`

2. **CORS Errors**
   - Ensure your backend CORS is configured for `http://localhost:5173`
   - Check that both servers are running (backend on 5000, frontend on 5173)

3. **GSI_LOGGER Errors**
   - Clear browser cache and cookies
   - Make sure your Google Client ID is correct in both .env files
   - Verify your OAuth consent screen is configured properly

4. **General Steps**
   - Ensure Google Client ID is correctly set in both backend and frontend .env files
   - Check that your domain is added to Google OAuth authorized origins
   - Verify that both servers are running (backend on port 5000, frontend on port 5173)
   - Check browser console for any errors
   - Try using an incognito/private browser window

