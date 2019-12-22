import React from 'react';

export default function Loading(props) {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {   
    return <div className="card-body">Loading...</div>;
  } else {
    return null;
  }
}
