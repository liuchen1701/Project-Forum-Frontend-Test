import React, {Component} from 'react';
import '../css/App.css';
import LoginDialog from './login/dialog';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <LoginDialog/>
                </header>
            </div>
        );
    }
}

export default App;
