import { useState } from 'react';
import { Search, SlidersHorizontal, Settings2 } from 'lucide-react';
import PlaceCard from '../components/PlaceCard';
import Chip from '../components/Chip';
import './ExplorePage.css';

// Mock Data based on the UI screenshot
const MOCK_CATEGORIES = ['Explore Mysore', 'Hidden Gems', 'Local Artisans', 'Hyperlocal Food', 'Heritage', 'Nature'];

const MOCK_PLACES = [
    // Top Tourism Places (Explore Mysore)
    {
        id: 1,
        title: 'Mysore Palace (Amba Vilas)',
        description: "The city's crown jewel, renowned for its Indo-Saracenic architecture and opulent Durbar halls.",
        location: 'City Center',
        rating: '4.9',
        category: 'Explore Mysore',
        type: 'main',
        image: '/images/mysore_palace.png'
    },
    {
        id: 2,
        title: 'Chamundi Hill & Temple',
        description: 'A sacred site at 3,489 feet, dedicated to Goddess Chamundeshwari.',
        location: 'Chamundi Hills',
        rating: '4.8',
        category: 'Explore Mysore',
        type: 'main',
        image: '/images/chamundi_hills.png'
    },
    {
        id: 3,
        title: "St. Philomena's Cathedral",
        description: 'One of the largest Gothic-style churches in Asia, inspired by Cologne Cathedral.',
        location: 'Ashoka Road',
        rating: '4.7',
        category: 'Explore Mysore',
        type: 'main',
        image: '/images/st_philomena.png'
    },
    {
        id: 4,
        title: 'Mysore Zoo (Sri Chamarajendra)',
        description: 'One of the oldest and most diverse zoos in India, established in 1892.',
        location: 'Indiranagar',
        rating: '4.6',
        category: 'Explore Mysore',
        type: 'main',
        image: '/images/mysore_zoo.png'
    },
    {
        id: 5,
        title: 'Brindavan Gardens',
        description: 'Terraced garden near KRS Dam, famous for its symmetrical design and musical fountains.',
        location: 'KRS Dam Road',
        rating: '4.5',
        category: 'Explore Mysore',
        type: 'main',
        image: '/images/brindavan_gardens.png'
    },
    {
        id: 6,
        title: 'Jaganmohan Palace',
        description: 'An older palace containing a vast collection of royal artifacts and paintings.',
        location: 'City Center',
        rating: '4.4',
        category: 'Explore Mysore',
        type: 'main',
        image: '/images/mysore_palace.png' // Shared placeholder
    },

    // Hidden Gems
    {
        id: 7,
        title: 'Karanji Lake',
        description: 'Serene nature park featuring India’s largest walk-through aviary.',
        location: 'Near Mysore Zoo',
        rating: '4.7',
        category: 'Hidden Gems',
        type: 'hidden',
        image: '/images/karanji_lake.png'
    },
    {
        id: 8,
        title: 'Kukkarahalli Lake',
        description: 'A local favorite for birdwatching and peaceful evening walks.',
        location: 'Manasagangothri',
        rating: '4.8',
        category: 'Hidden Gems',
        type: 'hidden',
        image: '/images/kukkarahalli_lake.png'
    },
    {
        id: 9,
        title: 'Sand Sculpture Museum',
        description: 'Unique museum founded by M.N. Gowri, showcasing intricate sand art.',
        location: 'Chamundi Hill Road',
        rating: '4.3',
        category: 'Hidden Gems',
        type: 'hidden',
        image: '/images/sand_sculpture_museum.png'
    },
    {
        id: 10,
        title: 'Mysore Rail Museum',
        description: 'Displays vintage locomotives and royal carriages from the golden era.',
        location: 'Near Railway Station',
        rating: '4.5',
        category: 'Hidden Gems',
        type: 'hidden',
        image: '/images/rail_museum.png'
    },
    {
        id: 11,
        title: 'Lingabudi Lake',
        description: 'One of the city’s oldest freshwater lakes, perfect for nature lovers.',
        location: 'Ramakrishna Nagar',
        rating: '4.2',
        category: 'Hidden Gems',
        type: 'hidden',
        image: '/images/lingabudi_lake.png'
    },

    // Local Artisans
    {
        id: 12,
        title: 'M.N. Radhakrishna Rao',
        description: 'Sandalwood Carving: Intricate Deities & Dasara Processions',
        location: 'Ashoka Road, Mysuru',
        rating: '4.9',
        category: 'Local Artisans',
        image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 13,
        title: 'Radha Devi',
        description: 'Silk Weaving: Gold Zari Sarees from KSIC Factory lineage',
        location: 'Ramanagara Lineage',
        rating: '4.8',
        category: 'Local Artisans',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 14,
        title: 'R.G. Singh',
        description: 'Mysore Painting: Gesso Work & Gold Leaf',
        location: 'Saraswathipuram',
        rating: '4.9',
        category: 'Local Artisans',
        image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 14.1,
        title: 'Arun Yogiraj',
        description: 'Stone Sculpture: Idol Making & Temple Architecture',
        location: 'Lakshmipuram',
        rating: '5.0',
        category: 'Local Artisans',
        image: 'https://images.unsplash.com/photo-1590736934523-9426f83ec891?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 14.2,
        title: 'Lakshmiamma',
        description: 'Incense Making: Hand-rolled Masala Battis',
        location: 'Devaraja Market',
        rating: '4.7',
        category: 'Local Artisans',
        image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 14.3,
        title: 'K. Shetty',
        description: 'Traditional Pottery: Earthenware Cook pots',
        location: 'Potters Colony',
        rating: '4.6',
        category: 'Local Artisans',
        image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=800&auto=format&fit=crop'
    },

    // Hyperlocal Food
    {
        id: 15,
        title: 'Mylari Dosa',
        description: 'Famous for its unique, pillowy-soft butter dosas served on a traditional banana leaf.',
        location: 'Nazarbad',
        rating: '4.9',
        category: 'Hyperlocal Food',
        image: '/images/mylari_dosa.png'
    },
    {
        id: 16,
        title: 'Guru Sweets Mart',
        description: 'The direct descendants of the creator of the original Mysore Pak still serve it here.',
        location: 'Devaraja Market',
        rating: '4.8',
        category: 'Hyperlocal Food',
        image: '/images/guru_sweets.png'
    },
    {
        id: 17,
        title: 'Devaraja Market',
        description: 'A vibrant, century-old bazaar offering everything from mounds of kumkum to fragrant jasmine.',
        location: 'City Center',
        rating: '4.7',
        category: 'Heritage',
        image: '/images/devaraja_market.png'
    },

    // Nature
    {
        id: 18,
        title: 'Karanji Lake',
        description: 'A picturesque lake with a butterfly park and India\'s largest walk-through aviary.',
        location: 'Near Mysore Zoo',
        rating: '4.6',
        category: 'Nature',
        image: 'https://images.unsplash.com/photo-1590418606746-018840fb9cd0?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 19,
        title: 'Kukkarahalli Lake',
        description: 'A serene lake beloved by morning walkers and birdwatchers in the heart of the University area.',
        location: 'Saraswathipuram',
        rating: '4.8',
        category: 'Nature',
        image: 'https://images.unsplash.com/photo-1622322062691-766548773e35?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 20,
        title: 'Lingabudi Lake',
        description: 'A heritage lake known for its rich biodiversity and ancient stone steps.',
        location: 'Ramakrishna Nagar',
        rating: '4.5',
        category: 'Nature',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop'
    }
];

const ExplorePage = () => {
    const [activeTab, setActiveTab] = useState('Explore Mysore');

    const filteredPlaces = MOCK_PLACES.filter(place => {
        return place.category === activeTab;
    });

    return (
        <div className="explore-page pt-4">
            {/* Header */}
            <div className="container pb-2 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Discover Mysuru</h1>
                <button className="icon-btn text-secondary" aria-label="Menu list">
                    <Settings2 size={22} />
                </button>
            </div>

            {/* Top Category Swiper */}
            <div className="container py-2 overflow-x-auto no-scrollbar">
                <div className="type-tab-switcher category-tab-switcher">
                    {MOCK_CATEGORIES.map(category => (
                        <button
                            key={category}
                            className={`type-tab ${activeTab === category ? 'active' : ''}`}
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Search Bar */}
            <div className="container py-2 flex gap-3 items-center">
                <div className="search-input-wrapper flex-1">
                    <Search className="search-icon text-secondary" size={20} />
                    <input
                        type="text"
                        placeholder={`Search in ${activeTab}...`}
                        className="search-input"
                    />
                </div>
            </div>

            {/* Places Grid */}
            <div className="container py-4 pb-24 grid gap-5 places-grid">
                {filteredPlaces.map(place => (
                    <PlaceCard key={place.id} {...place} />
                ))}
                {filteredPlaces.length === 0 && (
                    <div className="text-center py-20 text-secondary">
                        <div className="mb-2">✨</div>
                        No places found here yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExplorePage;
