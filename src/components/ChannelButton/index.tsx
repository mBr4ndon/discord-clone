import React from 'react';

import { Container, HashtagIcon, VoiceIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
    channelName: string;
    channelType: string;
    selected?: boolean;

}

const ChannelButton: React.FC<Props> = ({
    channelName,
    channelType,
    selected
}) => {
    return (
        <Container className={selected ? 'active' : ''}>
            <div>
                {channelType === "text" ? <HashtagIcon /> : <VoiceIcon />}
                <span>{channelName}</span>
            </div>

            <div id="icons">
                <InviteIcon />
                <SettingsIcon />
            </div>
        </Container>
    )
};

export default ChannelButton;