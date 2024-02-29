"use client";

import { useState } from 'react';
import { StarIcon } from 'lucide-react';

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleClick = (rate: number) => {
        setRating(rate);
    };

    return (
        <div style={{ display: 'flex' }}>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i}>                        
                        <StarIcon
                            className="cursor-pointer hover:text-yellow-500 transition-colors"           
                            onClick={() => handleClick(ratingValue)}
                            fill={ratingValue <= rating ? 'yellow' : 'none'}
                            stroke={ratingValue <= rating ? 'yellow' : 'currentColor'}
                            width={20}
                            height={20}                                             
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;