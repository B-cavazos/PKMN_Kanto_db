
import React from 'react';
import SearchComp from '../components/SearchComp';
import ListComp from '../components/ListComp';

const HomePage: React.FC = () => {
    return (
        <div className="container mx-auto">
            <SearchComp/>
            <ListComp/>
        </div>
    );
};

export default HomePage;