// import { createContext, use, useContext, useState } from "react";
// const userContext = createContext();
// export default function App() {
//   const [name, setName] = useState('redwan');
//   return (
//     <>
//       <h2>Hello</h2>

//       <userContext.Provider value={{ name,setName }}>
//         <Child />
//         <Another />
//       </userContext.Provider>
//     </>
//   );
// }

// const Child = () => {
//     return <GrandChild />
// }

// const GrandChild = () => {
//   const { name, setName } = useContext(userContext);
//   return <h2>{name}</h2>;
// }

// const Another = () => {
//   const { name, setName } = useContext(userContext);
  
//   return <button onClick={() => setName("shawon")}>set Name</button>;
// };

import React from 'react'
import Navbar from './auth/Navbar'
import { AuthProvider } from './auth/AuthContext'

export default function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    </div>
  );
}
