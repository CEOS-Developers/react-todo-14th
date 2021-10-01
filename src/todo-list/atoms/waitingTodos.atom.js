import React, { useState, useEffect } from 'react';

/**
 * 전역 상태 store 객체에 필요한 것
 * 1. 상태값 가져오기
 * 2. 상태값 변경하기
 * 3. 변경된 상태값에 맞춰 상태값 업데이트 
 */
class waitingTodosAtom {
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

export const waitingTodosListAtom = new waitingTodosAtom();

function useWaitingTodos(Atom) {

    const [waitingTodos, setWaitingTodos] = useState(Atom.state);

    useEffect(() => {

        const cleaner = Atom.update(() => {
            setWaitingTodos(Atom.state);
        });

        return cleaner
        
    }, [Atom])

    const setState = (nextState) => {
        Atom.setState(nextState);
    }

    return [waitingTodos, setState]
}

export default useWaitingTodos