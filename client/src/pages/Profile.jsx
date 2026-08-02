import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../services/authApi";
import { toast } from "react-hot-toast";
import "../styles/profile.css";

function Profile() {

    const [user, setUser] = useState({

        name: "",
        email: "",
        githubUrl: "",
        portfolioUrl: ""

    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        fetchProfile();

    }, []);

    const fetchProfile = async () => {

        try {

            const data = await getProfile();

            setUser(data);

        }

        catch {

            toast.error("Failed to load profile");

        }

    };

    const handleChange = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await updateProfile({

                name: user.name,
                githubUrl: user.githubUrl,
                portfolioUrl: user.portfolioUrl

            });

            setUser(response.user);

            toast.success("Profile updated successfully");

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Update failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="profile-page">

            <div className="profile-card">

                <h1>My Profile</h1>

                <form onSubmit={handleSubmit}>

                    <label>Name</label>

                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />

                    <label>Email</label>

                    <input
                        type="email"
                        value={user.email}
                        disabled
                    />

                    <label>GitHub URL</label>

                    <input
                        type="text"
                        name="githubUrl"
                        placeholder="https://github.com/username"
                        value={user.githubUrl}
                        onChange={handleChange}
                    />

                    <label>Portfolio URL</label>

                    <input
                        type="text"
                        name="portfolioUrl"
                        placeholder="https://yourportfolio.vercel.app"
                        value={user.portfolioUrl}
                        onChange={handleChange}
                    />

                    <button disabled={loading}>

                        {
                            loading

                                ?

                                "Saving..."

                                :

                                "Save Changes"
                        }

                    </button>

                </form>

            </div>

        </div>

    );

}

export default Profile;