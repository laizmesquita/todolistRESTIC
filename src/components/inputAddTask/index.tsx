
import {Feather} from '@expo/vector-icons';
import {InputContainer, Input, Plus} from './styles';

type Props = {
    onPress:() => void;
    onChangeText: (Text: string) => void;
    onBlur: (e:any) => void;
    value: string;
}

export function InputAddTask({onPress, onChangeText, value, onBlur}: Props){
    return(
        <InputContainer>
            <Input
                placeholder='Adicionar Tarefa'               
                keyboardType='default'
                textAlign='center'
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
            />    
             <Plus onPress={onPress}>
                <Feather name="plus" size={24} color="black" />
            </Plus>
        </InputContainer>
    );

}