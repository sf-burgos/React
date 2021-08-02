import { SocketAddress } from 'net';
import React, { Component } from 'react';
import { w3cwebsocket as W3CWEBSOCKET } from 'websocket';

const client = new W3CWEBSOCKET('ws:/127.0.0.1:8000');

class App extends Component {
    componentWillMount() {
        client.onopen = () => {
            console.log('webSockets Client Connected')
        };
        client.onmessage = (message) => {
            console.log(message)
        };

    }
    render(){
        return(
        <div>
            Initial app with Sockets
        </div>
        );

    }

}

export default App;
