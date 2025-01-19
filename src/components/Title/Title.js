import React from 'react';
import '../Title/Title.css';

const Title = ({title}) => {
  return (
   <legend className='title'>{title}</legend>
  )
}

export default Title;