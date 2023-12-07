import React, { useState } from 'react'
import './style/app.css' 
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput'


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Content to Javascript 1'},
        {id: 2, title: 'Javascript 2', body: 'Content to Javascript 2'},
        {id: 3, title: 'Javascript 3', body: 'Content to Javascript 3'},
    ])


    return (
        <div className="App">

            <form className='form_all'>

                <MyInput type="text" placeholder='Назва поста'/>

                <MyInput type="text" placeholder='Опис поста'/>

                <MyButton>Створити пост</MyButton>

            </form>

            <PostList posts={posts} title='Список Javascript'/>

        </div>
            // Учбові компоненти
            // Python
            // <Input/>
    );
}

export default App;
