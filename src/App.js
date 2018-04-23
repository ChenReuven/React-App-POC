/*
import React from 'react';

const App = () => <h1>Hello</h1>;

export default App;
*/

import React from 'react';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            msg: 'this is the state msg'
        }
    }

    update( e ){
        this.setState({
            msg: e.target.value
        })
    }

    render() {
        //return React.createElement('h1', null, 'Hello World');
        let txt = this.props.msg;
        return (
            <div>
                <h1>Hello World</h1>
                <div>{this.props.msg}</div>
                <div>{txt}</div>
                <div>{this.props.cat}</div>
                <div>
                    <input type="text" onChange={this.update.bind(this)}/>
                    <div>state txt = {this.state.msg}</div>
                </div>
                <Widget update={this.update.bind(this)}></Widget>
            </div>
        )
    }
}

/*App.PropTypes = {
    msg: React.PropTypes.string,
    cat: React.PropTypes.number
}*/

App.defaultProps = {
    cat: 5
}
/*const App = () => <h1>Hello World</h1>; // Stateless function component */

const Widget = (props) =>{
    return <input type="text" onChange={props.update}/>

}

export default App;
