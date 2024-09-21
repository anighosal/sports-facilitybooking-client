import { verifyToken } from "../../../../utils/verifyToken";
import { AppDispatch } from "../../../store";
import { useLoginMutation } from "../authApi";
import { setUser } from "../authSlice";

export const loginUser =
  (userInfo: { email: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    const [login] = useLoginMutation(); // Get the mutation function

    try {
      const res = await login(userInfo).unwrap(); // Call the login mutation and unwrap the result
      const user = verifyToken(res.token); // Assuming you have a function to decode the token
      dispatch(
        setUser({
          user: {
            ...user,
            role: res.data.role,
            id: "",
            name: "",
            email: "",
          },
          token: res.token,
        })
      ); // Include role in the user object
    } catch (error) {
      console.error("Login failed: ", error);
      throw error; // Rethrow the error if needed
    }
  };
