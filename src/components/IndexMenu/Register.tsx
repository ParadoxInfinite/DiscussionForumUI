import React, { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Form, Button } from "semantic-ui-react";

import { AuthContext } from "../../context/auth";
import { REGISTER_USER } from "../../utils/mutations";
import { useForm } from "../../utils/hooks";
import history from "../../utils/history";

const Register = () => {
  const context = useContext(AuthContext);
  const { onChange, onSubmit, values, setErrors, errors } = useForm(register, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      context.login(userData);
      history.push("/home");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions?.exception.errors);
    },
    variables: values,
  });

  function register() {
    addUser();
  }

  return (
    <div>
      <Form onSubmit={onSubmit} className={loading ? "loading" : ""} noValidate>
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
          icon="mail"
          iconPosition="left"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={onChange}
          error={errors.email ? true : false}
          type="email"
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
        <Form.Input
          icon="lock"
          iconPosition="left"
          name="confirmPassword"
          placeholder="Comfirm Password"
          value={values.confirmPassword}
          onChange={onChange}
          error={errors.password ? true : false}
          type="password"
        />
        <Button content="Register" primary fluid />
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

export default Register;
