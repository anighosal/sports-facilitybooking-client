import { verifyToken } from "../../../../utils/verifyToken";
import { AppDispatch } from "../../../store";
import { useLoginMutation } from "../authApi";
import { setUser } from "../authSlice";

export const loginUser =
  (userInfo: { email: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    const [login] = useLoginMutation();

    try {
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.token);
      dispatch(
        setUser({
          user: {
            ...user,
            role: res.data.role,
            id: "",
            name: "",
            email: "",
            address: "",
            phone: "",
          },
          token: res.token,
        })
      );
    } catch (error) {
      console.error("Login failed: ", error);
      throw error;
    }
  };
