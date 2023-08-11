import React, { useCallback, useState } from 'react'
import { MdAdd } from "react-icons/md";
import '../styles/TodoInsert.scss';

function TodoInsert({onInsert}) {

    const[value,setValue] = useState("");

    const onChange = useCallback ( (e) =>{
        console.log(e);
        setValue(e.target.value);
    }, [] )

    const onSubmit = useCallback ( (e) =>{
        onInsert(value);
        setValue('');
        e.preventDefault();
        //submit 이벤트는 브라우저에서 새로고침을 발생시킨다.
    }, [value] ) 

    return (
    <form className='TodoInsert' onSubmit={onSubmit}>
        <input type='text' placeholder='할일을 입력하세요' 
        onChange={onChange} value={value}/>
        <button type='submit'><MdAdd /></button>
    </form>
    )
}

export default TodoInsert