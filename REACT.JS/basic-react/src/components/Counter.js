import React, { useState, useEffect } from "react";

// class Counter extends Component {
//     state = {
//         number: 0,
//     };

//         this.componentDidMount(){
//             console.log("Komponen di mount");
//         }

//         this.componentDidUpdate(){
//             console.log("Komponent teah diperbaharui");
//         }

//         tambah = () => {
//             this.setState({ number: this.state.number + 1})
//         };
//         kurang = () => {
//             this.setState.number < 1
//             ? this.setState({ number: 0})
//             : this.setState({ number: this.state.number - 1});
//         };
//     }
//     render(){
//         console.log("Komponen di render");
//     return(
//     <div>
//      <p>Counter Component</p>
//      <p>Komponen ini sudah dilik sebanyak{this.state.number} kali</p>
//      <button onClick={()=>this.tambah}>Tambah</button>
//      <button onClick={()=>this.kurang}>Kurang</button>
//      </div>
//      );
//   }
// 

const Counter = (props) => {
    const [number, setNumber] = useState(0);
    const [title, setTitle] = useState("Counter");

useEffect(() => {
    console.log("Komponen telah di mount");
}, []);
   
    const tambah = (params) => {
        setNumber(number + params);
    };
     const kurang = () => {
         number < 1 ? setNumber(0) : setNumber(number - 1);
     };

    return(
    <div>
        <p>{title}</p>
        <p>{props.title} </p>
        <p>Komonen ini sudah diklik sebanyaak {number} kali</p>
        <button onClick={() => tambah(1)}>Tambah</button>
        <button onClick={()=>kurang}>Kurang</button>
    </div>
    );
}

export default Counter;