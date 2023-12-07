import React, { useState } from 'react'
import './style/app.css' 
import PostList from './components/PostList';
import NewPost from './components/NewPost';




function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Content to Javascript 1'},
        {id: 2, title: 'Javascript 2', body: 'Content to Javascript 2'},
        {id: 3, title: 'Javascript 3', body: 'Content to Javascript 3'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }



    


    return (
        <div className="App">

            <NewPost create1={createPost}/>

            <PostList posts={posts} title='Список Javascript'/>

        </div>
            // Учбові компоненти
            // Python
            // <Input/>
    );
}

export default App;
