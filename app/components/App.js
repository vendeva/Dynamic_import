import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';
import Card from './Card';


function loadDelay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

  
let LoadableMyComponent = Loadable({
  loader: () => loadDelay(2000).then(() => import('./Hello')), //Принудительная задержка
  loading: Loading   
});

  
const title = "Hello World!";
const text = "Some quick example text to build on the card title and make up the bulk of the card's content."

export default function App() {
    return (
        <div className="card">
            <Card title={title} text={text}/>            
            <LoadableMyComponent/>
        </div>
    )  
}