import React from 'react';
import Head from './Head';
import Comments from './Comments';

function Comment() {
  return (
    <div>
        <Head count='45'/>
        <Comments border/>
        <Comments/>
    </div>
  )
}

export default Comment;