// old Method 

// import React from 'react';

// const User = ({match}) => {
//     return (
//         <h1>user {match.params.fname} page </h1>

//     )
// }

// export default User;

// New Method 

import React from 'react';
import {useParams,useLocation,useHistory} from 'react-router-dom';

const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(history)
   return (
   <>
   <h1> user {fname} {lname} page</h1>
   <p>my current location is {location.pathname}</p>
   {location.pathname === `/user/vinod/thapa` ? 
       <button onClick={()=> history.goBack()
        }> Click Me </button> : null 
   }
   </>)}

export default User;

