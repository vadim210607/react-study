import React, { useState } from 'react'

import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput'

const NewPost = ({create1}) => {

    const [post, setPost] = useState({title: '', body: ''})
    
    const addNewPost = function(event) {
        event.preventDefault()

        const newPost = {
            ...post, id: Date.now()
        }

        create1(newPost)
        setPost({title: '', body: ''})
    }


    return (
        <form className='form_all'>

            <MyInput 
                value={post.title}
                onChange={function(event) {setPost({...post, title: event.target.value})}}
                type="text" 
                placeholder='Назва поста'/>

            <MyInput 
                value={post.body}
                onChange={ event => setPost({...post, body: event.target.value})}
                type="text" 
                placeholder='Опис поста'/>

            <MyButton onClick={addNewPost}>Створити пост</MyButton>

        </form>
    )
}

export default NewPost