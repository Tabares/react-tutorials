import React from 'react';
import Content from './Content.jsx';

class FormProp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Initial data... with props'
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        this.setState({data: e.target.value});
    }

    render() {
        return (
            <div>
                <br/>
                <div>
                    <Content myDataProp = {this.state.data}
                    updateStateProp = {this.updateState}></Content>
                </div>
            </div>
        );
    }
}

export default FormProp;
