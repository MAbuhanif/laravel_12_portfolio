# Modern Portfolio Website

A premium, high-performance portfolio website built with **Laravel 12** and **React** (Inertia.js). Designed to showcase projects and skills with a focus on aesthetics, responsiveness, and user experience.

![Portfolio Preview](https://via.placeholder.com/1200x600.png?text=Portfolio+Preview)
*(Note: Replace with actual screenshot)*

## 🚀 Features

- **Modern Tech Stack**: Built on the robust Laravel 12 framework and React 18.
- **Premium Design**: Custom dark mode aesthetic with "Outfit" typography and smooth gradients.
- **Responsive Layout**: Fully responsive design that looks great on mobile, tablet, and desktop.
- **Animations**: Entrance and scroll animations powered by `framer-motion`.
- **SPA Experience**: Seamless page transitions using Inertia.js.
- **SEO Optimized**: Proper meta tags and semantic HTML structure.

## 🛠️ Tech Stack

- **Backend**: Laravel 12
- **Frontend**: React, Inertia.js
- **Styling**: Tailwind CSS
- **Database**: SQLite (Default) / MySQL
- **Animations**: Framer Motion
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MAbuhanif/laravel_12_portfolio.git
   cd Abyssinya
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Environment Setup**
   Copy the example environment file and configure your database:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
   *Note: The project uses SQLite by default. If you prefer MySQL, update `DB_CONNECTION` in `.env`.*

5. **Run Migrations**
   ```bash
   php artisan migrate
   ```

6. **Build Assets**
   ```bash
   npm run build
   ```

## 🖥️ Usage

**Development Server**
Start the Laravel development server and Vite hot-reload server:

```bash
# Terminal 1
php artisan serve

# Terminal 2
npm run dev
```

Visit `http://localhost:8000` to view the application.

**Production Build**
To build the application for production:

```bash
npm run build
```

## 📂 Project Structure

- `resources/js/Pages` - React page components (Home, About, Projects, Contact).
- `resources/js/Components` - Reusable UI components (Navbar, Footer, etc.).
- `resources/js/Layouts` - Main application layouts.
- `routes/web.php` - Web routes definition.
- `tailwind.config.js` - Tailwind CSS configuration.

## 📄 License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
