import { NavLink } from 'react-router-dom';
import { Home, Compass, Map, Heart, User, Sparkles } from 'lucide-react';
import './BottomNav.css';

function BottomNav() {
    return (
        <nav className="bottom-nav">
            <div className="nav-items container">
                <NavLink to="/explore" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <Compass className="nav-icon" />
                    <span className="nav-label">Explore</span>
                </NavLink>

                <NavLink to="/map" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <Map className="nav-icon" />
                    <span className="nav-label">Map</span>
                </NavLink>

                <NavLink to="/saved" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <Heart className="nav-icon" />
                    <span className="nav-label">Saved</span>
                </NavLink>

                <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <User className="nav-icon" />
                    <span className="nav-label">Profile</span>
                </NavLink>
            </div>
        </nav>
    );
}

export default BottomNav;
