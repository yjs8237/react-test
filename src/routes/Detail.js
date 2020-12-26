import React from 'react';
import axios from 'axios';

class Detail extends React.Component {
    componentDidMount(){
        const { location , history } = this.props;
        if(!location.state) {
            history.push('/');
        }
    }

    render() {
        return <h1>hello!</h1>;
    }
}

export default Detail;