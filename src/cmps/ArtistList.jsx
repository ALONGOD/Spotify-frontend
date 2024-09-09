import React from 'react';

export function ArtistList({ artists }) {
    return (
        <div className="artist-list">
            {artists.map((artist) => {
                if (artist.images.length === 0) return null; // Correct use of conditional

                return (
                    <div key={artist.id} className="artist-item">
                        <img src={artist.images[0]?.url || 'default-image-url'} alt={artist.name} />
                        <div className="artist-info">
                            <h3>{artist.name}</h3>
                            <p>{artist.followers.total.toLocaleString()} followers</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
