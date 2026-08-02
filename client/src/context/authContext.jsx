import { createContext, useEffect, useState } from "react";

import {
    loginUser,
    registerUser,
    logoutUser,
    getProfile
} from "../services/authApi";


export const AuthContext = createContext();


function AuthProvider({children}){


    const [user,setUser] = useState(null);

    const [loading,setLoading] = useState(true);



    const loadUser = async()=>{

        try{

            const data = await getProfile();

            setUser(data.user);

        }
        catch(error){

            setUser(null);

        }
        finally{

            setLoading(false);

        }

    };



    useEffect(()=>{

        loadUser();

    },[]);




    const login = async(formData)=>{


        const data = await loginUser(formData);


        setUser(data.user);


        return data;

    };




    const register = async(formData)=>{

        return await registerUser(formData);

    };



    const logout = async()=>{


        await logoutUser();


        setUser(null);


    };




    return(

        <AuthContext.Provider

        value={{
            user,
            loading,
            login,
            register,
            logout
        }}

        >

            {children}

        </AuthContext.Provider>


    );

}


export default AuthProvider;