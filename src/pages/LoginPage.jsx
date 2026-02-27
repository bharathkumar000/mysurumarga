import { useState } from 'react';
import { User, ShieldCheck, Briefcase, Mail, Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    const [role, setRole] = useState('user'); // user, admin, partner
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const credentials = {
            user: { id: '1', pass: '1' },
            admin: { id: '2', pass: '2' },
            partner: { id: '3', pass: '3' }
        };

        const target = credentials[role];

        if (email === target.id && password === target.pass) {
            console.log(`Successfully logged in as ${role}`);
            navigate('/explore');
        } else {
            setError(`Invalid credentials for ${role.toUpperCase()} role.`);
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-header">
                    <span className="login-logo">MYSURU MARGA</span>
                    <h2>Welcome Back</h2>
                    <p>Login to your account to continue</p>
                </div>

                <div className="role-selector">
                    <button
                        className={`role-btn ${role === 'user' ? 'active' : ''}`}
                        onClick={() => { setRole('user'); setError(''); }}
                    >
                        User
                    </button>
                    <button
                        className={`role-btn ${role === 'admin' ? 'active' : ''}`}
                        onClick={() => { setRole('admin'); setError(''); }}
                    >
                        Admin
                    </button>
                    <button
                        className={`role-btn ${role === 'partner' ? 'active' : ''}`}
                        onClick={() => { setRole('partner'); setError(''); }}
                    >
                        Partner
                    </button>
                </div>

                {error && (
                    <div style={{
                        backgroundColor: '#fee2e2',
                        color: '#dc2626',
                        padding: '0.75rem',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        textAlign: 'center'
                    }}>
                        {error}
                    </div>
                )}

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>ID / Email Address</label>
                        <div className="input-with-icon">
                            <Mail className="input-icon" size={18} />
                            <input
                                type="text"
                                placeholder="Enter ID or Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <div className="input-with-icon">
                            <Lock className="input-icon" size={18} />
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="login-submit">
                        Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}
                    </button>
                </form>

                <div className="login-footer">
                    <p>Don't have an account? <a href="#">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
