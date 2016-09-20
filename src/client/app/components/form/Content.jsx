import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp}/>
                <h3>{this.props.myDataProp}</h3>
                <button onClick={this.props.updateStateEventProp}>Event</button>
                <h3>{this.props.myData2Prop}</h3>


            </div>
        );
    }
}

export default Content;
