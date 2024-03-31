import { Link, useLocation, useNavigate } from "react-router-dom";
import logImg from "../../assets/images/login/login.svg";
// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import useAuth from "../../hooks/useAuth";
// import axios from "axios";

const Login = () => {
  // const { signInUser } = useContext(AuthContext);
  const { signInUser } = useAuth();

  // redirect to the page where you wanted to go before!!!
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(location?.state ? location.state : "/");

        // const user = { email };

        // json webtoken store here
        // axios
        //   .post(`http://localhost:5000/jwt`, user, { withCredentials: true })
        //   .then((res) => {
        //     console.log(res.data);
        //     if (res.data.success) {
        //       console.log(res.data);
        //     }
        //   });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-8 md:gap-16 lg:gap-20">
        <div className="text-center w-1/2 md:w-2/3 lg:w-full">
          <img src={logImg} alt="" />
        </div>
        <div className="card  w-2/3 md:w-full md:max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl px-6 pt-6 font-bold">Login Now</h1>

          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                defaultValue={"robi@gmail.com"}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                defaultValue={"123456"}
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <div>
              <p className="">
                Do not have an account ?{" "}
                <Link
                  to={"/signup"}
                  className="text-sm underline cursor-pointer text-red-600 font-semibold"
                >
                  Sign up here...
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
