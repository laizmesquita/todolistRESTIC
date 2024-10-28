import styled from "styled-components/native";

export const InputContainer = styled.View`
    flex-direction: row;
    width: 90%;

`;
    
export const Input = styled.TextInput`
    background-color: #FFFFFF;
    flex: 1;
    padding: 16px;
    border-radius: 8px;
    color: #1a1a1a;
    elevation: 3;
`;

export const TaskAdd = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
`;

export const Plus = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 28px;
    elevation: 3;
    margin-left: 16px;
`;