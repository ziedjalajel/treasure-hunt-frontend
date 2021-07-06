import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signin } from "../store/actions/authActions";

const SigninForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState();
  const [show, setShow] = useState(false);

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
  };
  const viewPassword = () => {
    setShow(show ? false : true);
    // show ? false : true
  };
  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <div className="mb-3">
          <label className="form-label">Username :</label>
          <input
            type="text"
            value={signin.username}
            onChange={handleChange}
            name="username"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password :</label>
          <input
            type={show ? "text" : "password"}
            value={signin.password}
            onChange={handleChange}
            name="password"
            className="form-control"
          />
          <button
            type="button"
            class="btn btn-secondary"
            onClick={viewPassword}
          >
            Show/Hide
          </button>
        </div>

        <button type="submit" class="btn btn-outline-success">
          Sign in
        </button>
        {/* {user ? (
          <button type="button" class="btn btn-primary position-relative">
            Profile
            <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
              <span class="visually-hidden">New alerts</span>
            </span>
          </button>
        ) : (
          <></>
        )} */}
      </form>
      {/* <p>You Signed In Successfully</p> */}
    </>
  );
};
export default SigninForm;
