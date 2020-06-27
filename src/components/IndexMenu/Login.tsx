import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Form, Button } from "semantic-ui-react";

import { useForm } from "../../utils/hooks";
import { LOGIN_USER } from "../../utils/mutations";

const Login = () => {
  const { onChange, onSubmit, values, setErrors, errors } = useForm(login, {
    username: "",
    password: "",
  });

  const [loginUser, { loading: load }] = useMutation(LOGIN_USER, {
    update(_, result) {
      console.log(result);
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions?.exception.errors);
    },
    variables: { username: values.username, password: values.password },
  });

  function login() {
    loginUser();
  }

  return (
    <div>
      <Form className={load ? "loading" : ""} onSubmit={onSubmit}>
        <Form.Input
          icon="user"
          iconPosition="left"
          name="username"
          placeholder="Username"
          value={values.username}
          onChange={onChange}
          error={errors.username ? true : false}
          type="text"
        />
        <Form.Input
          icon="lock"
          iconPosition="left"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={onChange}
          error={errors.password ? true : false}
          type="password"
        />
        <Button content="Sign In" primary fluid />
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Login;
