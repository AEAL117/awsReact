import React,{ useState,useEffect }from "react";
import {Text,View} from "react-native";
import {styles} from "./Settings.styles";
import {List,create,Oncreate} from "../../services"
import { onCreate } from "../../services/todos";
import ButtonComponent from "../../components/Button";

export default function SettingsScreen(){
    const [todos,setTodos]=useState();
    async function ListTodos(){
        const todosFetched = await List();
        if(todosFetched) setTodos(todosFetched);
    
    }
    
    const addData = ()=>{
        createTodo("Hacer Tarea","Tengo que hacer mi tarea");
    }

    async function createTodo(name,description){
        const todoCreated=await create({name,description})
        return todoCreated;
    }
    const onTodoCreated=()=>{
        console.log("Se ha creado un TODO. ")
    }
    useEffect(()=>{
        ListTodos();
        let subscription;
        (async function suscribe(){
            subscription=await onCreate(onTodoCreated);
        })();
        return ()=>{
            subscription?.unsuscribe();
        };
    },[]);
    return(
        <View>
            <Text>Settings Screen</Text>
            {todos && todos.map((todo) => <Text>{`${todo.name} ${todo.description}` }</Text>)}
            <ButtonComponent title="Create Todo" onPress={addData}/>
        </View>
    );
}