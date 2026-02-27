import { useState } from 'react';
import {
    Sparkles, Send, Bot, User, ArrowLeft, Calendar, MapPin,
    Clock, ChevronRight, Users, Wallet, Bed, Utensils, Bus, Car, Coffee, UtensilsCrossed, Hotel
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './TravaAIPage.css';

function TravaAIPage() {
    const [view, setView] = useState('chat'); // 'chat', 'form', 'plan'
    const [formData, setFormData] = useState({
        tripName: '',
        startingFrom: '',
        destinations: '',
        travelers: '1',
        startDate: '',
        endDate: '',
        budget: 'moderate',
        accommodation: 'comfort',
        dietary: 'all',
        diningStyle: 'family',
        transport: 'personal'
    });
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { role: 'ai', content: 'Namaskara! I am Trava AI, your personal Mysuru travel companion. How can I help you explore the city today?' }
    ]);
    const navigate = useNavigate();

    const handleSend = () => {
        if (!input.trim()) return;
        const newMessages = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        setInput('');
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'ai',
                content: `That sounds like a great idea! I can help you build a full plan using these details. Tap 'Create Plan' to start!`
            }]);
        }, 1000);
    };

    const mockItinerary = [
        { day: 1, title: 'Heritage & Grandeur', spots: ['Mysore Palace', 'Devaraja Market', 'Jaganmohan Palace'] },
        { day: 2, title: 'Nature & Views', spots: ['Chamundi Hills', 'Karanji Lake', 'Sand Sculpture Museum'] },
        { day: 3, title: 'Silk & Flavors', spots: ['KSIC Silk Factory', 'Mylari Dosa', 'St. Philomena Cathedral'] }
    ];

    const renderForm = () => (
        <div className="planner-form-container container py-6 pb-24">
            <div className="form-section-card">
                <div className="section-header">
                    <Sparkles size={20} className="text-primary" />
                    <h3>Trip Essentials</h3>
                </div>

                <div className="form-grid">
                    <div className="heritage-field">
                        <label>Trip Name</label>
                        <input
                            type="text"
                            placeholder="e.g., Mysore Heritage Tour"
                            value={formData.tripName}
                            onChange={(e) => setFormData({ ...formData, tripName: e.target.value })}
                        />
                    </div>
                    <div className="heritage-field">
                        <label>Starting From</label>
                        <input
                            type="text"
                            placeholder="e.g., Bangalore"
                            value={formData.startingFrom}
                            onChange={(e) => setFormData({ ...formData, startingFrom: e.target.value })}
                        />
                    </div>
                    <div className="heritage-field">
                        <label>Destinations</label>
                        <input
                            type="text"
                            placeholder="Where do you want to go?"
                            value={formData.destinations}
                            onChange={(e) => setFormData({ ...formData, destinations: e.target.value })}
                        />
                    </div>
                    <div className="heritage-field">
                        <label><Users size={14} /> Travelers</label>
                        <input
                            type="number"
                            value={formData.travelers}
                            onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                        />
                    </div>
                </div>
            </div>

            <div className="form-section-card mt-6">
                <div className="section-header">
                    <Calendar size={20} className="text-primary" />
                    <h3>Trip Details</h3>
                </div>
                <div className="form-grid-2">
                    <div className="heritage-field">
                        <label>Start Date</label>
                        <input type="date" value={formData.startDate} onChange={(e) => setFormData({ ...formData, startDate: e.target.value })} />
                    </div>
                    <div className="heritage-field">
                        <label>End Date</label>
                        <input type="date" value={formData.endDate} onChange={(e) => setFormData({ ...formData, endDate: e.target.value })} />
                    </div>
                </div>

                <div className="option-group mt-4">
                    <label>Budget Level</label>
                    <div className="option-pills">
                        {['budget', 'moderate', 'luxury'].map(b => (
                            <button
                                key={b}
                                className={`option-pill ${formData.budget === b ? 'active' : ''}`}
                                onClick={() => setFormData({ ...formData, budget: b })}
                            >
                                <Wallet size={14} /> {b.charAt(0).toUpperCase() + b.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="option-group mt-4">
                    <label>Accommodation</label>
                    <div className="option-pills">
                        {['hostel', 'budget', 'comfort', 'luxury'].map(a => (
                            <button
                                key={a}
                                className={`option-pill ${formData.accommodation === a ? 'active' : ''}`}
                                onClick={() => setFormData({ ...formData, accommodation: a })}
                            >
                                <Hotel size={14} /> {a.charAt(0).toUpperCase() + a.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="form-section-card mt-6">
                <div className="section-header">
                    <Utensils size={20} className="text-primary" />
                    <h3>Food & Transport</h3>
                </div>

                <div className="option-group">
                    <label>Dietary Preference</label>
                    <div className="option-pills">
                        {['all', 'non-veg', 'veg', 'vegan'].map(d => (
                            <button
                                key={d}
                                className={`option-pill ${formData.dietary === d ? 'active' : ''}`}
                                onClick={() => setFormData({ ...formData, dietary: d })}
                            >
                                <UtensilsCrossed size={14} /> {d.replace('-', ' ').toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="option-group mt-4">
                    <label>Dining Style</label>
                    <div className="option-pills">
                        {['street', 'family', 'fine'].map(s => (
                            <button
                                key={s}
                                className={`option-pill ${formData.diningStyle === s ? 'active' : ''}`}
                                onClick={() => setFormData({ ...formData, diningStyle: s })}
                            >
                                <Coffee size={14} /> {s.charAt(0).toUpperCase() + s.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="option-group mt-4">
                    <label>Transport</label>
                    <div className="option-pills">
                        <button
                            className={`option-pill ${formData.transport === 'personal' ? 'active' : ''}`}
                            onClick={() => setFormData({ ...formData, transport: 'personal' })}
                        >
                            <Car size={14} /> Personal
                        </button>
                        <button
                            className={`option-pill ${formData.transport === 'public' ? 'active' : ''}`}
                            onClick={() => setFormData({ ...formData, transport: 'public' })}
                        >
                            <Bus size={14} /> Public
                        </button>
                    </div>
                </div>
            </div>

            <button className="generate-plan-btn mt-8" onClick={() => setView('plan')}>
                GENERATE MY HERITAGE VOYAGE
            </button>
        </div>
    );

    return (
        <div className="trava-ai-page">
            <div className="ai-header">
                <div className="container flex items-center justify-between mb-4">
                    <button onClick={() => navigate(-1)} className="text-white">
                        <ArrowLeft size={24} />
                    </button>
                    <div className="view-switcher">
                        <button className={`switch-btn ${view === 'chat' ? 'active' : ''}`} onClick={() => setView('chat')}>Chat</button>
                        <button className={`switch-btn ${view === 'form' ? 'active' : ''}`} onClick={() => setView('form')}>Create Plan</button>
                        {view === 'plan' && <button className="switch-btn active" onClick={() => setView('plan')}>View Plan</button>}
                    </div>
                </div>
                <h1><Sparkles size={28} /> Trava AI</h1>
                <p>{view === 'chat' ? 'Your intelligent guide to Mysuru' : 'Tailoring your perfect heritage experience'}</p>
            </div>

            {view === 'chat' ? (
                <>
                    <div className="chat-container">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`chat-bubble ${msg.role}`}>
                                {msg.content}
                            </div>
                        ))}
                    </div>
                    <div className="ai-input-wrapper">
                        <div className="suggestion-chips container mb-3">
                            <button className="suggestion-chip">Best Mysore Pak?</button>
                            <button className="suggestion-chip">Chamundi Hill timings</button>
                            <button className="suggestion-chip">Hidden heritage spots</button>
                        </div>
                        <div className="ai-input-container container">
                            <input
                                type="text"
                                placeholder="Ask Trava anything..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button className="send-btn" onClick={handleSend}><Send size={18} /></button>
                        </div>
                    </div>
                </>
            ) : view === 'form' ? (
                renderForm()
            ) : (
                <div className="planner-container container py-6">
                    <div className="planner-card">
                        <div className="planner-card-header">
                            <Calendar size={20} className="text-primary" />
                            <h3>{formData.tripName || 'Mysuru Heritage Expedition'}</h3>
                            <span className="days-tag">Custom Plan</span>
                        </div>
                        <div className="itinerary-list">
                            {mockItinerary.map((dayPlan, i) => (
                                <div key={i} className="itinerary-day">
                                    <div className="day-number">Day {dayPlan.day}</div>
                                    <div className="day-content">
                                        <h4>{dayPlan.title}</h4>
                                        <div className="day-spots">
                                            {dayPlan.spots.map((spot, j) => (
                                                <div key={j} className="spot-item">
                                                    <MapPin size={14} />
                                                    <span>{spot}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <ChevronRight size={18} className="text-secondary" />
                                </div>
                            ))}
                        </div>
                        <button className="primary-btn-wide mt-6" onClick={() => setView('form')}>
                            Adjust Preferences
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TravaAIPage;
