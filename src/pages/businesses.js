import React from 'react';
import BusinessCardSearchList from '../components/about/profiles.js';
import { SearchBar, FilterButtons } from '../components/businesses/search-filter.js';

function BusinessesPage(props) {
    return (
        <div>
            <SearchBar />
            <FilterButtons />
            <BusinessCardSearchList />
        </div>
    )
 }

 export default BusinessesPage;