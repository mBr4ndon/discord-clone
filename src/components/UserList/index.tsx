import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}


const UserRow: React.FC<UserProps> = ({
    nickname,
    isBot
}) => {
   return (
       <User>
           <Avatar className={isBot ? 'bot' : ''}/>
           
           <strong>{nickname}</strong>

           {isBot && <span>Bot</span>}
       </User>
   ) 
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Online - 2</Role>
            <UserRow nickname="mbrandon19" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Groovy" isBot/>
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
            <UserRow nickname="Lorem ipsum dolor sit amet consectetur" />
        </Container>
    )
};

export default UserList;