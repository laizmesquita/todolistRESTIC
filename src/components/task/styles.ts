import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 16px;
    elevation: 3;


    /* Sombras para iOS */
    ${(Platform.OS === 'ios') && `
        shadow-color: #000;
        shadow-offset: { width: 0, height: 2 };
        shadow-opacity: 0.25;
        shadow-radius: 3.84px;
    `}    
`;

export const TaskText = styled.Text`
    color: #1A1A1A;
    font-size: 16px;
    font-weight: 500;
`;

export const TaskDone = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    background-color: #55BCF6;
    justify-content: center;
    align-items: center;
`;

export const TaskDelete = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
`; 

