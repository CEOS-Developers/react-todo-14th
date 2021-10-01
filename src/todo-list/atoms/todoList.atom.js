import React, { useState } from 'react';

function todoListAtom () {
    const [waitingTodos, setWaitingTodos] = useState([]);
    const [finishedTodos, setFinishedTodos] = useState([]);

    return { waitingTodos, finishedTodos, setWaitingTodos, setFinishedTodos }
}

export default  todoListAtom