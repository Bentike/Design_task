import React from 'react';
import Head from './Head';
import Post from './Post';

function Comment() {
  return (
    <div>
        <Head count='45'/>
        <Post border/>
        <Post/>
    </div>
  )
}

export default Comment;