import { useState, useEffect } from 'react';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('mysury_marga_favorites');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('mysury_marga_favorites', JSON.stringify(favorites));
    }, [favorites]);

    const isFavorite = (id) => favorites.some(fav => fav.id === id);

    const toggleFavorite = (place) => {
        setFavorites(prev => {
            if (isFavorite(place.id)) {
                return prev.filter(fav => fav.id !== place.id);
            }
            return [...prev, place];
        });
    };

    return { favorites, toggleFavorite, isFavorite };
};
