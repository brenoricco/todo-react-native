import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Todo } from '../../screens/Home';
import { styles } from './style';

type Props = {
    todo: Todo;
    onRemove: (todo: Todo) => void;
    onCheck: () => void;
    onUnCheck: () => void;
} 

export default function TodoItem({ todo, onRemove, onCheck, onUnCheck }: Props) {
    const [isChecked, setChecked] = useState(false);

    function handleCheck(isChecked: boolean) {
        if(!isChecked) {
            setChecked(true);
            onCheck();
        } else {
            setChecked(false);
            onUnCheck();
        }
    }

    const textStyle = function(isChecked: boolean) {
        return {
            marginLeft: 8,
            fontSize: 14,
            color: isChecked ? '#808080' : '#F2F2F2',
            flex: 1,
            flexGrow: 1,
            textDecorationLine: isChecked ? 'line-through' : 'none'
        }
    }

    return (
        <View style={styles.container}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={() => handleCheck(isChecked)}
                color={isChecked ? '#5E60CE' : '#4EA8DE'}
            />
            <Text style={[styles.text, {
                color: isChecked ? '#808080' : '#F2F2F2',
                textDecorationLine: isChecked ? 'line-through' : 'none'
            }]}>{todo.description}</Text>          
            <TouchableOpacity onPress={() => onRemove(todo)}>
                <Image 
                    source={require('../../icons/trash.png')} 
                    style={styles.trash} 
                />
            </TouchableOpacity>
        </View>
    );
}