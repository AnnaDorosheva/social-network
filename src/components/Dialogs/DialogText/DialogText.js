import React from 'react';

const DialogText = (props) => {
  return (
              <li key={props.id}>
          <p>{props.message}</p>
        </li>
  )
};

export default DialogText;
