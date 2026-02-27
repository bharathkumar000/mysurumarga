import { Bookmark, LayoutDashboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites.js';
import PlaceCard from '../components/PlaceCard';
import './SavedPage.css';

function SavedPage() {
    const navigate = useNavigate();
    const { favorites } = useFavorites();

    return (
        <div className="saved-page pt-8">
            <div className="container">
                <h1 className="text-2xl font-bold">Saved Places</h1>
                <p className="text-secondary mt-1">{favorites.length} places saved</p>
            </div>

            {favorites.length > 0 ? (
                <div className="container py-4 pb-24 grid gap-5 places-grid">
                    {favorites.map(place => (
                        <PlaceCard key={place.id} {...place} />
                    ))}
                </div>
            ) : (
                <div className="empty-state-container container flex flex-col items-center justify-center text-center">
                    <div className="empty-icon-wrapper">
                        <Bookmark size={40} className="empty-icon" />
                    </div>

                    <h2 className="text-xl font-bold mt-8">No saved places yet</h2>
                    <p className="text-secondary mt-4 max-w-xs">
                        Start exploring and save places you'd like to visit
                    </p>

                    <button
                        className="start-exploring-btn mt-8"
                        onClick={() => navigate('/explore')}
                    >
                        Start Exploring
                    </button>
                </div>
            )}
        </div>
    );
}

export default SavedPage;
