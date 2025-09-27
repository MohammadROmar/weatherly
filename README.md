# 🌥️ Weatherly

**Weatherly** is a modern weather dashboard built with **React.js** that lets you check real-time and forecasted weather data.  
Users can allow location access to instantly get their local weather or search for any city worldwide.

---

## ✨ Features

- 📍 **Location-Based Weather** – Get current weather details for your location.
- 🌤 **5-Day Forecast** – Stay prepared with upcoming weather trends.
- 🌡 **Detailed Metrics** – View temperature, humidity, wind speed, direction, pressure, sunrise, and sunset.
- 🔍 **City Search** – Search for any city to get its weather data.
- 📊 **Interactive Charts** – Visualize weather data with Recharts.
- ⚡ **Optimized Data Fetching** – Powered by TanStack Query for caching & refetching.

---

## 🛠️ Technologies

- [React.js](https://react.dev/) – Core UI library
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) – Accessible & modern components
- [React Router](https://reactrouter.com/) – Client-side routing
- [Recharts](https://recharts.org/) – Data visualization
- [TanStack Query](https://tanstack.com/query) – Data fetching & caching
- [Lucide React](https://lucide.dev/) – Beautiful, consistent icons

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/MohammadROmar/weatherly.git

cd weatherly
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

#### API

**Weatherly** fetches data from **OpenWeatherMap** to deliver accurate and up-to-date weather insights.
You will need an API key to make requests – create a .env file and add your key:

```bash
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

## 🌐 Live Demo

Check out the live version of Weatherly here: 🔗 [weatherly-site.vercel.app](https://weatherly-site.vercel.app)
