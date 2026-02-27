import { useState, useEffect } from 'react';
import { X, List, MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Chip from '../components/Chip';
import './MapPage.css';

// Fix for default marker icon in Leaflet + React
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MOCK_CATEGORIES = ['All', 'Hidden Gems', 'Local Artisans', 'Hyperlocal Food', 'Heritage'];

const PLACES = [
    {
        id: 1,
        title: 'Mysore Palace',
        category: 'Heritage',
        rating: '4.9',
        location: 'Sayyaji Rao Road',
        coords: [12.3051, 76.6552],
        image: '/images/rosewood.png' // Using available images
    },
    {
        id: 2,
        title: 'Chamundi Hill Sunrise',
        category: 'Hidden Gems',
        rating: '4.8',
        location: 'Chamundi Hills',
        coords: [12.2736, 76.6713],
        image: '/images/chamundi_hills.png'
    },
    {
        id: 3,
        title: 'Rosewood Inlay Workshop',
        category: 'Local Artisans',
        rating: '4.4',
        location: 'Ashoka Road',
        coords: [12.3150, 76.6500],
        image: '/images/rosewood.png'
    },
    {
        id: 4,
        title: 'St. Philomena Cathedral',
        category: 'Heritage',
        rating: '4.7',
        location: 'Lashkar Mohalla',
        coords: [12.3194, 76.6586],
        image: '/images/srirangapatna.png'
    }
];

function MapPage() {
    const [showList, setShowList] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');
    const [map, setMap] = useState(null);

    const filteredPlaces = activeCategory === 'All'
        ? PLACES
        : PLACES.filter(p => p.category === activeCategory);

    const center = [12.3051, 76.6552]; // Mysore center

    return (
        <div className="map-page">
            <div className="map-container-wrapper">
                <MapContainer
                    center={center}
                    zoom={13}
                    scrollWheelZoom={true}
                    className="leaflet-map"
                    ref={setMap}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {filteredPlaces.map(place => (
                        <Marker key={place.id} position={place.coords}>
                            <Popup>
                                <div className="map-popup-content">
                                    <img src={place.image} alt={place.title} className="popup-img" />
                                    <h3 className="font-bold text-sm mt-2">{place.title}</h3>
                                    <p className="text-xs text-secondary">{place.location}</p>
                                    <div className="flex items-center gap-1 mt-1 font-bold text-xs">
                                        <span style={{ color: '#fbbf24' }}>★</span>
                                        <span>{place.rating}</span>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>

                {/* Floating UI Overlays */}
                <div className="map-chips-overlay">
                    <div className="map-chips">
                        {MOCK_CATEGORIES.map((cat, i) => (
                            <Chip
                                key={i}
                                label={cat}
                                isActive={activeCategory === cat}
                                onClick={() => setActiveCategory(cat)}
                            />
                        ))}
                    </div>
                </div>

                {!showList && (
                    <button className="floating-menu" onClick={() => setShowList(true)}>
                        <List size={24} />
                    </button>
                )}
            </div>

            {/* Bottom Sheet List */}
            {showList && (
                <div className="bottom-sheet">
                    <div className="sheet-handle" onClick={() => setShowList(false)}></div>
                    <div className="sheet-header flex justify-between items-center">
                        <h2 className="text-xl font-bold">{filteredPlaces.length} Places</h2>
                        <button onClick={() => setShowList(false)} className="close-sheet">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="sheet-content">
                        {filteredPlaces.map(place => (
                            <div key={place.id} className="list-item flex gap-4 items-center" onClick={() => {
                                map.setView(place.coords, 15);
                                setShowList(false);
                            }}>
                                <img src={place.image} alt={place.title} className="item-thumb" />
                                <div className="item-info flex-1">
                                    <span className={`item-badge tag-${place.category.toLowerCase().replace(/\s+/g, '-')}`}>
                                        {place.category}
                                    </span>
                                    <h3 className="text-sm font-semibold mt-1">{place.title}</h3>
                                    <div className="flex items-center gap-1 text-xs text-secondary mt-1">
                                        <MapPin size={12} />
                                        <span>{place.location}</span>
                                    </div>
                                </div>
                                <div className="item-rating flex items-center gap-1 font-bold text-sm">
                                    <span style={{ color: '#fbbf24' }}>★</span>
                                    <span>{place.rating}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default MapPage;
