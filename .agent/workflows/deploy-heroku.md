---
description: Deploy Laravel 12 + React/Inertia.js application to Heroku
---

# Deploying to Heroku

This guide walks you through deploying your Laravel 12 portfolio application with React/Inertia.js to Heroku.

## Prerequisites

1. **Heroku CLI installed**
   ```bash
   # Download from: https://devcenter.heroku.com/articles/heroku-cli
   # Or install via npm:
   npm install -g heroku
   ```

2. **Git repository initialized**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Heroku account** - Sign up at https://heroku.com

## Step 1: Create Heroku App

```bash
# Login to Heroku
heroku login

# Create new Heroku app
heroku create your-portfolio-name

# Or let Heroku generate a random name
heroku create
```

## Step 2: Add Heroku Buildpacks

Laravel needs both PHP and Node.js buildpacks:

```bash
# Add Node.js buildpack (for React/Vite)
heroku buildpacks:add heroku/nodejs

# Add PHP buildpack
heroku buildpacks:add heroku/php
```

## Step 3: Create Required Files

### 3.1 Create `Procfile` (root directory)

```
web: vendor/bin/heroku-php-apache2 public/
```

### 3.2 Create `package.json` build script

Ensure your `package.json` has:

```json
{
  "scripts": {
    "build": "vite build",
    "postinstall": "npm run build"
  }
}
```

### 3.3 Update `composer.json`

Add post-install script:

```json
{
  "scripts": {
    "post-install-cmd": [
      "php artisan storage:link",
      "php artisan config:cache",
      "php artisan route:cache"
    ]
  }
}
```

## Step 4: Configure Database

Heroku uses PostgreSQL. Add to your app:

```bash
# Add PostgreSQL addon
heroku addons:create heroku-postgresql:essential-0

# This sets DATABASE_URL automatically
```

Update `config/database.php` to parse Heroku's DATABASE_URL:

```php
// At the top of config/database.php
$DATABASE_URL = parse_url(getenv("DATABASE_URL"));

// In the 'pgsql' connection:
'pgsql' => [
    'driver' => 'pgsql',
    'host' => $DATABASE_URL["host"] ?? env('DB_HOST', '127.0.0.1'),
    'port' => $DATABASE_URL["port"] ?? env('DB_PORT', '5432'),
    'database' => ltrim($DATABASE_URL["path"] ?? env('DB_DATABASE', 'forge'), '/'),
    'username' => $DATABASE_URL["user"] ?? env('DB_USERNAME', 'forge'),
    'password' => $DATABASE_URL["pass"] ?? env('DB_PASSWORD', ''),
    // ... rest of config
],

// Set default connection
'default' => env('DB_CONNECTION', 'pgsql'),
```

## Step 5: Set Environment Variables

```bash
# App settings
heroku config:set APP_NAME="Your Portfolio"
heroku config:set APP_ENV=production
heroku config:set APP_DEBUG=false
heroku config:set APP_KEY=$(php artisan key:generate --show)
heroku config:set APP_URL=https://your-app-name.herokuapp.com

# Session & Cache
heroku config:set SESSION_DRIVER=file
heroku config:set CACHE_DRIVER=file

# Database (already set by PostgreSQL addon)
heroku config:set DB_CONNECTION=pgsql

# Optional: Mail settings
heroku config:set MAIL_MAILER=smtp
heroku config:set MAIL_HOST=smtp.mailtrap.io
heroku config:set MAIL_PORT=2525
# ... add your mail credentials
```

## Step 6: Optimize Application

Create a deployment script in `composer.json`:

```json
{
  "scripts": {
    "post-autoload-dump": [
      "Illuminate\\Foundation\\ComposerScripts::postAutoloadDump",
      "@php artisan package:discover --ansi"
    ],
    "post-root-package-install": [
      "@php -r \"file_exists('.env') || copy('.env.example', '.env');\""
    ],
    "post-create-project-cmd": [
      "@php artisan key:generate --ansi"
    ]
  }
}
```

## Step 7: Prepare for Deployment

```bash
# Ensure .gitignore includes:
# /node_modules
# /public/hot
# /public/storage
# /storage/*.key
# /vendor
# .env
# .env.backup
# .phpunit.result.cache

# Make sure public/build is NOT in .gitignore
# (Vite builds need to be committed or built on Heroku)
```

## Step 8: Deploy to Heroku

```bash
# Add Heroku remote (if not already added)
heroku git:remote -a your-app-name

# Push to Heroku
git add .
git commit -m "Prepare for Heroku deployment"
git push heroku main

# Or if your branch is 'master'
git push heroku master
```

## Step 9: Run Migrations

```bash
heroku run php artisan migrate --force
```

## Step 10: Create Admin User (Optional)

```bash
heroku run php artisan tinker

# Then in tinker:
User::create([
    'name' => 'Admin',
    'email' => 'admin@example.com',
    'password' => bcrypt('your-secure-password')
]);
exit
```

## Post-Deployment

### View Your App
```bash
heroku open
```

### Check Logs
```bash
heroku logs --tail
```

### Run Artisan Commands
```bash
heroku run php artisan [command]
```

### Scale Dynos (if needed)
```bash
# Free tier
heroku ps:scale web=1

# Paid tier
heroku ps:scale web=2
```

## Troubleshooting

### 1. Build Failures
```bash
# Check build logs
heroku logs --tail

# Ensure all dependencies are in composer.json/package.json
# Not in require-dev
```

### 2. Vite Build Issues
```bash
# Manually build assets before deploying
npm run build
git add public/build -f
git commit -m "Add built assets"
git push heroku main
```

### 3. Database Connection Errors
```bash
# Verify DATABASE_URL is set
heroku config:get DATABASE_URL

# Check database config
heroku run php artisan config:show database
```

### 4. 500 Errors
```bash
# Enable debug temporarily
heroku config:set APP_DEBUG=true

# Check logs
heroku logs --tail

# Disable debug after fixing
heroku config:set APP_DEBUG=false
```

### 5. Storage Issues
```bash
# Heroku has ephemeral filesystem
# Use S3 or Cloudinary for file uploads
# Update FILESYSTEM_DISK to 's3'
```

## Optional Enhancements

### Custom Domain
```bash
heroku domains:add www.yourdomain.com
# Then update your DNS records
```

### SSL Certificate
```bash
# Automatic with custom domain
heroku certs:auto:enable
```

### Monitoring
```bash
# Add New Relic
heroku addons:create newrelic:wayne

# Add Papertrail for logs
heroku addons:create papertrail:choklad
```

## Important Notes

- **Heroku filesystem is ephemeral** - Files uploaded during runtime are lost on dyno restart
- **Use S3 or similar** for user uploads
- **Free dynos sleep** after 30 minutes of inactivity
- **Database has row limits** on free tier (10,000 rows)
- **Consider upgrading** for production apps

## Updating Your App

```bash
# Make changes locally
git add .
git commit -m "Update features"
git push heroku main

# Run migrations if needed
heroku run php artisan migrate --force

# Clear cache
heroku run php artisan cache:clear
heroku run php artisan config:cache
```
