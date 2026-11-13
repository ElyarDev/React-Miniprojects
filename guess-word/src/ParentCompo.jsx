import React, { Component, createRef } from 'react';
import PureCompo from './PureComponent';
import Fcomponent from './Fcomponent';

class ParentCompo extends Component {

    constructor() {
        super();

        this.myInput = createRef()
    }

    componentDidMount() {
        this.myInput.current.focus();
    }

    render() {
        return (
            <div>
                {/* <PureCompo ref={this.componentRef} /> */}
                {<Fcomponent ref={this.myInput} />}
            </div>
        )
    }
}

export default ParentCompo;