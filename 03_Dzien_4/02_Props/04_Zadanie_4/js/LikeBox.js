import React from 'react';

const LikeBox = ({likes}) => {
    return (
        <div>
            {likes} likes
            <button>Lubię to</button>
        </div>
    );
};

export default LikeBox;