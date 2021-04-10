// import React from 'react';
// import Netflix from './Netflix';
// import Amazon from './Amazon';

// import { useEffect, useState } from "react";


// const FavSeries = 'net';

// const FavS = () => {
//     if (FavSeries === "netflix"){
//         return (
//             <Netflix />
//         );
// }else{
//     return (
//         <Amazon />
//     )
// }
// };

// const App = () => (
//     <>
//     <h1 className="heading_style"> List of top 5 Netflix Series in 2020</h1>
//     <FavS />
//     </>
// );

// export default App;


// By Ternary Operator

// import React from 'react';
// import Netflix from './Netflix';
// import Amazon from './Amazon';


// const FavSeries = 'netflix';



// const App = () => (
//     <>
//     <h1 className="heading_style"> List of top 5 Netflix Series in 2020</h1>
//     {FavSeries==="netflix" ? <Netflix /> : <Amazon />}
//     </>
// );

// export default App;

// Slot Gaming App 

// import React from 'react';
// import SlotM from './SlotM';


// const App = () => {
//     return (
//         <>
//             <h1 className="heading_style">
//                 Welcome to <span style = {{fontWeight : "bold"}}> Slot Machine Game </span>
//             </h1>
//             <SlotM x = ':smile:' y = ':smile:' let z = ':smile:'/>
//             <SlotM x = ':smile:' y = ':smile:' let z = ':smle:' />
//             <SlotM x = ':smile:' y = ':smile:' let z = ':smile:' />
//         </>
//     )

// } 

// export default App;

// import React, { useState } from 'react';


// const App = () => {

// //     const state = useState();
// // console.log(state);

// const [count, setCount] = useState(0);

// const IncNum = () => {
//     setCount(count + 1);
//     // console.log('clicked' + count++);
// }

//     return(
//         <>
//         <div>
//             <h1>{count}</h1>
//             <button onClick={IncNum}>Click Me </button>
//         </div>
//         </>
//     )
// };

// export default App;

// import React, { useState } from 'react';

// const App = () => {

//     const [currTime, updateTime] = useState(new Date().toLocaleTimeString());

//     const getTime = () => {
//         updateTime(new Date().toLocaleTimeString());

//     }
//     return (
//         <div>
//             <h1>{currTime}</h1>
//             <button onClick={getTime}>GET TIME</button>
//         </div>
//     )

// }

// export default App;

// Digital Clock

// import React, { useState } from 'react';

// const App = () => {
    
//     let time = new Date().toLocaleTimeString();

//     const [ctime, utime] = useState(time);

//     const getTime = () => {
//         time = new Date().toLocaleTimeString();
//         utime(time);
//     }

//     setInterval(getTime,1000);

//     return (
//         <>
//         <h1>{ctime}</h1>
       
//         </>
//     )
// }

// export default App;


// Events 

// import React from 'react';
// import { useState } from 'react/cjs/react.development';

// const App = () => {

//     const [bg, setBg] = useState("#9b59b6")
//     const [names, setNames] = useState("Click me");
    

//     const bgChange = () => {
//         let newBg = "grey";
//         setBg(newBg);
//         setNames('Ouch!')
        
//     }
    
//     const bgBack = () => {
//        setBg("#9b59b6");
//        setNames('AYYO')

//     }
//     return (
//         <>
//             <div style={{backgroundColor : bg}}>
//                 <button onClick={bgChange} onDoubleClick={bgBack}>{ names }</button>
                
//             </div>
//         </>
//     )
//     }

// export default App;

// mouse Events 

// import React from 'react';
// import { useState } from 'react/cjs/react.development';

// const App = () => {

//     const [bg, setBg] = useState("#9b59b6")
//     const [names, setNames] = useState("Click me");
    

//     const bgChange = () => {
//         let newBg = "grey";
//         setBg(newBg);
//         setNames('Ouch!')
        
//     }
    
//     const bgBack = () => {
//        setBg("#9b59b6");
//        setNames('AYYO')

//     }
//     return (
//         <>
//             <div style={{backgroundColor : bg}}>
//                 <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{ names }</button>
                
//             </div>
//         </>
//     )
//     }

// export default App;


// Forms in React Js 

// import React from 'react';
// import { useState } from 'react/cjs/react.development';

// const App = () => {

//     const [name, setName] = useState();
//     const [Fullname, setFullname] = useState()

//     const inputEvent = (event) => {
//         console.log(event.target.value);
//         setName(event.target.value);

//     }
//     const onSubmit = () => {
//         setFullname(name);
//     }
//     return (
//         <>
//             <div>
//                 <h1>Hello {Fullname} </h1>
//                 <input type="text" placeholder="Enter Your Name"
//                 onChange={inputEvent} value={name}/>
//                 <button onClick={onSubmit}>Click Me</button>
//             </div>
//         </>
//     )

// }
// export default App;


// Login Forms

// import React from 'react';
// import { useState } from 'react/cjs/react.development';

// const App = () => {

//     const [name, setName] = useState("");
//     const [Fullname, setFullname] = useState("");
//     const [Lastname, setLastname] = useState("");
//     const [lastNamenew, setlastNamenew] = useState("");

   

//     const onSubmits = (event) => {
//         event.preventDefault();
//         setFullname(name);
//         setlastNamenew(Lastname);
        
//     }

//     const inputEvent = (event) => {
//         console.log(event.target.value);
//         setName(event.target.value);

//     }

//     const inputEventTwo = (event) => {
//         console.log(event.target.value);
//         setLastname(event.target.value);

//     }
    
//     return (
//         <>
//             <div className="main_div">
//             <form onSubmit={onSubmits}>
//             <div>
//                 <h1>Hello {Fullname} {lastNamenew} </h1>
//                 <input type="text" 
//                 placeholder="Enter Your Name"
//                 onChange={inputEvent} 
//                 value={name}/>
//                 <br />
//                 <input type="text" 
//                 placeholder="Enter Your Last Name"
//                 onChange={inputEventTwo} 
//                 value={Lastname}/>
//                 <button type="submit">Submit Me</button>
//             </div>
//             </form>
//             </div>
//         </>
//     )

// }
// export default App;

// Complex Multiple Input Form States 

// import React from 'react';
// import { useState } from 'react/cjs/react.development';

// const App = () => {

//     const [name, setname] = useState('');
//     const [nameone, setnameone] = useState('');
//     const [lastname, setlastname] = useState('');
//     const [lastnameone, setlastnameone] = useState('')
//     const [email, setemail] = useState('');
//     const [emailone, setemailone] = useState('');

//     const onSubmits = (event) => {
//         event.preventDefault()
//         setnameone(name);
//         setlastnameone(lastname);
//         setemailone(email);
//     }

//     const inputEvent = (event) => {
//         setname(event.target.value)
//     }

//     const inputEventTwo = (event) => {
//         setlastname(event.target.value)
//     }
    
//     const inputEventThree = (event) => {
//         setemail(event.target.value);
//     }


//     return(
//         <>
//         <form onSubmit={onSubmits}>
//             <div>
//                 <h1>Hello {nameone} {lastnameone}</h1>
//                 <h2>{emailone}</h2>
//                 <input type="text"
//                 placeholder="Enter Your First Name"
//                 onChange={inputEvent}
//                 value={name} />
//                 <br />
//                 <input type="text"
//                 placeholder="Enter Your last Name"
//                 onChange={inputEventTwo}
//                 value={lastname} />
//                 <br />
//                 <input type="text"
//                 placeholder="Enter Your Emailid"
//                 onChange={inputEventThree}
//                 value={email} />
//                 <br />

//                 <button type="submit">Submit</button>
//             </div>
//         </form>
//         </>

//     )
// }

// export default App;

// Now in Short 

// import React from 'react';
// import { useState } from 'react/cjs/react.development';

// const App = () => {

//     const [fullName, setfullName] = useState({
//         fname: "",
//         lname: "",
//         email: "",
//         mobile: "",
//     }); 

//     const onSubmits = (event) => {
//         event.preventDefault();
//         alert("form Submitted");

//     }

//     const inputEvent = (event) => {
//         console.log(event.target.value);
//         console.log(event.target.name);
        

//         // const value = event.target.value;
//         // const name = event.target.name;

//         // or by object destructuring

//         const {value, name} = event.target;

//         setfullName((prevValue) => {
//             // console.log(prevValue);
//             if(name === "fName"){
//                 return { 
//                 fname: value,
//                 lname: prevValue.lname,
//                 email: prevValue.email,
//                 mobile: prevValue.mobile,
//                 }
//             }else if(name === "lName"){
//                 return {
//                     fname: prevValue.fname,
//                     lname: value,
//                     email: prevValue.email,
//                     mobile: prevValue.mobile, 
//                 }
//             }else if(name === "eMail"){
//                 return {
//                     fname: prevValue.fname,
//                     lname: prevValue.lname,
//                     email: value,
//                     mobile: prevValue.mobile, 
//                 }
//             }else if(name === "mobile"){
//                 return {
//                     fname: prevValue.fname,
//                     lname: prevValue.lname,
//                     email: prevValue.email,
//                     mobile: value, 
//                 }
//             }

//         });
    

//     }


//     return (
//         <>
//             <div className="main_div">
//             <form onSubmit={onSubmits}>
//             <div>
//                 <h1>Hello {fullName.fname} {fullName.lname}</h1>
//                 <h3>{fullName.email}</h3>
//                 <h3>{fullName.mobile}</h3>
//                 <input type="text" 
//                 placeholder="Enter Your First Name"
//                 name='fName'
//                 onChange={inputEvent} 
//                 value={fullName.fname}
//                 />
//                 <br />
//                 <input type="text" 
//                 placeholder="Enter Your Last Name"
//                 onChange={inputEvent}
//                 name='lName' 
//                 value={fullName.lname}

//                 />
//                   <input type="email" 
//                 placeholder="Enter Your Email"
//                 onChange={inputEvent}
//                 name='eMail' 
//                 value={fullName.email}
                    
//                 />
//                   <input type="text" 
//                 placeholder="Enter Your Mobile"
//                 onChange={inputEvent}
//                 name='mobile' 
//                 value={fullName.mobile}
                    
//                 />
//                 <button type="submit">Submit Me</button>
//             </div>
//             </form>
//             </div>
//         </>
//     )

// }
// export default App;

//  ToDo List

// import React, {useState} from 'react';
// import ToDolist from './ToDolist';

// const App = () => {
//     const [list, setlist] = useState();
//     const [Items, setItems] = useState([]);
    

//     const inputEvent = (event) => {
//         setlist(event.target.value);

//     }
//     const onSubmits = () => {
//         setItems((olditems) => {
//             return [...olditems, list];
//         });
//         setlist("");
        
//     }
//     const deleteItems = (id) => {
//         console.log('deleted');
//         setItems((olditems) => {
//             return olditems.filter((arrElem, index) => {
//                 return index !== id ;
//             })
//         })
//     }
//     return (
//         <>
//             <div className="main_div">
//             <div className="center_div">
//                 <br />
//                 <h1>ToDo List</h1>
//                 <br />
//                 <input type="text" 
//                 placeholder="Add a Item "
//                 onChange={inputEvent}
//                 value={list}
//                 />
//                 <button onClick={onSubmits}> + </button>

//                 <ol>
//                     {/* <li> {} </li> */}
//                    { Items.map((itemval, index) => {
//                         return <ToDolist 
//                         text={itemval}
//                         key={index}
//                         id={index}
//                         onSelect={deleteItems}


//                         />
//                     }) }
//                 </ol>
//             </div>

//             </div>
//         </>

//     )
// }

// export default App;

// Increment Decrement 

// import React, {useState} from 'react';
// import AddIcon from '@material-ui/icons/Add';

// const App = () => {
//     const [Inum, setInum] = useState(0);

//     const IncNum = () => {
//         setInum(Inum + 1);
//     }

//     const DecNum = () => {
//         if (Inum > 0){
//             setInum(Inum -1)
//         }else{
//             alert("zero te Niche Ni Jaan Dunga");
//         }

//     }


//     return (
//         <>
//             <div className="main_div">
//                 <div className="center_div">
//                     <h1>{Inum}</h1>
//                     <button className="one" onClick={IncNum}>Increm</button>
//                     <button className="two" onClick={DecNum}>Decrem</button>
//                 </div>
//             </div>
//         </>

//     )
// }

// export default App;

// Material UI Icons

// import React, {useState} from 'react';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';
// const App = () => {
//     const [Inum, setInum] = useState(0);

//     const IncNum = () => {
//         setInum(Inum + 1);
//     }

//     const DecNum = () => {
//         if (Inum > 0){
//             setInum(Inum -1)
//         }else{
//             alert("zero te Niche Ni Jaan Dunga");
//         }

//     }


//     return (
//         <>
//             <div className="main_div">
//                 <div className="center_div">
//                     <h1>{Inum}</h1>
//                     <div className="btn_div">
//                     <Tooltip title="Add" aria-label="add">
//                     <Button onClick={IncNum} className="btn_green"><AddIcon /></Button>
//                     </Tooltip>
//                     <Tooltip title="Delete">
//                     <Button onClick={DecNum} className="btn_red"><DeleteIcon /></Button>
//                     </Tooltip>
//                     </div>
//                 </div>
//             </div>
//         </>

//     )
// }

// export default App;

// import React from 'react';
// import Clock from 'react-digital-clock';

// const App = () => {
//       return (
//            <Clock className="clock" />
//       )
// };

// export default App;

// Project 2 ToDoList

// import React, { useState } from 'react';
// import AddIcon from '@material-ui/icons/Add';
// import ListComp from './ListComp';


// const App = () => {

//       const [list, setlist] = useState();
//       const [Items, setItems] = useState([]);

//       const inputEvent = (event) => {
//             setlist(event.target.value)
//       }

//       const onSubmits = () => {
//             setItems((oldItems) => {
//                   return [...oldItems,list]

//             })
//             setlist(" ");
           
//       }
      

//       return (
//             <>
//                   <div className="main_div">
//                         <div className="center_div">
//                               <h1>TODO LIST</h1>
//                               <input type="text"
//                               placeholder="Add a Item"
//                               onChange={inputEvent}
//                               value={list}
//                               />
//                               <button onClick={onSubmits}><AddIcon /></button>
//                               <ol>
                                    
//                                   {  Items.map((val, index) => {
//                                           return <ListComp 
//                                           text={val}
//                                                 key={index}
//                                           />

//                                     }) }
//                               </ol>
//                         </div>
//                   </div>
//             </>
//       )

// }

// export default App;

// Google Keep Clone 

// import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import CreateNote from './CreateNote'
// import Note from './Note';


// const App = () => {

//       const [addItem, setaddItem] = useState([]);

//       const addNote = (note) => {
//             // alert("I am clicked");
//             setaddItem((olddata)=> {
//                   return [...olddata, note];
//             });

//             console.log(note);
//       };

//       const deleteItems = (id) => {
//             console.log("clicked");
//             setaddItem((olddata) => {
//                   return olddata.filter((arrElem, index) => {
//                         return index !==id ;

//                   })
//             })

//       }
      
//       return (
//             <>
//             <Header />
//             <CreateNote passNote={addNote}/>
            

//             {addItem.map((val, index)=>{
//                   return <Note 
//                         key={index}
//                         id={index}
//                         title={val.title}
//                         content={val.content}
//                         onSelect={deleteItems}
//                   />

//             })}
//             <Footer />
//             </>
//       )
// }

// export default App;


// useEffect

// import React from 'react';

// const App = () => {
//     const [num, setnum] = useState(0);
//     const [nums, setnums] = useState(0);
//     useEffect(()=>{
//         alert('I am clicked')
//     },[num])

//     return (
//         <>
//         <button onClick={()=> {
//             setnum(num+1);
//         }}
//         >Click Me {num} </button>
//         <button onClick={()=> {
//             setnums(nums+1);
//         }}
//         >Click Me {nums}</button>
        

      
//     </>
//     )
// };
// export default App;

// import React from 'react';

// const App = () => {
//     const [num, setnum] = useState(0);
//     useEffect(()=>{
//         document.title=`you clicked me ${num} times`
//     })

//     return (
//         <>
//         <button onClick={()=> {
//             setnum(num+1);
//         }}
//         >Click Me {num} </button>  
//     </>
//     )
// };
// export default App;

// React Router 

// Server Side Rendering me reload hota Hai 
// Client Side Rendering me reload nahi hota 

// import React from 'react';
// import {Route, Switch } from 'react-router-dom';
// import About from './About';
// import Contact from './Contact';
// import Error from './Error';
// import Menu from './Menu';
// import Service from './Service';
// import User from './User';
// import Search from './Search';

// const App = () => {

//     const Name = () => {
//         return <h1>Hello I am Name Page</h1>
//     }
//     return (
//         <>
//         <Menu />
//          <Switch>
//              <Route exact path="/" component={About} />
//              <Route exact path="/contact" component={Contact} />
//              <Route path="/search" component={Search} />
//              <Route exact path="/service" component={Service} />
//              <Route path="/contact/Name" component={Name} />
//              <Route path="/user/:fname/:lname" component={User} />

//              <Route component={Error} />

//          </Switch>
//         </>
//     )
// }

// export default App;

// import React from 'react';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import {Route,Switch} from 'react-router-dom';
// import Navbar from './Navbar';

// const App = () => {
//     return (
//         <>
//         <Navbar />
//         <Switch>
//         <Route exact path="/" component={Home}/>
//         <Route exact path="/contact" component={Contact}/>
//         <Route exact path="/about" component={About} />
//         </Switch>

      
//         </>
//     )
// }

// export default App;

import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Redirect, Route,Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service'
import Navbar from './Navbar';


const App = () => {
    return (
        <>
    <Navbar />
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/about" component={About} />
         <Route exact path="/service" component={Service} />
         <Redirect to="/" />
       </Switch>

        </>
    )
}

export default App;