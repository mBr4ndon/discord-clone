import React from 'react';
import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>text channels</span>
                <AddCategoryIcon />
            </Category>


            <ChannelButton channelName="general-chat" channelType="text"/>
            <ChannelButton channelName="league" channelType="text"/>
            <ChannelButton channelName="cs-go" channelType="text"/>
            <ChannelButton channelName="workspace" channelType="text"/>
            <ChannelButton channelName="links-and-memes" channelType="text"/>
        </Container>
    )
};

export default ChannelList;