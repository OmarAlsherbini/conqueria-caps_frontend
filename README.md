# Conqueria Caps - Frontend _(IN PROGRESS)_

### About the Game
**Conqueria Caps** is an online, real-time strategy board game where 2-6 players compete for control over territories on a dynamic world map. The game involves strategic decision-making with the objective of building resources, fortifying defenses, and launching attacks on opponents. Each player begins with equal resources and must leverage their strategic prowess to dominate the game by capturing enemy capitals or controlling the most territories.

**Conqueria Caps** features a comprehensive leaderboard system, in-game premium features, real-time communication between players, and a rich variety of defensive and offensive gameplay options. The game supports both free-to-play and premium models, with cosmetic and strategic enhancements available to premium users.

This repository contains the **frontend** source code for **Conqueria Caps**, built using **ReactJS** and styled with **Tailwind CSS**. It communicates with the **FastAPI** backend through REST APIs and WebSockets.

---

## Features

- **Real-Time Gameplay**: Synchronize turns, actions, and updates between players in real time using WebSockets.
- **Dynamic World Map**: Interactive map-based gameplay where players capture territories, build structures, and engage in combat.
- **In-Game Actions**: Manage resources to generate money, fortify defenses, and launch attack waves.
- **User Authentication**: Secure login/signup using JWT and OAuth (Google, Facebook, Steam).
- **Game Lobby and Matchmaking**: Join or host games with customizable settings.
- **Leaderboard and Rankings**: View global rankings based on victories, skill points, and captured territories.
- **Premium Features**: Unlock premium cosmetics, troops, and game settings with in-game purchases.
- **In-Game Chat**: Real-time communication between players during gameplay and in lobbies.
- **Responsive Design**: Fully responsive design to ensure an optimized experience across devices.

---

## Installation

### Prerequisites

- **Node.js** (v14.x or higher)
- **npm** or **yarn**
- **Git**

### Steps to Install

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/conqueria-caps-frontend.git
   cd conqueria-caps-frontend
   ```

2. **Install dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory of the project with the following variables:

   ```bash
   REACT_APP_API_URL=http://localhost:8000  # Backend API URL
   REACT_APP_WEBSOCKET_URL=ws://localhost:8000/ws  # WebSocket URL
   REACT_APP_OAUTH_GOOGLE_CLIENT_ID=<your_google_client_id>
   REACT_APP_OAUTH_FACEBOOK_CLIENT_ID=<your_facebook_client_id>
   REACT_APP_OAUTH_STEAM_API_KEY=<your_steam_api_key>
   ```

4. **Run the development server**:
   ```bash
   npm start
   ```
   The app will run at `http://localhost:3000`.

---

## Building for Production

To build the app for production, run:

```bash
npm run build
```

This will create an optimized production build of the app in the `build/` directory, ready for deployment.

---

## Included Features

### **1. User Authentication & Profile Management**
   - **Sign Up/Login**: Users can register or log in using email or OAuth (Google, Facebook, Steam).
   - **Profile Management**: Displays user profile information such as rank, premium status, and customization options.
   - **Session Handling**: Manage user sessions with JWT-based authentication.

### **2. Game Lobby & Matchmaking**
   - **Lobby System**: Players can join or create game lobbies, and chat with other players in real time.
   - **Matchmaking**: Players can either join existing games or wait for matchmaking to fill available slots based on skill points.
   - **Game Settings**: Hosts can customize game settings like map, turn time, max game time, and premium options (fog of war, alliances).

### **3. In-Game Actions**
   - **Generate Money**: Build money generators to increase income over multiple turns.
   - **Fortify Defenses**: Build or upgrade defensive structures such as gunners, anti-air cannons, or flame throwers.
   - **Launch Attacks**: Deploy attacking units (troops, tanks, air units) and prioritize targets (cities, buildings, etc.).

### **4. Game State Management**
   - **Turn-Based Gameplay**: Displays the current player's turn, turn timer, and the available actions for that player.
   - **Real-Time Updates**: Using WebSockets, game state (territory ownership, building status, attack outcomes) is updated across all players in real time.

### **5. Leaderboard & Rankings**
   - **Global Leaderboard**: Displays player rankings based on victories, skill points, and in-game performance.
   - **Skill Points Calculation**: After each game, skill points are updated based on game results.

### **6. Premium Features & Monetization**
   - **In-Game Purchases**: Purchase tokens, gems, and other premium features via the UI.
   - **Custom Cosmetics**: Premium players can customize their avatars, cities, troops, and game UI.

### **7. Real-Time Communication**
   - **In-Game Chat**: Players can communicate with each other during gameplay. Chat functionality is restricted based on premium status where applicable (e.g., chat only between allies).

### **8. Responsive Design**
   - **Fully Responsive**: The game interface adjusts to different screen sizes, ensuring that the gameplay experience remains intuitive across desktops, tablets, and smartphones.

---

## CI/CD Pipeline

This repository includes a **GitHub Actions** CI/CD pipeline to automate testing, building, and deployment.

### Steps for CI/CD:

1. **Frontend Build**: On each pull request or push to the `main` branch, the frontend is automatically built and tested.
2. **Deployment**: Once tests pass, the build is automatically deployed to the development or production environment based on the branch.

The pipeline uses **Render** for deployment, with separate environments for development and production.

---

## Deployment

The frontend is deployed using **Render**. To deploy the frontend, follow these steps:

1. **Build the production app**:
   ```bash
   npm run build
   ```

2. **Deploy to Render**:
   - Set up a new **Static Site** on Render.
   - Link the repository and point the build directory to `/build`.

3. **Configure Environment Variables**:
   - Add the environment variables from your `.env` file (e.g., API URL, WebSocket URL) in the Render dashboard.

4. **Enable SSL**:
   - Enable **Let’s Encrypt** SSL for secure HTTPS connections.

---

## Testing

You can run automated tests to ensure the frontend functions correctly. To run the test suite:

1. **Run the tests**:
   ```bash
   npm test
   ```

Tests include unit tests for components and integration tests for key interactions.

---

## Project Structure

The project is structured as follows:

```bash
conqueria-caps-frontend/
├── public/           # Static files
├── src/
│   ├── assets/       # Images, icons, and other assets
│   ├── components/   # Reusable UI components (e.g., buttons, forms)
│   ├── hooks/        # Custom React hooks
│   ├── pages/        # Main pages of the app (Login, Game Lobby, Game Screen)
│   ├── services/     # API calls and WebSocket management
│   ├── store/        # Redux store and state management
│   ├── styles/       # Tailwind CSS styles
│   └── utils/        # Helper functions and utilities
├── .env              # Environment variables
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```

---

## API Integration

The frontend communicates with the backend using **REST APIs** and **WebSockets**. 

### Example API Calls:

- **Login**: POST request to `REACT_APP_API_URL/auth/login`.
- **Fetch Profile**: GET request to `REACT_APP_API_URL/user/profile`.
- **Start Game**: POST request to `REACT_APP_API_URL/game/start`.

WebSockets are used for real-time communication during gameplay (turn management, lobby updates, chat).

---

## Contributing

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Conqueria Caps** is a dynamic and competitive strategy game, and your contributions are always welcome! Feel free to report issues or submit feature requests to help improve the game.
