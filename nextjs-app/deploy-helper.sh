#!/bin/bash

echo "🚀 LetsGrowPro - Vercel Deployment Helper"
echo "=========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found!"
    echo "Please run this script from /app/nextjs-app directory"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔨 Building application..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo ""
    echo "📋 Next steps:"
    echo ""
    echo "1. Deploy to Vercel:"
    echo "   npm i -g vercel"
    echo "   vercel"
    echo ""
    echo "2. Or push to GitHub and connect via Vercel dashboard:"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m 'Initial commit'"
    echo "   git remote add origin YOUR_REPO_URL"
    echo "   git push -u origin main"
    echo ""
    echo "3. Test locally:"
    echo "   npm start"
    echo "   (or PORT=3001 npm start if port 3000 is busy)"
    echo ""
    echo "🎉 Your app is ready for deployment!"
else
    echo ""
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
