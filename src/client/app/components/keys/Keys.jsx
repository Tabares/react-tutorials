import React from 'react';
import Content from './Content.jsx'

class Keys extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [
                {
                    component: 'First...',
                    id: 1
                }, {
                    component: 'Second...',
                    id: 2
                }, {
                    component: 'Third...',
                    id: 3
                }
            ]
        };
        this.setStateHandler = this.setStateHandler.bind(this);
    }

    setStateHandler(val) {
        var myArray = this.state.data;
        var item = {
            component: val,
            id: myArray.length + 1
        };
        myArray.push(item);
        this.setState({data: myArray})
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.data.map((dynamicComponent, i) => <Content key={i} componentData={dynamicComponent}/>)}
                </div>
                <input id="insert"/>
                <button onClick={()=>{this.setStateHandler('val')}}>Add New Item</button>
            </div>
        );
    }
}

export default Keys;
