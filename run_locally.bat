@echo off
setlocal

echo Checking for dependencies...
if not exist "node_modules\" (
    echo node_modules not found. Installing dependencies...
    npm install
) else (
    echo node_modules found.
)

echo.
echo Starting your portfolio locally...
npm run dev
pause
