# Weather App PWA

A Progressive Web App (PWA) built with Angular 18 that provides real-time weather information. The app is deployed using Firebase Hosting and leverages service workers for offline usage.

## ✨ Features

### Real-Time Weather Data
- Fetches current weather information using the OpenWeatherMap API
- Provides accurate and up-to-date weather conditions

### PWA Support
- Works offline through service worker implementation
- Can be installed on devices like a native app
- Instant loading with service worker caching

### Responsive Design
- Optimized for both mobile and desktop devices
- Fluid layout that adapts to different screen sizes
- Touch-friendly interface for mobile users

## 🛠️ Technologies Used

- **Angular 18**: Frontend framework
- **Firebase Hosting**: Deployment and hosting platform
- **OpenWeatherMap API**: Weather data provider
- **Service Workers**: Offline functionality and caching

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed on your machine
- Angular CLI installed globally (`npm install -g @angular/cli`)
- Firebase CLI installed globally (`npm install -g firebase-tools`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/xhoiKa/angularPWA.git
   ```

2. Navigate to project directory:
   ```bash
   cd angularPWA
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the app locally:
   ```bash
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`

### Deployment

1. Build for production:
   ```bash
   ng build --configuration production
   ```

2. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

## 🌐 Live Demo

Check out the live application: [Weather App](https://weather-app-ff162.web.app/)

## 📱 PWA Features

- **Offline Support**: Access previous weather data even without internet connection
- **Install Prompt**: Easy installation on supported devices
- **Fast Loading**: Cached resources for improved performance
- **Push Notifications**: Stay updated with weather alerts (coming soon)

## 💡 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
