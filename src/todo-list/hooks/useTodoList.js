import React, {useEffect, useState} from 'react';
import useWaitingTodos from '../atoms/waitingTodos.atom';
import useFinishedTodos from '../atoms/finishedTodos.atom'
import { waitingTodosListAtom } from '../atoms/waitingTodos.atom';
import { finishedTodosListAtom } from '../atoms/finishedTodos.atom'

function useTodoList () {

    const [waitingTodos, setWaitingTodos] = useWaitingTodos(waitingTodosListAtom);
    const [finishedTodos, setFinishedTodos] = useFinishedTodos(finishedTodosListAtom);

    const createTodo = (todoContent) => {
        setWaitingTodos([
            {
                todoID: Date.now(),
                todoContent: todoContent,
                waiting: true,
            },
            ...waitingTodos,
        ]);
    }

    const deleteTodo = ({id, waiting}) => {
        if (waiting) {
            setWaitingTodos([...waitingTodos.filter(todo => todo.todoID !== id)]);
        } else {
            setFinishedTodos([...finishedTodos.filter(todo => todo.todoID !== id)]);
        }
    }

    const changeTodoStatus = ({id, todoContent, waiting}) => {
        if (waiting) {
            setWaitingTodos([...waitingTodos.filter(todo => todo.todoID !== id)]);
            setFinishedTodos([
                {
                    todoID: id,
                    todoContent: todoContent,
                    waiting: false,
                },
                ...finishedTodos
            ])
        } else {
            setFinishedTodos([...finishedTodos.filter(todo => todo.todoID !== id)]);
            setWaitingTodos([
                {
                    todoID: id,
                    todoContent: todoContent,
                    waiting: true,
                },
                ...waitingTodos
            ])
        }
    } 
    
    return { waitingTodos, finishedTodos, createTodo, deleteTodo, changeTodoStatus }
}

export default useTodoList