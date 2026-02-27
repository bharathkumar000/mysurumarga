import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ExplorePage from './pages/ExplorePage';
import MapPage from './pages/MapPage';
import SavedPage from './pages/SavedPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import TravaAIPage from './pages/TravaAIPage';
import PartnerPage from './pages/PartnerPage';
import BottomNav from './components/BottomNav';
import TravaBot from './components/TravaBot';
import './index.css';

// A small wrapper to hide navigation on login and partner pages
function AppLayout() {
  const location = useLocation();
  const hideNav = location.pathname === '/login' || location.pathname.startsWith('/partner');

  return (
    <>
      <div className={hideNav && location.pathname.startsWith('/partner') ? "" : "app-content"}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/trava-ai" element={<TravaAIPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/partner" element={<PartnerPage />} />
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
