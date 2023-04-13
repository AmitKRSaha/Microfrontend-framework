import React from 'react';
import VueChild from './components/vueChild';
import ReactChild from './components/reactChild'

export default () =>{

    const card = {
        border: "1px solid #1F778D",
        backgroundColor: '#d0f3fb',
        textAlign: "center",
        padding: "20px 0px",
        color: "#1F778D"
    }
    return (
        <div style={card}>
            Container: React Component
            <br/><br/>
            <VueChild />
            <br/>
            <ReactChild />
        </div>
    )
}