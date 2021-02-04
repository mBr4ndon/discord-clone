import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashtagIcon />

            <Title>general-chat</Title>

            <Separator />

            <Description>Just do wtv you want in here</Description>
        </Container>
    )
};

export default ChannelInfo;