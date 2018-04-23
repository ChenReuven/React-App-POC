import React from 'react';

class App extends React.Component {

    constructor(){
        super();
        this.state = {currentEvent: '---'};
        this.update = this.update.bind(this);
    }

    update(e){
        this.setState({currentEvent: e.type})
    }

    render(){
        return (
            <div>
            <textarea
                cols="30"
                rows="10"
                onKeyPress={this.update}
                onCut={this.update}
                onPaste={this.update}
            />
            <h1>{this.state.currentEvent}</h1>
        </div>
        )
    }
}


export default App;