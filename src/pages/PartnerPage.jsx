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
    Check,
    Package,
    Plus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './PartnerPage.css';

// Fix for default marker icon in Leaflet + React
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

const PartnerPage = () => {
    const [activeView, setActiveView] = useState('dashboard');
    const navigate = useNavigate();

    // Sections for the top navigation
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'manage', label: 'Manage Spot', icon: Home },
        { id: 'reviews', label: 'Reviews', icon: MessageSquare },
        { id: 'invitations', label: 'Invitations', icon: Send },
        { id: 'events', label: 'Events', icon: Calendar },
        { id: 'products', label: 'Products', icon: Package },
        { id: 'profile', label: 'Profile', icon: User },
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
                                <MapContainer
                                    center={[12.3051, 76.6552]}
                                    zoom={13}
                                    style={{ height: '100%', width: '100%' }}
                                    scrollWheelZoom={false}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={[12.3051, 76.6552]}>
                                        <Popup>
                                            <div className="text-sm font-bold">Your Heritage Spot</div>
                                            <div className="text-xs text-secondary">Mysuru Center</div>
                                        </Popup>
                                    </Marker>
                                </MapContainer>
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
                                    <input type="text" placeholder="Enter spot name" />
                                </div>
                                <div className="form-field">
                                    <label>Classification</label>
                                    <input type="text" placeholder="e.g. Hidden Gem, Heritage" />
                                </div>
                                <div className="form-field full-width">
                                    <label>Soulful Narrative</label>
                                    <textarea rows="4" placeholder="Describe the soul of your spot..."></textarea>
                                </div>
                                <div className="form-field">
                                    <label>Sacred Location</label>
                                    <input type="text" placeholder="Spot location" />
                                </div>
                                <div className="form-field">
                                    <label>Traditional Hours</label>
                                    <input type="text" placeholder="e.g. 6:00 AM - 8:00 PM" />
                                </div>
                                <div className="form-field full-width">
                                    <label>Contact Presence</label>
                                    <input type="text" placeholder="Official contact number" />
                                </div>
                            </form>
                            <button className="preserve-btn">Preserve Changes</button>
                        </div>
                    </div>
                );

            case 'invitations':
                return (
                    <div className="view-container">
                        <div className="hero-card mb-8">
                            <h2>Partner with Sovereignty</h2>
                            <p>Send a formal collaboration invite to the Heritage Administration to request verification badges, curated placement, or royal features.</p>
                            <button className="hero-action-btn">
                                <Send size={18} />
                                Request Heritage Collaboration
                            </button>
                        </div>

                        <div className="form-card">
                            <h2 className="card-title">Request Chronicle</h2>
                            <div className="flex flex-col items-center justify-center py-20 text-secondary" style={{ opacity: 0.5 }}>
                                <Check size={64} />
                                <p className="mt-4 font-semibold">No active chronicles found</p>
                            </div>
                        </div>
                    </div>
                );

            case 'products':
                return (
                    <div className="view-container">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="card-title">Listed Products</h2>
                            <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold">
                                <Plus size={16} />
                                Add New Product
                            </button>
                        </div>
                        <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
                            {[
                                { name: 'Rosewood Inlay Box', price: '₹2,450', category: 'Handicraft', stock: 12, img: 'https://images.unsplash.com/photo-1590736934523-9426f83ec891?q=80&w=800&auto=format&fit=crop' },
                                { name: 'Pure Mysore Silk', price: '₹8,900', category: 'Textiles', stock: 5, img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop' },
                                { name: 'Sandalwood Incense', price: '₹450', category: 'Aromatics', stock: 45, img: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=800&auto=format&fit=crop' },
                                { name: 'Traditional Brass Lamp', price: '₹1,200', category: 'Decor', stock: 8, img: 'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=800&auto=format&fit=crop' }
                            ].map((product, i) => (
                                <div key={i} className="stat-card" style={{ padding: '0', overflow: 'hidden' }}>
                                    <img src={product.img} alt={product.name} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                                    <div style={{ padding: '1.5rem' }}>
                                        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{product.category}</span>
                                        <h3 className="font-bold text-slate-800 mt-1">{product.name}</h3>
                                        <div className="flex justify-between items-center mt-4">
                                            <span className="font-extrabold text-lg">{product.price}</span>
                                            <span className="text-xs text-slate-500 font-medium">Stock: {product.stock}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'profile':
                return (
                    <div className="view-container">
                        <div className="form-card">
                            <h2 className="card-title mb-8">Heritage Identity</h2>
                            <div className="profile-card-horizontal mb-10" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div className="profile-avatar-large" style={{ width: '80px', height: '80px', backgroundColor: '#fef3c7', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706' }}>
                                    <User size={40} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Heritage Partner</h3>
                                    <p className="text-secondary font-medium">partner@mysurumarga.com</p>
                                </div>
                                <button className="relocate-btn" style={{ marginLeft: 'auto', backgroundColor: '#0f172a', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 700 }}>Relocate Photo</button>
                            </div>

                            <div className="toggles-grid">
                                <div className="toggle-item">
                                    <div className="toggle-info">
                                        <h3>Echo Notifications</h3>
                                        <p>Receive spiritual alerts when traveler echoes are recorded.</p>
                                    </div>
                                    <div className="switch on mt-6">
                                        <div className="switch-dot"></div>
                                    </div>
                                </div>
                                <div className="toggle-item">
                                    <div className="toggle-info">
                                        <h3>Heritage Visibility</h3>
                                        <p>Toggle your spot's presence in the physical soul of the app.</p>
                                    </div>
                                    <div className="switch on mt-6">
                                        <div className="switch-dot"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <button
                                    className="flex items-center gap-3 text-red-500 font-bold hover:bg-red-50 p-4 rounded-xl transition-colors w-full"
                                    onClick={() => navigate('/login')}
                                >
                                    <LogOut size={20} />
                                    <span>Sign Out from Dashboard</span>
                                </button>
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
            <header className="partner-header-nav">
                <div className="header-container">
                    <div className="partner-logo">
                        MYSURU <span>Partner</span>
                    </div>

                    <nav className="top-nav-menu">
                        {menuItems.map(item => (
                            <button
                                key={item.id}
                                className={`top-nav-link ${activeView === item.id ? 'active' : ''}`}
                                onClick={() => setActiveView(item.id)}
                            >
                                <item.icon size={18} />
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </header>

            <main className="partner-main">
                <div className="page-title-section">
                    <div className="welcome-header">
                        <h1>Welcome back</h1>
                        <p>Managing your <span>"Heritage Spot"</span></p>
                    </div>
                    <div className="live-badge">
                        <span className="live-dot pulse"></span>
                        Live Status
                    </div>
                </div>

                {renderView()}
            </main>
        </div>
    );
};

export default PartnerPage;
