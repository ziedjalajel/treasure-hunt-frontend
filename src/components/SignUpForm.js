import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../store/actions/authActions";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [sign, setSign] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleChange = (event) =>
    setSign({ ...sign, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(sign));

    history.push("/");
  };
  const viewPassword = () => {
    setShow(show ? false : true);
    // show ? false : true
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Sign Up </h1>
      <div className="mb-3">
        <label className="form-label">Email :</label>
        <input
          type="text"
          value={signup.email}
          onChange={handleChange}
          name="email"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Username :</label>
        <input
          required
          type="text"
          value={signup.username}
          onChange={handleChange}
          name="username"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password :</label>
        <input
          type={show ? "text" : "password"}
          value={signup.password}
          onChange={handleChange}
          name="password"
          className="form-control"
        />
        <button type="button" class="btn btn-secondary" onClick={viewPassword}>
          Show/Hide
        </button>
      </div>

      <button type="submit" class="btn btn-outline-success">
        Create
      </button>
    </form>
  );
};
export default SignUpForm;
