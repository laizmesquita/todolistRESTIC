import { FlatList, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, { useState, useEffect, useContext} from "react";

import { Formik } from 'formik';
import * as Yup from 'yup';

import { Task } from '../../components/task';
import { CardNumber } from '../../components/CardNumber';
import { InputAddTask } from '../../components/inputAddTask';
import {TaskContext} from '../../context/TaskContext';
import { TaskProps } from '../../utils/types';

export default function Home() {
  
  const {tasks, createTask, setTasks} = useContext(TaskContext);
  const [countTask, setCount] = useState(0);
  
  const TaskSchema = Yup.object().shape({
    taskText: Yup.string()
    .min(4, "No mínimo 4 caracteres")
    .max(16, "No máximo 16 caracteres")
    .required("Tarefa não pode ser vazia")
  });

    function handleTaskAdd(taskText: string){
      if (tasks.some((task)=> task.title === taskText)) {
        return Alert.alert("Erro", "Tarefa já existe!");
      }

      createTask(taskText);
    }

    function handleTaskChangeStatus(taskToChange: TaskProps){
      const updatedTasks = tasks.filter((task)=> task.title !== taskToChange.title);
      const newTask = {
        id: taskToChange.id,
        title: taskToChange.title,
        status: !taskToChange.status,
      };
        updatedTasks.push(newTask);
        setTasks(updatedTasks);
      }

      function handleTaskDelete(taskToDelete: TaskProps){
        Alert.alert(
          "Atenção!", `Deseja realmente deletar a tarefa? ${taskToDelete.title}?`,
        [
          {
            text: "Sim",
            onPress: () => {
              const updatedTasks = tasks.filter((task) => task.title !== taskToDelete.title);
              setTasks(updatedTasks);
            }
          },
          {text: "Cancelar", style: "cancel"}
        ]
      );
      }
      
    useEffect(() => {
      let totalTask = tasks.length;
      setCount(totalTask);
    }, [tasks]);

  return (
    <View style={styles.container}>
    <Formik
      initialValues={{taskText: ''}}
      validationSchema={TaskSchema}
      onSubmit={(values, {resetForm})=>{
        handleTaskAdd(values.taskText);
        resetForm({values: {taskText:''}});
      }}
    >
        {({handleSubmit, handleChange, handleBlur, values, errors, touched})=>(
        <View>
          <InputAddTask
          onPress={handleSubmit}
          onChangeText={handleChange('taskText')}
          onBlur={handleBlur('taskText')}
          value={values.taskText}
          />

        {touched.taskText && errors.taskText && (
          <Text style={{color: '#FF8477'}}>{errors.taskText}</Text>
        )}
                       
        </View>

        )}
    </Formik>

          <View style={{flexDirection: 'row', gap: 16,}}>
            <CardNumber title={"Cadastrados"} num={countTask} color={"#0e4677"}/>
            <CardNumber title={"Em aberto"} num={0} color={"#e06507"}/>
            <CardNumber title={"Finalizadas"} num={0} color={"#008800"}/>
          </View>
  
    <View style={styles.tasks}>
        <Text>Tarefas: {countTask}</Text>
        
        <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
          ({item}) => (
            <Task
            id={item.id}
            title={item.title}
            status={item.status}
            onCheck={() =>handleTaskChangeStatus(item)}
            onRemove={() => handleTaskDelete(item)}
            />
          )}

        ListEmptyComponent={() => (
          <View style={{flexDirection:'column', alignItems: 'center'}}>
            <Text>Você ainda não possui tarefas!</Text>
            <Text>Crie uma tarefa para começar.</Text>
            </View>
      )}
          />
        </View>
      </View>
      );
    }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDE8FF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:  16,
    paddingTop: 64,
    gap: 16,
  },


  inputContainer:{
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: '#f6f6f6',
  },

  input:{
    flex: 1,
    padding: 16,
    color: '#000000',
  },

  tasks:{
    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: 'column',
  },
});