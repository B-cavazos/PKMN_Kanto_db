
import React from 'react';
import pkmnData from '../data/pkmnData'

const DetailsPage: React.FC = () => {
    return (
        <div className="container mx-auto">
            {pkmnData.length}
        </div>
    );
};

export default DetailsPage;