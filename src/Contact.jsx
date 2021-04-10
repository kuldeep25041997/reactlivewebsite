import React, { useState } from 'react';

const Contact = () => {
    const [data, setdata] = useState({
        fullname:'',
        phone:'',
        email:'',
        message:'',
    });

    const InputEvent = (event) => {
        const {name,value} = event.target;

        setdata((preVal)=> {
            return {
                ...preVal,
                [name]: value,
            }
        })

    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`my name is ${data.fullname}
        my contact no is ${data.phone} my email is ${data.email}
        and here is my message - ${data.message}`)

    }; 
    return (
        <>
        <div classNameName="my-3">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
  <div className="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1"
    name="fullname"
    value={data.fullname}
    onChange={InputEvent}
     placeholder="Enter Your Name"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="number" className="form-control" id="exampleFormControlInput1"
    name="phone"
    value={data.phone}
    onChange={InputEvent}
     placeholder="Mobile Number"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1"
    name="email"
    value={data.email}
    onChange={InputEvent}
     placeholder="name@example.com"/>
  </div>

  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
    name="message"
    value={data.message}
    onChange={InputEvent}
    
    ></textarea>
  </div>
  <div className="col-12 my-2">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>
                </div>
            </div>
        </div>
     

        </>
    )
}

export default Contact;