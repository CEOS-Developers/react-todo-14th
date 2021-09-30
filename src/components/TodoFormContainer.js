import React, { useState } from 'react';
import {Form,TextInput,Button} from './TodoFormPresenter'

const TodoFormContainer = (props) => {
    const [text,setText] = useState('');

    const onClick = () => {
        // form이 clear되면서 todoList에 값이 추가되어야 함.
        props.onSubmit(text);
        setText('');
    }
    const handleSubmit = e => {
        e.preventDefault();
        onClick();
    }
    const onChange = e => {
        console.log(e.target.value);
        const nextForm = e.target.value;
        setText(nextForm);
    }

    return(
        <Form onSubmit={handleSubmit}>
            <TextInput type="text" placeholder="새로운 할 일 추가" onChange={onChange} value={text}/>
            <Button onClick={onClick}>+</Button>
        </Form>
    )
}

export default TodoFormContainer;