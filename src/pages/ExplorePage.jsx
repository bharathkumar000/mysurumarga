import { useState } from 'react';
import { Search, SlidersHorizontal, Settings2 } from 'lucide-react';
import PlaceCard from '../components/PlaceCard';
import Chip from '../components/Chip';
import './ExplorePage.css';

// Mock Data based on the UI screenshot
const MOCK_CATEGORIES = ['All', 'Hidden Gems', 'Local Artisans', 'Hyperlocal Food', 'Experiences', 'Heritage', 'Nature'];

const MOCK_PLACES = [
    {
        id: 1,
        title: 'Rosewood Inlay Workshop',
        description: 'Witness the delicate art of rosewood inlay work unique to Mysuru',
        location: 'Ashoka Road',
        rating: '4.4',
        category: 'Local Artisans',
        image: '/images/rosewood.png'
    },
    {
        id: 2,
        title: 'Traditional Mysore Pak Makers',
        description: 'Family making authentic Mysore Pak using the original palace recipe',
        location: 'Sayyaji Rao Road',
        rating: '4.9',
        category: 'Hyperlocal Food',
        image: '/images/mysore_pak.png'
    },
    {
        id: 3,
        title: 'Chamundi Hill Sunrise Point',
        description: 'Breathtaking panoramic views of the city at dawn',
        location: 'Chamundi Hills',
        rating: '4.8',
        category: 'Hidden Gems',
        image: '/images/chamundi_hills.png'
    },
    {
        id: 4,
        title: 'Srirangapatna Heritage Walk',
        description: 'Explore the historical monuments and ruins of this island town',
        location: 'Srirangapatna',
        rating: '4.5',
        category: 'Heritage',
        image: '/images/srirangapatna.png'
    }
];

function ExplorePage() {
    const [activeTab, setActiveTab] = useState('All');

    const filteredPlaces = activeTab === 'All'
        ? MOCK_PLACES
        : MOCK_PLACES.filter(place => place.category === activeTab);

    return (
        <div className="explore-page pt-4">
            {/* Header */}
            <div className="container pb-2 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Explore</h1>
                <button className="icon-btn text-secondary" aria-label="Menu list">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" /></svg>
                </button>
            </div>

            {/* Search Bar */}
            <div className="container py-2 flex gap-3 items-center">
                <div className="search-input-wrapper flex-1">
                    <Search className="search-icon text-secondary" size={20} />
                    <input
                        type="text"
                        placeholder="Search places, food, artisans..."
                        className="search-input"
                    />
                </div>
                <button className="filter-btn" aria-label="Filters">
                    <Settings2 size={20} className="text-secondary" />
                </button>
            </div>

            {/* Chips List */}
            <div className="chips-container py-3">
                <div className="chips-scroll flex gap-2 w-full px-4 items-center">
                    {MOCK_CATEGORIES.map(category => (
                        <Chip
                            key={category}
                            label={category}
                            isActive={activeTab === category}
                            onClick={() => setActiveTab(category)}
                        />
                    ))}
                </div>
            </div>

            {/* Places Grid */}
            <div className="container py-4 pb-24 grid gap-4 places-grid">
                {filteredPlaces.map(place => (
                    <PlaceCard key={place.id} {...place} />
                ))}
                {filteredPlaces.length === 0 && (
                    <div className="text-center py-10 text-secondary">
                        No places found for this category.
                    </div>
                )}
            </div>
        </div>
    );
}

export default ExplorePage;
