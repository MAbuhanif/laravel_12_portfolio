---
description: Deploy Laravel 12 + React/Inertia.js application to Heroku using JawsDB MySQL
---

# Deploying to Heroku with JawsDB MySQL

This guide walks you through deploying your Laravel 12 portfolio application with React/Inertia.js to Heroku using the JawsDB MySQL add-on.

## Prerequisites

1. **Heroku CLI installed**
2. **Git repository initialized**
3. **Heroku account**

## Step 1: Create Heroku App

```bash
# Login to Heroku
heroku login

# Create new Heroku app
heroku create your-portfolio-name
```

## Step 2: Add Heroku Buildpacks

```bash
# Add Node.js buildpack (for React/Vite)
heroku buildpacks:add heroku/nodejs

# Add PHP buildpack
heroku buildpacks:add heroku/php
```

## Step 3: Configure Database (JawsDB MySQL)

```bash
# Add JawsDB MySQL addon (Kite is the free tier)
heroku addons:create jawsdb:kite
```

This will automatically set a `JAWSDB_URL` environment variable in your Heroku app. We have already updated `config/database.php` to use this variable if present.

## Step 4: Set Environment Variables

```bash
# App settings
heroku config:set APP_NAME="Abyssinya Portfolio"
heroku config:set APP_ENV=production
heroku config:set APP_DEBUG=false
heroku config:set APP_KEY=$(php artisan key:generate --show)
heroku config:set APP_URL=https://your-app-name.herokuapp.com

# Session & Cache
heroku config:set SESSION_DRIVER=file
heroku config:set CACHE_DRIVER=file

# Database Connection (Force MySQL)
heroku config:set DB_CONNECTION=mysql
```

## Step 5: Prepare for Deployment

### 5.1 Verify `Procfile`
Ensure your `Procfile` in the root directory contains:
```
web: vendor/bin/heroku-php-apache2 public/
```

### 5.2 Verify `package.json`
Ensure `scripts` contains:
```json
"build": "vite build",
"postinstall": "npm run build"
```

### 5.3 Verify `composer.json`
Ensure `post-install-cmd` includes:
```json
"post-install-cmd": [
    "php artisan storage:link",
    "php artisan config:cache",
    "php artisan route:cache"
]
```

## Step 6: Deploy

```bash
# Commit changes
git add .
git commit -m "Configure for Heroku deployment with JawsDB"

# Push to Heroku
git push heroku main
```

## Step 7: Run Migrations

```bash
heroku run php artisan migrate --force
```

## Step 8: Create Admin User (Optional)

```bash
heroku run php artisan tinker
```

In the tinker shell:
```php
User::create([
    'name' => 'Admin',
    'email' => 'admin@example.com',
    'password' => bcrypt('your-secure-password')
]);
exit
```

## Troubleshooting

- **Database Connection**: If you see database errors, verify the config variable:
  ```bash
  heroku config:get JAWSDB_URL
  ```
- **Build Failures**: Check logs with `heroku logs --tail`.
