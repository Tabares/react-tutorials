import React from 'react';
import Content from './Content.jsx';

class FormProp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Initial data... with props',
            data2: 'Initial data... with props'
        }
        this.updateState = this.updateState.bind(this);
        this.updateStateEvent = this.updateStateEvent.bind(this);
    }

    updateState(e) {
        this.setState({data: e.target.value});
    }

    updateStateEvent() {
        this.setState({data2: 'Updated Data from event using props'});
        this.setState({data: 'Updated Data from event using props'});

    }

    render() {
        return (
            <div>
                <br/>
                <div>
                    <Content myDataProp = {this.state.data}
                    myData2Prop = {this.state.data2}
                    updateStateProp = {this.updateState}
                    updateStateEventProp = {this.updateStateEvent}></Content>
                </div>
            </div>
        );
    }
}

export default FormProp;
