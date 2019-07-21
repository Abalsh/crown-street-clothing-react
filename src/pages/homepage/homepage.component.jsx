import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

// Bear In Mind HomePageContainer below is a styled component 
const HomePage = () => (
    <HomePageContainer> 
        <Directory/>
    </HomePageContainer>
    
)
export default HomePage;
