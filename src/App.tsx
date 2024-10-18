import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes/routes';
// import Breadcrumbs from './utils/components/breadcrumbs';
import './App.css'

function App() {

  // Auth Check (Placeholder, can replace with real auth check)
  const isAuthenticated = true; // This will change based on your auth logic

  return (
    <Router>
      <div>
        {/* <Breadcrumbs /> */}
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.requiresAuth ? (
                  isAuthenticated ? (
                    <route.component />
                  ) : (
                    <Navigate to="/login" />
                  )
                ) : (
                  <route.component />
                )
              }
            />
          ))}
        </Routes>
      </div>
    </Router>
  )
}

export default App
