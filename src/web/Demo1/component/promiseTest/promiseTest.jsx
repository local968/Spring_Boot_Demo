import React, {Component} from 'react';
import css from 'css/app.css'
import Promise from './FakePromise'
import {getUser} from 'service/userService'


const aaa = () => {

}

const debounce = (f, de) => {
    var timeout;
    return function () {
        var that = this, ar = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            f.apply(that, ar)
        }, de)
    }
};


const throttle = (f, de) => {
    var timeout, start;

    function invoke(that, ar, now) {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            f.apply(that, ar)
        }, de);
        start = now;
    }

    return function () {
        var that = this, ar = arguments, now = new Date().getTime();
        if (!timeout) {
            invoke(that, ar, now);
        } else {
            if (now - start >= de) {
                invoke(that, ar, now);
            }
        }
    }
}

export default class PromiseTest extends Component {
    constructor() {
        super();
        this.state = {
            val: 0
        };
        console.log(this.props);
    }

    componentWillMount() {
        this.setState({a: 1});
        getUser();
        // Promise.resolve({b: 2}).then((data) => this.setState(data));
    }

    // componentDidMount() {
        // let {val} = this.state;
        // this.setState({val: this.state.val + 1});
        // console.log(typeof React);
        // console.log(this.state.val, val);    // 第 1 次 log
        //
        // this.setState({val: this.state.val + 1});
        // console.log(this.state.val, val);    // 第 2 次 log
        //
        // setTimeout(() => {
        //     this.setState({val: this.state.val + 1});
        //     console.log(this.state.val, val);  // 第 3 次 log
        //
        //     this.setState({val: this.state.val + 1});
        //     console.log(this.state.val, val);  // 第 4 次 log
        // }, 0);
        //
        // new Promise(function (resolve, reject) {
        //     setTimeout(resolve(111), 0)
        // }).then((da) => console.log(da));
    //
    //     document.addEventListener('scroll', throttle(function (w) {
    //         console.log('this.state')
    //     }, 1000))
    // }

    onClick() {
        console.log('changed1');
    }

    render() {
        console.log(this.state);
        console.log(this.props);
        return (
            <div onClick={() => this.onClick()}>
                <img className={css.pic} src="./imgs/1521130130(1).jpg"/>
            </div>
        )
    }
}