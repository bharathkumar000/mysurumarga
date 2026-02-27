import { useState } from 'react';
import { Sparkles, Send, Bot, User, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './TravaAIPage.css';

function TravaAIPage() {
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

        // Mock AI response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'ai',
                content: `That sounds like a great idea! If you're looking for "${input}", I recommend checking out the Heritage section for some authentic local experiences. Would you like me to show you a map?`
            }]);
        }, 1000);
    };

    return (
        <div className="trava-ai-page">
            <div className="ai-header">
                <div className="container flex items-center justify-between mb-2">
                    <button onClick={() => navigate(-1)} className="text-white">
                        <ArrowLeft size={24} />
                    </button>
                </div>
                <h1><Sparkles size={28} /> Trava AI</h1>
                <p>Your intelligent guide to Mysuru</p>
            </div>

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
        </div>
    );
}

export default TravaAIPage;
