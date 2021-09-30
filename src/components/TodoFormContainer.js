import React from 'react';
import {Form,TextInput,Button} from './TodoFormPresenter'

const TodoForm = () => {
    return(
        <Form>
            <TextInput type="text" placeholder="새로운 할 일 추가" id="text-input"/>
            <Button type="submit" id="plus-button">+</Button>
        </Form>
    )
}

export default TodoForm;