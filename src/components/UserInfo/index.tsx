import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, VoiceIcon, AudioIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>

            <Profile>
                <Avatar />

                <UserData>
                    <strong>mbrandon19</strong>
                    <span>#8315</span>
                </UserData>
            </Profile>


            <Icons>
                <VoiceIcon />
                <AudioIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    )
};

export default UserInfo;