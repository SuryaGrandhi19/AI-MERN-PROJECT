import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import { toast } from "react-hot-toast";

import "../styles/auth.css";

function Login(){

    const navigate = useNavigate();

    const { login } = useAuth();


    const [formData,setFormData] = useState({

        email:"",
        password:""

    });


    const [loading,setLoading]=useState(false);



    const handleChange=(e)=>{

        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });

    };



    const handleSubmit=async(e)=>{

        e.preventDefault();


        try{

            setLoading(true);


            await login(formData);


            toast.success("Login successful");


            navigate("/dashboard");


        }

        catch(error){

            toast.error(

                error.response?.data?.message ||
                "Login failed"

            );

        }

        finally{

            setLoading(false);

        }

    };



    return(

        <div className="auth-container">


            <div className="auth-card">


                <h1>
                    Welcome Back
                </h1>


                <p>
                    Login to unlock your complete AI review
                </p>



                <form onSubmit={handleSubmit}>


                    <input

                    type="email"

                    name="email"

                    placeholder="Email"

                    value={formData.email}

                    onChange={handleChange}

                    required

                    />



                    <input

                    type="password"

                    name="password"

                    placeholder="Password"

                    value={formData.password}

                    onChange={handleChange}

                    required

                    />



                    <button disabled={loading}>


                    {
                        loading
                        ?
                        "Logging in..."
                        :
                        "Login"
                    }


                    </button>



                </form>


                <p>

                    Don't have an account?

                    <span

                    onClick={()=>navigate("/register")}

                    >

                    Register

                    </span>


                </p>


            </div>


        </div>

    );

}


export default Login;