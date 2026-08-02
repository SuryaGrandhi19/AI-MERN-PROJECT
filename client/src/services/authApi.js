import API from "./axios";

// Register
export const registerUser = async (userData) => {

    const response = await API.post("/auth/register", userData);

    return response.data;
};

// Login
export const loginUser = async (userData) => {

    const response = await API.post("/auth/login", userData);

    return response.data;
};

// Logout
export const logoutUser = async () => {

    const response = await API.post("/auth/logout");

    return response.data;
};

// Get Logged In User
export const getProfile = async () => {

    const response = await API.get("/users/profile");

    return response.data;
};

// Update Profile
export const updateProfile = async (data) => {

    const response = await API.put("/users/profile", data);

    return response.data;
};