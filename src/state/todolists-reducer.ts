import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

type TodoListReducerActionType = RemoveTodoACType | AddTodoACType | ChangeTodoACType | ChangeFilterACType
export const TodolistsReducer = (state: TodolistType[], action: TodoListReducerActionType): TodolistType[] => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return state.filter((tl => tl.id != action.payload.todoListId1))

        }
        case "ADD-TODOLIST": {
            let newTodolistId = v1();
            let newTodolist: TodolistType = {id: newTodolistId, title: action.payload.newTodolistTitle, filter: 'all'};
            return [...state, newTodolist]
        }
        case "CHANGE-TODOLIST-TITLE":{
            // const todolist = todolists.find(tl => tl.id === id);
            // if (todolist) {
            //     // если нашёлся - изменим ему заголовок
            //     todolist.title = title;
            //     setTodolists([...todolists]);
            // }
            return state.map(el=> el.id === action.payload.todolistId2 ? {...el, title: action.payload.newTodolistTitle}:el)
        }
        case "CHANGE-TODOLIST-FILTER":{
            // let todolist = todolists.find(tl => tl.id === todolistId);
            // if (todolist) {
            //     todolist.filter = value;
            //     setTodolists([...todolists])
            // }

            return state.map(el=> el.id === action.payload.todolistId2 ? {...el, filter:action.payload.newFilter} : el)
        }
        default:
            throw new Error('some arror hz action kakoy')
    }
}

type RemoveTodoACType = ReturnType<typeof RemoveTodoAC>

export const RemoveTodoAC = (todoListId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todoListId1
        }
    } as const
}

type AddTodoACType = ReturnType<typeof AddTodoAC>

export const AddTodoAC = (newTodolistTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            newTodolistTitle
        }
    } as const
}

type ChangeTodoACType = ReturnType<typeof ChangeTodoAC>

export const ChangeTodoAC = (todolistId2: string, newTodolistTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            todolistId2,
            newTodolistTitle
        }
    } as const
}

type ChangeFilterACType = ReturnType<typeof ChangeFilterTodoAC>

export const ChangeFilterTodoAC = (todolistId2: string, newFilter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            todolistId2,
            newFilter
        }
    } as const
}