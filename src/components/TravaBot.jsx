import { useState } from 'react';
import { Send, X, Sparkles } from 'lucide-react';
import './TravaBot.css';

function TravaBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { role: 'ai', content: 'Namaskara! I am Trava AI. How can I help you today? ✨' }
    ]);

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        setInput('');

        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'ai',
                content: `Looking for "${input}"? That's a great choice! Explore the local markets for the best experience. 🗺️`
            }]);
        }, 1000);
    };

    return (
        <div className="trava-bot-widget">
            {isOpen && (
                <div className="chat-popup">
                    <div className="popup-header">
                        <div className="flex items-center gap-2">
                            <Sparkles size={18} />
                            <h3>Trava AI</h3>
                        </div>
                        <button onClick={() => setIsOpen(false)}><X size={18} /></button>
                    </div>

                    <div className="messages-list">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`msg ${msg.role}`}>
                                {msg.content}
                            </div>
                        ))}
                    </div>

                    <div className="popup-input">
                        <input
                            type="text"
                            placeholder="Message Trava..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button className="popup-send" onClick={handleSend}>
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            )}

            <button
                className={`bot-trigger ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Chat with Trava AI"
            >
                {isOpen ? '❌' : '✨'}
            </button>
        </div>
    );
}

export default TravaBot;
