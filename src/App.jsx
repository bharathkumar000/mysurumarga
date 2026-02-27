import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ExplorePage from './pages/ExplorePage';
import MapPage from './pages/MapPage';
import SavedPage from './pages/SavedPage';
import LoginPage from './pages/LoginPage';
import TravaAIPage from './pages/TravaAIPage';
import BottomNav from './components/BottomNav';
import TravaBot from './components/TravaBot';
import './index.css';

// A small wrapper to hide navigation on login page
function AppLayout() {
  const location = useLocation();
  const hideNav = location.pathname === '/login';

  return (
    <>
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Navigate to="/explore" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/trava-ai" element={<TravaAIPage />} />
          <Route path="/saved" element={<SavedPage />} />
        </Routes>
      </div>
      {!hideNav && <BottomNav />}
      {!hideNav && <TravaBot />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
