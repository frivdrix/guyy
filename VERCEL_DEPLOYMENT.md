# LetsGrowPro - Vercel Deployment Guide

This project is now fully configured for deployment on Vercel with the updated color scheme.

## Color Scheme

The application uses a bright green (#00ff77) color scheme with black text on white backgrounds:

- **Primary Color**: `#00ff77` (Bright Green)
- **Primary Hover**: `#00e066` (Slightly darker green)
- **Text**: `#000000` (Black)
- **Background**: `#FFFFFF` (White)
- **Secondary Background**: `#F8F9FA` (Light Gray)
- **Border**: `#E5E7EB` (Light Border)

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts to link your project or create a new one.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your repository

5. Vercel will auto-detect it's a Create React App project

6. Configure the build settings:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`
   - **Install Command**: `yarn install`

7. Add environment variables if needed:
   - `REACT_APP_BACKEND_URL` - Your backend API URL
   
8. Click "Deploy"

## Vercel Configuration

The project includes a `vercel.json` file in the frontend directory with:

- **URL rewrites** for SPA routing
- **API proxying** for backend calls (if using integrated backend)
- **Security headers** (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- **Caching headers** for static assets

## Build Optimization

The project is optimized for production with:

- Tailwind CSS purging for smaller bundle sizes
- Code splitting and lazy loading
- Asset optimization
- Tree shaking for unused code removal

## Post-Deployment

After deployment:

1. **Test the application** thoroughly
2. **Configure custom domain** (optional) in Vercel dashboard
3. **Set up analytics** if needed
4. **Monitor performance** using Vercel Analytics

## Backend Considerations

If you're deploying a full-stack application:

1. Deploy your backend separately (e.g., on Railway, Render, or Vercel Serverless Functions)
2. Update the `REACT_APP_BACKEND_URL` environment variable in Vercel
3. Ensure CORS is properly configured on your backend
4. Make sure MongoDB connection is properly configured

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Ensure `yarn.lock` is committed
- Review build logs in Vercel dashboard

### Environment Variables Not Working

- Ensure variables are prefixed with `REACT_APP_`
- Redeploy after adding/changing environment variables
- Variables are injected at build time, not runtime

### Styling Issues

- Clear browser cache
- Check that Tailwind is properly configured
- Verify CSS imports in `index.css`

## Local Development

To run locally with the new color scheme:

```bash
cd frontend
yarn install
yarn start
```

The app will run on `http://localhost:3000`

## Support

For issues or questions:
- Check Vercel documentation: https://vercel.com/docs
- Review build logs in Vercel dashboard
- Ensure all environment variables are set correctly
