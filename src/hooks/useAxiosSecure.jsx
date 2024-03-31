import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-alpha-red.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        // console.log("error from axios : ", err.response);
        if (err.response.status === 401 || err.response.status === 403) {
          console.log("Logout the user");
          logOut()
            .then((result) => {
              console.log(result);
              navigate("/login");
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      }
    );
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
