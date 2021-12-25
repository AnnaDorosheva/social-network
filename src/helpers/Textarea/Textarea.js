import React from 'react';
import s from './Textarea.module.css';

const Textarea = ({input, meta, ...props}) => {
  return (
    <div className={s.formControl + " " + (meta.touched && meta.error ? s.error : null) }>
      <textarea {...input} {...props}/>
     {meta.touched && meta.error && <span className={s.span}>{meta.error}</span>}
    </div>
  )
};

export default Textarea;

export const Input = ({input, meta, ...props}) => {
  return (
    <div className={s.formControl + " " + (meta.touched && meta.error ? s.error : null) }>
      <input {...input} {...props}/>
     {meta.touched && meta.error && <span className={s.span}>{meta.error}</span>}
    </div>
  )
};