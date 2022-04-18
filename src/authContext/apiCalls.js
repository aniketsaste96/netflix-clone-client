import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions"

export const login = async (user, dispatch) => {
    dispatch(loginStart());

    try {
        const res = await axios.post("https://git.heroku.com/netflix-clone-mern-project.git/api/auth/login", user);
        dispatch(loginSuccess(res.data));



    } catch (error) {
        dispatch(loginFailure());

    }
}