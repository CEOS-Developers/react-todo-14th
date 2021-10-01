import React, { useState, useEffect } from 'react';

class finishedTodosAtom {
    constructor() {
        this.state = [];
        this.setters = [];
    }

    setState(nextState) {
        this.state = nextState;
        this.setters.forEach(setter => setter && setter(this.state));
    }

    update(setter) {
        if (this.setters.includes(setter)) {
            return;
        }

        this.setters.push(setter);

        return () => {
            const idx = this.setters.findIndex(setter);
            this.setters.splice(idx, 1);
        }
    }
}

const Atom = new finishedTodosAtom();

function useFinishedTodos() {
    const [finishedTodos, setFinishedTodos] = useState(Atom.state);

    useEffect(() => {

        const cleaner = Atom.update(() => {

            setFinishedTodos(Atom.state);
        })

        return cleaner

    }, [Atom])

    const setState = (nextState) => {
        Atom.setState(nextState);
    }

    return [finishedTodos, setState]
}

export default useFinishedTodos