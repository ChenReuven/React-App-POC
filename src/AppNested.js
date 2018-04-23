import React from 'react';

class App extends React.Component {
    render(){
        return (
            <Button>I <Heart/> React</Button> // This is like ng-content
        )
    }
}

// Method 1 - stateless component
const Button = (props) => <button>{props.children}</button>;

// Methid 2 - React Component
class Heart extends React.Component {
    render(){
        return <span>&hearts;</span>
    }
}

export default App;