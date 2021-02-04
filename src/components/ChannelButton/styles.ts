import styled from "styled-components";
import { Hashtag, VolumeUp} from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    padding: 5px 3px;
    border-radius: 5px;
    background-color: transparent;

    transition: background-color .2s;

    > div {
        display: flex;
        align-items: center;
    }

    > div span {
        color: var(--senary);
        margin-left: 5px;
    }

    &.active, 
    &:hover {
        background-color: var(--quinary);

        > div span {
            color: var(--white);
        }

        > div#icons {
            visibility: visible;
        }
    }

    > div#icons {
        visibility: hidden;
    }

`;

export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;
    color: var(--gray);
`;

export const VoiceIcon = styled(VolumeUp)`
    width: 20px;
    height: 20px;
    color: var(--gray);
`;

export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;

    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;

export const SettingsIcon = styled(Settings)`
    width: 16px;
    height: 16px;

    color: var(--symbol);
    cursor: pointer;

    margin-left: 4px;

    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;
