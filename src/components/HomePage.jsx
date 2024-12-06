import React from 'react';
import { Box } from '@chakra-ui/react';
import BackgroundLine from './BackgroundLine';
import HeroContainer from './HeroParent/HeroContainer';
// import { Calendar as CalendarIcon, LocationOn as LocationIcon } from 'lucide-react';

const HomePage = ({primaryColorLight}) => {
    return (
        <Box px={20}>
            <BackgroundLine />
            <HeroContainer primaryColorLight={primaryColorLight} />
        </Box>
    );
};

export default HomePage;