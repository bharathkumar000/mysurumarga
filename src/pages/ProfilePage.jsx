import { useFavorites } from '../hooks/useFavorites.js';
import { User, Settings, Heart, MapPin, LogOut, ChevronRight, Bell, Shield, HelpCircle, Award } from 'lucide-react';
import './ProfilePage.css';

function ProfilePage() {
    const { favorites } = useFavorites();
    // Mock user data
    const user = {
        name: "Bharath Kumara",
        email: "bharath@mysuremarga.com",
        location: "Mysuru, Karnataka",
        joined: "February 2024",
        stats: {
            saved: favorites.length,
            visited: 12,
            reviews: 8
        },
        image: "https://ui-avatars.com/api/?name=Bharath+Kumara&background=d97706&color=fff&size=128"
    };

    return (
        <div className="profile-page">
            <div className="profile-header container">
                <div className="profile-info-card">
                    <div className="flex items-center gap-4">
                        <img src={user.image} alt={user.name} className="profile-avatar" />
                        <div>
                            <h1 className="profile-name">{user.name}</h1>
                            <p className="profile-email">{user.email}</p>
                            <div className="profile-location">
                                <MapPin size={14} />
                                <span>{user.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="profile-stats">
                        <div className="stat-item">
                            <span className="stat-value">{user.stats.saved}</span>
                            <span className="stat-label">Saved</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">{user.stats.visited}</span>
                            <span className="stat-label">Visited</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">{user.stats.reviews}</span>
                            <span className="stat-label">Reviews</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-content container">
                <section className="profile-section">
                    <h2 className="section-title">My Activity</h2>
                    <div className="menu-list">
                        <div className="menu-item">
                            <div className="menu-icon-wrapper heritage"><Heart size={20} /></div>
                            <span>Saved Collections</span>
                            <ChevronRight className="menu-arrow" size={18} />
                        </div>
                        <div className="menu-item">
                            <div className="menu-icon-wrapper nature"><MapPin size={20} /></div>
                            <span>My Exploration Map</span>
                            <ChevronRight className="menu-arrow" size={18} />
                        </div>
                        <div className="menu-item">
                            <div className="menu-icon-wrapper food"><Award size={20} /></div>
                            <span>Explorer Badges</span>
                            <ChevronRight className="menu-arrow" size={18} />
                        </div>
                    </div>
                </section>

                <section className="profile-section">
                    <h2 className="section-title">Account Settings</h2>
                    <div className="menu-list">
                        <div className="menu-item">
                            <div className="menu-icon-wrapper grey"><Bell size={20} /></div>
                            <span>Notifications</span>
                            <ChevronRight className="menu-arrow" size={18} />
                        </div>
                        <div className="menu-item">
                            <div className="menu-icon-wrapper grey"><Shield size={20} /></div>
                            <span>Privacy & Security</span>
                            <ChevronRight className="menu-arrow" size={18} />
                        </div>
                        <div className="menu-item">
                            <div className="menu-icon-wrapper grey"><HelpCircle size={20} /></div>
                            <span>Support & Help</span>
                            <ChevronRight className="menu-arrow" size={18} />
                        </div>
                    </div>
                </section>

                <button className="logout-button">
                    <LogOut size={20} />
                    <span>Sign Out</span>
                </button>
            </div>
        </div>
    );
}

export default ProfilePage;
