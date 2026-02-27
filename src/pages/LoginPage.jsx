import { useState } from 'react';
import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    const [role, setRole] = useState('user'); // user, partner
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const credentials = {
            user: { id: '1', pass: '1' },
            partner: { id: '2', pass: '2' }
        };

        const target = credentials[role];

        if (email === target?.id && password === target?.pass) {
            if (role === 'partner') {
                navigate('/partner');
            } else {
                navigate('/explore');
            }
        } else {
            setError(`Authentication failed for ${role.toUpperCase()} role.`);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                {/* Left Side: Hero Section */}
                <div className="login-hero">
                    <div className="hero-overlay">
                        <span className="hero-tagline">BEYOND THE PALACE</span>
                        <h1 className="hero-title">Discover the<br />Soul of Mysuru</h1>
                        <p className="hero-desc">
                            Uncover hidden gems, local artisans & authentic<br />
                            experiences that usually go unexplored.
                        </p>
                    </div>
                </div>

                {/* Right Side: Login Content */}
                <div className="login-content">
                    <div className="login-form-wrapper">
                        <header className="login-header">
                            <div className="brand-logo">
                                Mysuru <span>Marga</span>
                            </div>
                            <h2>Welcome Back</h2>
                            <p className="access-label">ACCESS THE HERITAGE CORE</p>
                        </header>

                        <div className="role-pills">
                            <button
                                className={`role-pill ${role === 'user' ? 'active' : ''}`}
                                onClick={() => setRole('user')}
                            >
                                Traveler
                            </button>
                            <button
                                className={`role-pill ${role === 'partner' ? 'active' : ''}`}
                                onClick={() => setRole('partner')}
                            >
                                Heritage Partner
                            </button>
                        </div>

                        {error && <div className="login-error">{error}</div>}

                        <form className="heritage-form" onSubmit={handleSubmit}>
                            <div className="heritage-input-group">
                                <Mail className="field-icon" size={20} />
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="heritage-input-group">
                                <Lock className="field-icon" size={20} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="toggle-visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            <button type="submit" className="login-btn-black">
                                ENTER THE GATES
                            </button>
                        </form>

                        <footer className="login-form-footer">
                            <p>NEW TO THE CITY? <a href="#">Register Now</a></p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
