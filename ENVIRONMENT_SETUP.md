# Environment Variables Configuration

This document explains how to configure environment variables for different environments.

## Required Environment Variables

### Supabase Configuration
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Redirect URL Configuration
```env
VITE_REDIRECT_URL=your_production_domain_url
```

## Environment-Specific Configuration

### Development Environment (.env.local)
```env
VITE_SUPABASE_URL=https://your-dev-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_dev_anon_key
# VITE_REDIRECT_URL is not set, will use window.location.origin
```

### Production Environment (.env.production)
```env
VITE_SUPABASE_URL=https://your-prod-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_prod_anon_key
VITE_REDIRECT_URL=https://your-production-domain.com
```

## How It Works

The application uses a fallback mechanism for redirect URLs:

1. **If `VITE_REDIRECT_URL` is set**: Uses the configured production domain
2. **If `VITE_REDIRECT_URL` is not set**: Falls back to `window.location.origin`

This ensures:
- **Development**: Uses localhost for local development
- **Production**: Uses the configured production domain, avoiding redirect issues

## Example Configuration

### For Local Development
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
# VITE_REDIRECT_URL not set - will use window.location.origin
```

### For Production Deployment
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_REDIRECT_URL=https://yourdomain.com
```

## Security Notes

- Never commit `.env` files to version control
- Use different Supabase projects for development and production
- Ensure production redirect URLs are HTTPS
- Regularly rotate your Supabase keys

## Troubleshooting

### Redirect Issues
If users are redirected to development URLs in production:
1. Check that `VITE_REDIRECT_URL` is set correctly
2. Verify the environment variable is loaded during build
3. Ensure the production build is using the correct `.env` file

### Environment Variable Not Loading
1. Restart your development server after changing `.env`
2. Check that the variable name starts with `VITE_`
3. Verify the `.env` file is in the project root
