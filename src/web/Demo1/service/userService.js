import {fetch} from 'whatwg-fetch'
import {parseQuery} from 'q'

const request = (url) => {
    let options = {
        headers: new Headers({'Content-Type': 'application/json'}),
        credentials: 'includes'
    }
    fetch(url, options).then(console.log).catch(console.error);
};


const getData = (url, data) => {
    parseQuery
}


const getUser = ()=>{
    fetch('/user/getUser').then(console.log).catch(console.error);
};

export {
    getUser
}