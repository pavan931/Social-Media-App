import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{

    const [currentUser,setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )

    const login = ()=>{
        //
        setCurrentUser({
            id:1,
            name:"Pavan Das",
            profilePic:"https://images.pexels.com/photos/8974389/pexels-photo-8974389.jpeg?auto=compress&cs=tinysrgb&w=400"
        })
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser]
    );

    return(
        <AuthContext.Provider value={{currentUser,login}}>
            {children}
        </AuthContext.Provider>
    )
}