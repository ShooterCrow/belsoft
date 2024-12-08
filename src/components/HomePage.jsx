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
import FooterContainer from './Footer/FooterContainer';
// import { Calendar as CalendarIcon, LocationOn as LocationIcon } from 'lucide-react';

const HomePage = ({ primaryColorLight, baseWhite, getLinkStyle }) => {
    return (
        <Box pt={{ xl: "272px", lg: "200px", base: "50px", md: "100px" }}>
            <BackgroundLine />
            <Box px={{ xl: "129px", lg: "100px", base: "19px", md: "19px" }}>
                <HeroContainer baseWhite={baseWhite} primaryColorLight={primaryColorLight} />
            </Box>
            <Box px={{base: "40px", xl: "79px"}} >
                <WhatWeOffer />
                <WhatHappens />
            </Box>
            <SponsorParent />
            <IsComingContainer />
            <JoinCommunity />
            <BottomRegister />
            <Attendees />
            <FAQs />
            <FooterContainer getLinkStyle={getLinkStyle} primaryColorLight={primaryColorLight} />
        </Box>
    );
};

export default HomePage;