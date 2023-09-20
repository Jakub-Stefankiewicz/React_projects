import React from 'react';

const AdultStuffBox = ({age}) => {
    return (
        <div>
            {age < 19 ? " " : "Lorem ipsum, treść dla pełnoletnich."}
        </div>
    );
};

export default AdultStuffBox;