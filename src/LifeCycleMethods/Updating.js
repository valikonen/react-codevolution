import React, { Component } from 'react';

export class Updating extends Component {
    // prima
    // chemata de cate ori re face rerender la componennta
    static getDerivedStateFromProps(props, state) {

    }

    // a doua
    // o componenta se rerenduieste de cate ori se schimba props sau state
    // aici putem programa cand se face acest lucru
    shouldComponentUpdate(prevProps, prevState) {
        return true; ///ca se se execute
    }
    // a treia
    render() {
        return (
            <div>
                
            </div>
        );
    }
    // a patra
    // chemata dupa ce schimbarile din virtual dom sunt reflectate in dom
    // exemplu, positia unui scroll
    getSnapshotBeforeUpdate(prevProps, prevState) {

    }
    // chemata imediat dupa render in rerender compoennt cycle
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
}

export default Updating;
