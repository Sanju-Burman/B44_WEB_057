import axios from "axios";

const BE_API = import.meta.env.VITE_Backend_API
const API = axios.create({
    baseURL: BE_API

});

// Login API
export const login = async ({ email, password }) => {
    try {
        // console.log(email,password)
        const response = await API.post("/auth/login", { email, password });
        // console.log(response)
        return response.data; // Contains accessToken and refreshToken

    } catch (error) {
        console.error({ msg: "Login failed", error })
    }
};

// Logout API
export const logout = async ({ accessToken, refreshToken }) => {
    try {
        const response = await API.post("/auth/logout", { accessToken, refreshToken });
        return response.data; // Contains logout success message
    } catch (error) {
        console.error({ msg: "Log-out failed", error })
    }
};

// Signup API
export const signup = async ({ username, email, password }) => {
    try {
        const response = await API.post("/auth/signup", { username, email, password });
        return response.data; // Contains success message and user info
    } catch (error) {
        console.error({ msg: "Signup failed", error })
    }
};

// Refresh Token API
export const refreshToken = async (token) => {
    try {
        const response = await API.post("/auth/refresh", { refreshToken: token });
        return response.data; // Contains new accessToken
    } catch (error) {
        console.error({ msg: "failed creating new access Token", error })
    }
};

export const recommendetionData = async (storedData) => {
    try {
        const response = API.post("/api/recom", storedData);
        return (await response).data;
    }catch(error) {
        console.error({msg:"fail for recommendation",error})
    }
}


let cachedDestinations = null;

export const fetchDestinations = async () => {
    if (cachedDestinations) {
        return cachedDestinations;
    }
    try {
        const response = await API.get('/destinations'); 
        cachedDestinations = response.data; 
        return cachedDestinations;
    } catch (error) {
        console.error("Error fetching destination data:", error);
        throw new Error("Unable to fetch destination data.");
    }
};
