import React from 'react';
import { Box } from '@chakra-ui/react';
import BackgroundLine from './BackgroundLine';
import HeroContainer from './HeroParent/HeroContainer';
import WhatWeOffer from './WhatWeOffer/WhatWeOffer';
import WhatHappens from './WhatHappens/WhatHappens';
import SponsorParent from './Sponsor/SponsorParent';
import IsComingContainer from './IsComingBanner/IsComingContainer';
import JoinCommunity from './JoinCommunity/JoinCommunity';
import BottomRegister from './BottomRegister/BottomRegister';
import Attendees from './Attendees/Attendees';
import FAQs from './FAQs';
// import { Calendar as CalendarIcon, LocationOn as LocationIcon } from 'lucide-react';

const HomePage = ({ primaryColorLight, baseWhite }) => {
    return (
        <Box pb={-8990} pt={"272px"}>
            <BackgroundLine />
            <Box px={"139px"}>
                <HeroContainer baseWhite={baseWhite} primaryColorLight={primaryColorLight} />
            </Box>
            <Box px="79px" >
                <WhatWeOffer/>
                <WhatHappens />
            </Box>
            <Box px={"80px"}>
                <SponsorParent />
            </Box>
            <Box>
                <IsComingContainer />
            </Box>
            <Box>
                <JoinCommunity />
            </Box>
            <Box>
                <BottomRegister />
            </Box>
            <Box px={"114px"}>
                <Attendees />
            </Box>
            <Box>
                <FAQs />
            </Box>
        </Box>
    );
};

export default HomePage;