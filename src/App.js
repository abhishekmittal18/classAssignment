import React, {Component} from 'react';
import './App.css';

class FetchApi extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items: [],
            isLoaded: false
        };
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(result => {
            this.setState({
                isLoaded: true,
                items: result
            });
        })
    }

    render(){
        const {items, isLoaded} = this.state;
        if(!isLoaded) 
        return <div><h1>Please wait...</h1></div>
        return(
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <h1>{item.title}</h1>
                         <img src={item.url}></img> 
                    </li>
                ))
                }
            </ul>
        );
            }

    }
export default FetchApi;