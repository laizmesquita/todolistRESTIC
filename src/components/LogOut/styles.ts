import styled from "styled-components/native";
import { Platform } from 'react-native';

export const LogOutContainer = styled.TouchableOpacity`
    flex-direction: row;
    width: 40%;
    padding: 16px;
    border-radius: 8px;
    background-color: #ff6262;
    justify-content: flex-start;
    align-items: flex-start;
    elevation: 3;

    /* Sombras para iOS */
    ${(Platform.OS === 'ios') && `
        shadow-color: #000;
        shadow-offset: { width: 0px, height: 2px };
        shadow-opacity: 0.25;
        shadow-radius: 3.84px;
    `}  
`;

export const LogOutText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #f6f6f6;
`;