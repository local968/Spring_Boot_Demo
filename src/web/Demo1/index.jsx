import React from 'react';
import ReactDOM from 'react-dom';
import css from 'css/app.css';
import PromiseTest from "component/promiseTest/promiseTest.jsx";


ReactDOM.render(
    <div>
        <h1 className={css.aaa}>Hello, world!</h1>
        <h1 onClick={()=>console.log(11100099)}>333333333333333</h1>
        <PromiseTest aaa="1"/>
    </div>,
    document.getElementById('wrapper')
);