import React, {useRef, useEffect} from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    
    useEffect(() =>{
        const div = messageRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    })

    return (
        <Container>
            <Messages ref={messageRef}>
                {Array.from(Array(19).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="mbrandon19"
                        date="04/02/2021"
                        content="Wow that's cool!"
                    />
                ))}


                    <ChannelMessage 
                        author="Groovy"
                        date="04/02/2021"
                        content={
                            <>
                                <Mention>@mbrandon19</Mention> Your profile has leveled up!
                            </>
                        }
                        hasMention
                        isBot
                    />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Message #general-chat"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;