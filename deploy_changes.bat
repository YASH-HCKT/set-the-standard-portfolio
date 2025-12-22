@echo off
echo Deploying your changes to Vercel...
npm run build && npx vercel --prod
echo Deployment complete!
pause
