# Supabase Authentication Setup Guide

This guide will help you set up Supabase authentication for your Points Calculator application.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Choose your organization and enter project details
5. Wait for the project to be created

## Step 2: Get Your Project Credentials

1. In your Supabase dashboard, go to Settings > API
2. Copy the following values:
   - **Project URL** (e.g., `https://your-project-id.supabase.co`)
   - **Anon public key** (starts with `eyJ...`)

## Step 3: Configure Environment Variables

1. Create a `.env` file in your project root
2. Add the following variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace the values with your actual Supabase credentials.

## Step 4: Configure Authentication Providers

### Email Authentication (Default)
Email authentication is enabled by default. Users can register and sign in with email/password.

### Google OAuth
1. In Supabase dashboard, go to Authentication > Providers
2. Find Google and click "Edit"
3. Enable Google provider
4. Add your Google OAuth credentials:
   - **Client ID**: From Google Cloud Console
   - **Client Secret**: From Google Cloud Console
5. Add authorized redirect URIs:
   - `https://your-domain.com/auth/callback`
   - `http://localhost:5173/auth/callback` (for development)

### GitHub OAuth
1. In Supabase dashboard, go to Authentication > Providers
2. Find GitHub and click "Edit"
3. Enable GitHub provider
4. Add your GitHub OAuth credentials:
   - **Client ID**: From GitHub OAuth App settings
   - **Client Secret**: From GitHub OAuth App settings
5. Add authorized redirect URIs:
   - `https://your-domain.com/auth/callback`
   - `http://localhost:5173/auth/callback` (for development)

## Step 5: Configure OAuth Apps

### Google Cloud Console
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to Credentials > Create Credentials > OAuth 2.0 Client IDs
5. Set application type to "Web application"
6. Add authorized redirect URIs:
   - `https://your-domain.com/auth/callback`
   - `http://localhost:5173/auth/callback`

### GitHub OAuth App
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Click "New OAuth App"
3. Fill in the details:
   - **Application name**: Points Calculator
   - **Homepage URL**: Your app URL
   - **Authorization callback URL**: `https://your-domain.com/auth/callback`
4. Copy the Client ID and Client Secret

## Step 6: Test Your Setup

1. Start your development server: `npm run dev`
2. Navigate to `/login`
3. Try registering with email/password
4. Try signing in with Google or GitHub
5. Check that users are created in your Supabase dashboard

## Troubleshooting

### Common Issues

1. **"Invalid redirect URI" error**
   - Make sure your redirect URIs match exactly in both Supabase and OAuth provider settings
   - Include both production and development URLs

2. **"Client not found" error**
   - Verify your Supabase URL and anon key are correct
   - Check that your `.env` file is in the project root

3. **OAuth not working**
   - Ensure OAuth providers are enabled in Supabase
   - Verify OAuth credentials are correct
   - Check browser console for error messages

### Security Notes

- Never commit your `.env` file to version control
- Keep your OAuth client secrets secure
- Use environment variables for all sensitive configuration
- Consider using different OAuth apps for development and production

## Next Steps

After setting up authentication, you can:

1. Add user profile management
2. Implement role-based access control
3. Add email verification workflows
4. Set up password reset functionality
5. Add user preferences and settings

For more information, visit the [Supabase documentation](https://supabase.com/docs).
