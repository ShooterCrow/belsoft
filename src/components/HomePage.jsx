import React from 'react';
import { Box } from '@chakra-ui/react';
import BackgroundLine from './BackgroundLine';
import HeroContainer from './HeroParent/HeroContainer';
// import { Calendar as CalendarIcon, LocationOn as LocationIcon } from 'lucide-react';

const HomePage = ({primaryColorLight, baseWhite}) => {
    return (
        <Box pt={"272px"} px={"139px"}>
            <BackgroundLine />
            <HeroContainer baseWhite={baseWhite} primaryColorLight={primaryColorLight} />
        </Box>
    );
};

export default HomePage;