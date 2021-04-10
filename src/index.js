// var React = require('react'); //pehle use hota tha
// import React, { Fragment, lazy } from 'react'; // ab use hota hai
// var ReactDOM = require('react-dom');//pehle use hota tha
// import ReactDOM from 'react-dom';// ab use hota hai

// by JSX

// ReactDOM.render(<h1> Hello World! kkkkuldeep chacha</h1>, document.getElementById('root'));
// ReactDOM.render(kya dikhana hai , kahan dikhana hai , callback function )

// by Javascript 

// var h1 = document.createElement('h1');
// h1.innerHTML = "thapa technical";
// document.getElementById('root').appendChild(h1);

// render method ek hi Element leta hai 

// ReactDOM.render(
//     <div>
// <h1> Hello World! kkkkuldeep chacha</h1>
// <p> Plz like and share</p>
// <h2> Plz Subscribe my Channel</h2>
// </div>
// , document.getElementById('root'));

// In React v16 it's possible for render()
// to return an array of elements

// ReactDOM.render(
//     [
//         <h1> Thapa technical </h1>,
//          <p> Plz like and share</p>,
// <h2> Plz Subscribe my Channel</h2>
      
//     ],document.getElementById("root")
// );

// React.Fragment


// Div se Div ke andar ek aur div bana deta hai par Fragment se nahi hota 

// ReactDOM.render(
//     <React.Fragment>             
// <h1> Hello World! kkkkuldeep chacha</h1>
// <p> Plz like and share</p>
// <h2> Plz Subscribe my Channel</h2>
// </React.Fragment>
// , document.getElementById('root'));

// React.Fragment likhne ki zaroorat nahi hai 

// ReactDOM.render(
//     <>             
// <h1> Hello World! kkkkuldeep chacha</h1>
// <p> Plz like and share</p>
// <h2> Plz Subscribe my Channel</h2>
// </>
// , document.getElementById('root'));
// kitttu lambi achi hai kittu itni lambi school me chal gyi thi

// ReactDOM.render(
//     <>
//     <h1>Kuldeep Netflix</h1>
//     <p>List of 5 Best Series</p>
//         <ol> <li>Dark</li>
//         <li>Narcos</li>
//         <li>DareDevil</li>
//         <li>Mr. Robot</li>
//         <li>My Holo Love</li>
//         </ol>
//     </>
//     ,document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';

// const fname = "vinod";
// const lname = "thapa";


// ReactDOM.render(
//     <>
//     <h1>my name is {fname} {lname} </h1>
//     <h1>my name is {fname+ " " + lname} </h1>
//     <h1>{`my name is ${fname} ${lname}`} </h1>
//     </>,document.getElementById('root')
// );

// import react from 'react';
// import ReactDOM from 'react-dom';

// const name = "Kuldeep";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

// ReactDOM.render(
//     <>

//     <h1>My Name is {name} the Javasripter</h1>
//     <p>Today's date is = {currDate}</p>
//     <p>Current Time is = {currTime}</p>
//     </>
//     ,document.getElementById('root')

// );

// import react from 'react';
// import ReactDOM from 'react-dom';

// const name = "vinod";

// ReactDOM.render(
//     <>
//     <h1 contentEditable="true">My name is {name}</h1>
//     <img  src="https://picsum.photos/200/300" alt="randomimage"/>
//     </>,document.getElementById("root")

// );


// or render method me hum kam se kam likhte hain 

// import react from 'react';
// import ReactDOM from 'react-dom';

// const name = "vinod";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const links = "https://www.thapatechnical.com"; //agar image me link lagana ho

// ReactDOM.render(
//     <>
//     <h1 contentEditable="true">My name is {name}</h1>
//     <img  src={img1} alt="randomimage"/>
//     <a href={links} target="_blank">
//     <img  src={img2} alt="randomimage"/>
//     </a>
//     </>,document.getElementById("root")

// );


// import react from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const name = "vinod";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const links = "https://www.thapatechnical.com"; //agar image me link lagana ho

// ReactDOM.render(
//     <>
//     {/* html me class aur react me className use hota hai  */}
//     <h1 className="heading">My name is {name}</h1> 
//     <div className="img_div">
//     <img  src={img1} alt="randomimage"/>
//     <a href={links} target="_blank">
    
//     <img  src={img2} alt="randomimage"/>
    
//     </a>
//     </div>
    
//     </>,document.getElementById("root")

// );

// Inline Css 
//  supports camel case
//  kebab case = text-transform
//  Camel case = textTransform


// .heading{
//     color: #fa9191;
//     text-align: center;
//     text-transform: capitalize;
//     font-weight: bold;
//     text-shadow: 0px 2px 4px #ffe9c5;
//     margin: 50px 0;
// }

// import react from 'react';
// import ReactDOM from 'react-dom';

// const name = "vinod";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const links = "https://www.thapatechnical.com"; //agar image me link lagana ho
// const heading = {
//     color: "#fa9191",
//     textTransfrom: "capitalize",
//     textAlign: "center",
// };
// ReactDOM.render(
//     <>
//     <h1 style={{color: "#fa9191",
//     textTransfrom: "capitalize", textAlign: "center", }}>My name is {name}</h1> 
//     <div className="img_div">
//     <img  src={img1} alt="randomimage"/>
//     <a href={links} target="_blank">
    
//     <img  src={img2} alt="randomimage"/>
    
//     </a>
//     </div>
    
//     </>,document.getElementById("root")

// );

// or

// import react from 'react';
// import ReactDOM from 'react-dom';

// const name = "vinod";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const links = "https://www.thapatechnical.com"; //agar image me link lagana ho
// const heading = {
//     color: "#fa9191",
//     textTransfrom: "capitalize",
//     textAlign: "center",
//     fontWeight: "bold",
//     textShadow: "0px 2px 4px #ffe9c5",
//     margin: "50px 0",
// };
// ReactDOM.render(
//     <>
//     <h1 style={heading}>My name is {name}</h1> 
//     <div className="img_div">
//     <img  src={img1} alt="randomimage"/>
//     <a href={links} target="_blank">
    
//     <img  src={img2} alt="randomimage"/>
    
//     </a>
//     </div>
    
//     </>,document.getElementById("root")

// );


// Challenge #3

// import react from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";

// let currDate = new Date(2021, 3, 12, 22);
// currDate = currDate.getHours();
// let Greeting = '';
// const cssStyle = {
//     color : "green"
// }

// if(currDate >= 1 && currDate < 12){
//     Greeting = 'Good Morning';
//     cssStyle.color = 'green';
// }else if(currDate >= 12 && currDate < 19){
//     Greeting = 'Good Afternoon';
//     cssStyle.color = 'Orange';
// }else{
//     Greeting = 'Good Night';
//     cssStyle.color = 'Black';
// }

// ReactDOM.render(
//     <>
//     <div>
//     <h1>Hello Sir,<span style={cssStyle}>{Greeting}</span> </h1>
//     </div>
//     </>
//     ,document.getElementById('root')

// );

// Components in React 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Kuldeep from './Kuldeep';

// ReactDOM.render(<Kuldeep />,document.getElementById('root'));

// React Component Challenge

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Sheru from './Sheru';

// ReactDOM.render(<Sheru />,document.getElementById('root'));

// Calculator

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Ap from './Ap';

// ReactDOM.render(
//     <Ap />
// ,document.getElementById('root')
// );

// Props in React Js 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from "./Card";
// import "./index.css";
// import Sdata from "./Sdata";



// ReactDOM.render(
//    <>

//    <h1 className="heading_style"> List of top 5 Netflix Series in 2020</h1>
//      <Card imgsrc={Sdata[0].imgsrc}
//          title={Sdata[0].title}
//          sname ={Sdata[0].sname}
//          link ={Sdata[0].link}
//      />
//      <Card imgsrc={Sdata[1].imgsrc}
//          title={Sdata[1].title}
//          sname ={Sdata[1].sname}
//          link ={Sdata[1].link}

//      />
//      <Card imgsrc={Sdata[2].imgsrc}
//          title={Sdata[2].title}
//          sname ={Sdata[2].sname}
//          link ={Sdata[2].link}

//      />
//      <Card imgsrc={Sdata[3].imgsrc}
//          title={Sdata[3].title}
//          sname ={Sdata[3].sname}
//          link ={Sdata[3].link}

//      />
//      <Card imgsrc={Sdata[4].imgsrc}
//          title={Sdata[4].title}
//          sname ={Sdata[4].sname}
//          link ={Sdata[4].link}

//      />

   
    
//    </>,
//     document.getElementById('root')
// );

// now by Map method 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from "./Card";
// import "./index.css";
// import Sdata from "./Sdata";

// function ncard(val){
//     return (
//         <Card imgsrc={val.imgsrc}
//         title={val.title}
//         sname ={val.sname}
//         link ={val.link}
//     />
//     );
// }

// ReactDOM.render(
//    <>

//    <h1 className="heading_style"> List of top 5 Netflix Series in 2020</h1>
    
//     {Sdata.map(ncard)}
//    </>,
//     document.getElementById('root')
// );

// by Fat Arrow Function 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from "./Card";
// import "./index.css";
// import Sdata from "./Sdata";

// const ncard = (val) =>{
//     return (
//         <Card imgsrc={val.imgsrc}
//         title={val.title}
//         sname ={val.sname}
//         link ={val.link}
//     />
//     );
// }

// ReactDOM.render(
//    <>

//    <h1 className="heading_style"> List of top 5 Netflix Series in 2020</h1>
    
//     {Sdata.map(ncard)}
//    </>,
//     document.getElementById('root')
// );

// by inline 

// 


// ReactDOM.render(
//    <>

//    <h1 className="heading_style"> List of top 5 Netflix Series in 2020</h1>
    
//     {Sdata.map(function ncard(val){
//         return (
//         <Card imgsrc={val.imgsrc}
//         title={val.title}
//         sname ={val.sname}
//         link ={val.link}
//     />
//     );

//     })}
//    </>,
//     document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';



ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,document.getElementById('root')
);