import React from 'react';
import './comments.css';

function Comments({border}) {
  return (
    <div className='post'>
       <div>
           <img 
             src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80' 
             alt='poster'
             className={border ? 'border poster__img' : 'poster__img'}
             />
       </div>
       <div className='post__wrap'>
          <div className='post__name'>
             <p className='name'>Rahul gupta</p>
             <p className='time'>2 months ago</p>
          </div>
          <p className='post__text'>This is a great post</p>
       </div>
    </div>
  )
}

export default Comments;