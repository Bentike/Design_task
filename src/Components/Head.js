import React from 'react';
import './head.css';

function Head({count}) {
  return (
    <>
      <h1 className='head'>{count} Comments</h1>
    </>
  )
}

export default Head;