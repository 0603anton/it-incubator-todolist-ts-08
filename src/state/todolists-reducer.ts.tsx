import {TodolistType} from "../App";

type TodoListReducerActionType = RemoveTodoACType
export const TodolistsReducer = (state: TodolistType[], action: TodoListReducerActionType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return state


        }

        default:
            throw new Error('some arror hz action kakoy')
    }
}

type RemoveTodoACType= ReturnType<typeof RemoveTodoAC>

export const RemoveTodoAC = (todoListId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todoListId1
        }
    } as const
}