import React from 'react';
import todoListAtom from '../atoms/todoList.atom';

function useTodoList () {

    const { waitingTodos, finishedTodos, setWaitingTodos, setFinishedTodos } = todoListAtom();

    const createTodo = (todoContent) => {
        setWaitingTodos([
            {
                todoID: Date.now(),
                todoContent: todoContent,
                waiting: true,
            },
            ...finishedTodos,
        ]);
    }

    const deleteWaitingTodo = (id) => {
        setWaitingTodos(waitingTodos.filter(todo => todo.todoID !== id));
    }

    const deleteFinishedTodo = (id) => {
        setFinishedTodos(finishedTodos.filter(todo => todo.todoID !== id));
    }

    const changeTodoStatus = ({id, todoContent, waiting}) => {
        if (waiting) {
            setWaitingTodos(waitingTodos.filter(todo => todo.todoID !== id));
            setFinishedTodos([
                {
                    todoID: id,
                    todoContent: todoContent,
                    waiting: false,
                },
                ...finishedTodos
            ])
        } else {
            setFinishedTodos(finishedTodos.filter(todo => todo.todoID !== id));
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
    
    return { waitingTodos, finishedTodos, createTodo, deleteWaitingTodo, deleteFinishedTodo, changeTodoStatus }
}

export default useTodoList