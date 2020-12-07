import React, { Component,useEffect,useState } from "react";
import Card from "./components/Card";
import "./App2.css";
import axios from 'axios';

// class App extends Component{
//     state = {
//         users: []
//     }

//     componentDidMount(){
//         // fetch('https://jsonplaceholder.typicode.com/users')
//         // .then(response => response.json())
//         // .then(json => this.setState({users: json}));  

//         axios
//         .get('https://jsonplaceholder.typicode.com/users')
//         .then((response) => this.setState({users: response.data}));
//     }

//     render(){
//         return (
//             <>
//                 {this.state.users.map((item) => {
//                     return(
//                         <Card
//                         name={item.name} 
//                         username={item.username} 
//                         email={item.email} 
//                         phone={item.phone}
//                     />
//                     );
//                 })}
//             </>
//         );
//     }
// }


// Functional Component
const App = () => {

    const [users,setUsers] = useState([]);

    useEffect(() => {
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setUsers(response.data));
    }, []);

    return(
        <>
        {
            users.map((item) => {
                return (
                    <Card
                        name={item.name} 
                        username={item.username} 
                        email={item.email} 
                        phone={item.phone}
                    />
                );
            })}
        </>
    );
};
export default App;