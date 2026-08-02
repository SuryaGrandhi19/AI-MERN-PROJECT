import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import "../styles/register.css";

function Register() {

    const navigate = useNavigate();

    const { register } = useAuth();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {

            toast.error("Passwords do not match");

            return;

        }

        try {

            setLoading(true);

            await register({
                name: formData.name,
                email: formData.email,
                password: formData.password
            });

            toast.success("Registration Successful");

            navigate("/login");

        }

        catch (error) {

            toast.error(error.response?.data?.message || "Registration Failed");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="register-page">

            <div className="register-card">

                <h1>Create Account</h1>

                <p>Join AI Portfolio Reviewer</p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={handleChange}
                        required
                    />

                    <button>

                        {

                            loading

                                ?

                                "Creating..."

                                :

                                "Create Account"

                        }

                    </button>

                </form>

            </div>

        </div>

    );

}

export default Register;