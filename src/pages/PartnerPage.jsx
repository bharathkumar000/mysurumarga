import { useState } from 'react';
import {
    LayoutDashboard,
    Home,
    MessageSquare,
    Send,
    Calendar,
    Settings,
    LogOut,
    User,
    Navigation,
    Plus,
    Check
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './PartnerPage.css';

const PartnerPage = () => {
    const [activeView, setActiveView] = useState('dashboard');
    const navigate = useNavigate();

    // Sections as shown in the screenshot sidebar
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'manage', label: 'Manage Spot', icon: Home },
        { id: 'reviews', label: 'Reviews', icon: MessageSquare },
        { id: 'invitations', label: 'Invitations', icon: Send },
        { id: 'events', label: 'Events & Offers', icon: Calendar },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    const stats = [
        { label: 'Reviews', value: 0, badge: '+5 NEW', icon: MessageSquare, color: 'purple' },
        { label: 'Profile Views', value: 8, badge: '+12%', icon: User, color: 'green' },
    ];

    const renderView = () => {
        switch (activeView) {
            case 'dashboard':
                return (
                    <div className="view-container">
                        <div className="stats-grid">
                            {stats.map((stat, i) => (
                                <div key={i} className="stat-card">
                                    <div className={`stat-icon-bg bg-${stat.color}`}>
                                        <stat.icon size={24} />
                                    </div>
                                    <div className="stat-badge">{stat.badge}</div>
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="map-card">
                            <div className="card-header-flex">
                                <div>
                                    <h2 className="card-title">Heritage Map Presence</h2>
                                    <p className="card-subtitle">Your spot's spatial identity in the Mysuru ecosystem</p>
                                </div>
                                <div className="live-badge">
                                    <span className="live-dot pulse"></span>
                                    Live Elevation
                                </div>
                            </div>
                            <div className="map-container">
                                <img
                                    src="https://images.unsplash.com/photo-1526778545894-6297aa49da52?q=80&w=2000&auto=format&fit=crop"
                                    alt="Map of Mysuru"
                                    className="map-placeholder"
                                />
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'red' }}>
                                    {/* Simulated pin */}
                                    <Navigation fill="currentColor" size={32} />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'manage':
                return (
                    <div className="view-container">
                        <div className="form-card">
                            <h2 className="card-title mb-8">Curation Details</h2>
                            <form className="form-grid">
                                <div className="form-field">
                                    <label>Heritage Spot Name</label>
                                    <input type="text" defaultValue="Karanji Lake" />
                                </div>
                                <div className="form-field">
                                    <label>Classification</label>
                                    <input type="text" defaultValue="Hidden Gem" />
                                </div>
                                <div className="form-field full-width">
                                    <label>Soulful Narrative</label>
                                    <textarea rows="4" defaultValue="Serene nature trail with butterfly park and panoramic palace views. A pristine sanctuary in the heart of Mysore."></textarea>
                                </div>
                                <div className="form-field">
                                    <label>Sacred Location</label>
                                    <input type="text" defaultValue="Siddhartha Layout, Mysuru" />
                                </div>
                                <div className="form-field">
                                    <label>Traditional Hours</label>
                                    <input type="text" defaultValue="6:00 AM - 8:00 PM" />
                                </div>
                                <div className="form-field full-width">
                                    <label>Contact Presence</label>
                                    <input type="text" defaultValue="+91 XXXXX XXXXX" />
                                </div>
                            </form>
                            <button className="preserve-btn">Preserve Changes</button>
                        </div>
                    </div>
                );

            case 'invitations':
                return (
                    <div className="view-container">
                        <div className="hero-card">
                            <h2>Partner with Sovereignty</h2>
                            <p>Send a formal collaboration invite to the Heritage Administration to request verification badges, curated placement, or royal features.</p>
                            <button className="hero-action-btn">
                                <Send size={18} />
                                Request Heritage Collaboration
                            </button>
                            <div className="hero-bg-art">
                                <Send size={200} />
                            </div>
                        </div>

                        <div className="form-card">
                            <h2 className="card-title">Request Chronicle</h2>
                            <div className="flex flex-col items-center justify-center py-20 text-secondary">
                                <div style={{ opacity: 0.2, marginBottom: '1rem' }}>
                                    <Check size={64} />
                                </div>
                                <p>No active chronicles found</p>
                            </div>
                        </div>
                    </div>
                );

            case 'settings':
                return (
                    <div className="view-container">
                        <div className="form-card">
                            <h2 className="card-title mb-8">Heritage Identity</h2>
                            <div className="profile-card-horizontal">
                                <div className="profile-avatar-large">
                                    <User size={40} />
                                </div>
                                <div>
                                    <h3 className="profile-name-lg">Srinivas P</h3>
                                    <p className="profile-email-grey">SRINIVAS2006.SRINI@GMAIL.COM</p>
                                </div>
                                <button className="relocate-btn">Relocate Photo</button>
                            </div>

                            <div className="toggles-grid">
                                <div className="toggle-item">
                                    <div className="toggle-info">
                                        <h3>Echo Notifications</h3>
                                        <p>Receive spiritual alerts when traveler echoes are recorded.</p>
                                    </div>
                                    <div className="switch on">
                                        <div className="switch-dot"></div>
                                    </div>
                                </div>
                                <div className="toggle-item">
                                    <div className="toggle-info">
                                        <h3>Heritage Visibility</h3>
                                        <p>Toggle your spot's presence in the physical soul of the app.</p>
                                    </div>
                                    <div className="switch on">
                                        <div className="switch-dot"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return <div className="p-20 text-center text-secondary">Section coming soon...</div>;
        }
    };

    return (
        <div className="partner-page">
            <aside className="partner-sidebar">
                <div className="partner-logo">
                    MYSURU <span>Partner</span>
                </div>

                <nav className="nav-menu">
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            className={`nav-link ${activeView === item.id ? 'active' : ''}`}
                            onClick={() => setActiveView(item.id)}
                        >
                            <item.icon size={20} />
                            {item.label}
                        </button>
                    ))}

                    <button className="nav-link logout-link mt-auto" onClick={() => navigate('/login')}>
                        <LogOut size={20} />
                        Log Out
                    </button>
                </nav>
            </aside>

            <main className="partner-main">
                <div className="welcome-header">
                    <h1>Welcome, Srinivas</h1>
                    <p>Managing <span>"Karanji Lake"</span></p>
                    <div style={{ position: 'absolute', top: '3rem', right: '3rem' }}>
                        <div className="live-badge">
                            <span className="live-dot pulse"></span>
                            Live Status
                        </div>
                    </div>
                </div>

                {renderView()}
            </main>
        </div>
    );
};

export default PartnerPage;
