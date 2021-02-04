import React from 'react';

import { Container, Avatar, Message, MHeader, Content } from './styles';
export { Mention } from './styles';

export interface MessageProps {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
}

const ChannelMessage: React.FC<MessageProps> = ({
    author,
    date,
    content,
    hasMention,
    isBot
}) => {
    return (
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'bot' : ''}/>

            <Message>
                <MHeader>
                    <strong>{author}</strong>

                    {isBot && <span>Bot</span>}

                    <time>{date}</time>
                </MHeader>

                <Content>{content}</Content>
            </Message>
        </Container>
    )
};

export default ChannelMessage;