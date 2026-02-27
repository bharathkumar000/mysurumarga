import { useState } from 'react';
import { Sparkles, Send, Bot, User, ArrowLeft, Calendar, MapPin, Clock, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './TravaAIPage.css';

function TravaAIPage() {
    const [view, setView] = useState('chat'); // 'chat' or 'plan'
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
                content: `That sounds like a great idea! I've updated your trip plan with some ${input} related suggestions. Check the 'My Plan' tab!`
            }]);
        }, 1000);
    };

    const mockItinerary = [
        { day: 1, title: 'Heritage & Grandeur', spots: ['Mysore Palace', 'Devaraja Market', 'Jaganmohan Palace'] },
        { day: 2, title: 'Nature & Views', spots: ['Chamundi Hills', 'Karanji Lake', 'Sand Sculpture Museum'] },
        { day: 3, title: 'Silk & Flavors', spots: ['KSIC Silk Factory', 'Mylari Dosa', 'St. Philomena Cathedral'] }
    ];

    return (
        <div className="trava-ai-page">
            <div className="ai-header">
                <div className="container flex items-center justify-between mb-4">
                    <button onClick={() => navigate(-1)} className="text-white">
                        <ArrowLeft size={24} />
                    </button>
                    <div className="view-switcher">
                        <button
                            className={`switch-btn ${view === 'chat' ? 'active' : ''}`}
                            onClick={() => setView('chat')}
                        >
                            Chat
                        </button>
                        <button
                            className={`switch-btn ${view === 'plan' ? 'active' : ''}`}
                            onClick={() => setView('plan')}
                        >
                            My Plan
                        </button>
                    </div>
                </div>
                <h1><Sparkles size={28} /> Trava AI</h1>
                <p>{view === 'chat' ? 'Your intelligent guide to Mysuru' : 'Exploring the soul of Mysuru, day by day'}</p>
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
                            <button className="send-btn" onClick={handleSend}>
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="planner-container container py-6">
                    <div className="planner-card">
                        <div className="planner-card-header">
                            <Calendar size={20} className="text-primary" />
                            <h3>Mysuru Heritage Expedition</h3>
                            <span className="days-tag">3 Days</span>
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

                        <button className="primary-btn-wide mt-6">
                            Export to Google Maps
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TravaAIPage;
