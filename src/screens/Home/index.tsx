import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import TodoItem from "../../components/TodoItem";

import { styles } from "./style";

export type Todo = {
    description: string;
    date: Date;
    done: boolean;
}

export function Home() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');
    const [doneCount, setDoneCount] = useState<number>(0);

    function handleAddTodo() {
        if(newTodo && newTodo.trim() !== '') {
            const existsTodo = todos.filter(todo => todo.description === newTodo);
            if(existsTodo.length) {
                return Alert.alert("Tarefa duplicada","Não é possivel inserir pois já existe uma tarefa cadastrada com a mesma descrição.");
            }
            const newTodoObj = {
                description: newTodo,
                date: new Date(),
                done: false
            };
            setTodos(prevState => [...prevState, newTodoObj]);
            setNewTodo('');
        } else {
            return Alert.alert("Campo obrigatório","Não é possivel inserir um valor vazio.");
        }
    }

    function updateDoneCount() {
        const updatedCount = todos.filter(item => item.done === true).length;
        setDoneCount(updatedCount);
    }

    function updateTodo(todo: Todo) {
        const newTodos = todos.map(item => {
            if(item.description === todo.description) {
                return todo;
            }

            return item;
        });
        setTodos(newTodos);
    }

    function todoRemove(todo: Todo) {
        handleTodoUnCheck(todo);
        setTodos(todos.filter(item => item.description !== todo.description));
        updateDoneCount();
    }

    function handleTodoRemove(todo: Todo) {
        Alert.alert("Remover", "Deseja realmente remover a tarefa?", [
            {
               text: 'Sim',
               onPress: () => todoRemove(todo)
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function handleTodoCheck(todo: Todo) {
        todo.done = true;
        updateTodo(todo);
        updateDoneCount()
        console.log(todos);
    }

    function handleTodoUnCheck(todo: Todo) {
        todo.done = false;
        updateTodo(todo);
        updateDoneCount()
        console.log(todos);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../../icons/Logo.png')} />
            </View>
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    onChangeText={text => setNewTodo(text)}
                    placeholder="Adicione uma nova tarefa"
                    value={newTodo}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleAddTodo}
                >
                    <Image style={styles.imgButton} source={require('../../icons/plus.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.todos}>
                <View style={styles.info}>
                    <View style={styles.counts}>
                        <Text style={styles.created}>Criadas</Text>
                        <Text style={styles.count}>{ todos.length }</Text>
                    </View>
                    <View style={styles.counts}>
                        <Text style={styles.done}>Concluidas</Text>
                        <Text style={styles.count}>{ doneCount }</Text>
                    </View>
                </View>
                <FlatList 
                    data={todos}
                    renderItem={({item}) => (
                        <TodoItem 
                            todo={item}
                            onRemove={() => handleTodoRemove(item)}
                            onCheck={() => handleTodoCheck(item)}
                            onUnCheck={() => handleTodoUnCheck(item)}
                        />
                    )}
                    keyExtractor={item => item.description}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyList}>
                            <Image 
                                source={require('../../icons/Clipboard.png')}
                                style={styles.imgEmptyList} 
                            />
                            <View style={styles.emptyTexts}>
                                <Text style={styles.emptyTextBold}>
                                    Você ainda não tem tarefas cadastradas 
                                </Text>
                                <Text style={styles.emptyText}>
                                    Crie tarefas e organize seus itens a fazer
                                </Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}