// seeing how to use the usecontext in the react js 
import React, {useState, createContext} from "react";
import UseContextB from "./UseContextB";

export const UserContext = createContext();

function UseContextA(){

    const [user, setUser] = useState("Harsh");
    return(
        <>
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                 <UseContextB user={user}/>
            </UserContext.Provider>
        </div>
        </>
    );
}

export default UseContextA;
