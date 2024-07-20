import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

function LoginPopUp({ setShowLogin }) {
  const [user, setUser] = useState("existing");
  return (
    <div className={` ${user === "new" ? "new" : "loginpopup"}`}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <img
            src={assets.cross_icon}
            className="cross"
            onClick={() => setShowLogin(false)}
          />
          {user === "new" ? (
            <>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                required
              />
            </>
          ) : (
            <></>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group
          className={`${user === "new" ? "mb-3" : "mb-4"}`}
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        {user === "new" ? (
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I agree to the terms and conditions"
              required
            />
          </Form.Group>
        ) : (
          <></>
        )}
        <div className="end">
          <Button variant="primary" type="submit">
            {`${user === "new" ? "Register" : "Login"}`}
          </Button>
          {user === "existing" ? (
            <p>
              New User?
              <span
                onClick={() => {
                  setUser("new");
                }}
              >
                Click Here
              </span>
            </p>
          ) : (
            <p>
              Existing User?
              <span
                onClick={() => {
                  setUser("existing");
                }}
              >
                Login
              </span>
            </p>
          )}
        </div>
      </Form>
    </div>
  );
}

export default LoginPopUp;
