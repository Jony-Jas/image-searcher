import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const Indexx = ()=>{
    return(
        <div>
            <App />
        </div>
    );
}

ReactDOM.render(
    <Indexx />,
    document.querySelector('#root')
);