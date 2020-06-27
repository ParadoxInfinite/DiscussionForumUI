import { useState } from "react";

interface StateDef {
  username?: String;
  email?: String;
  password?: String;
  confirmPassword?: String;
}
export const useForm = (callback: any, initialState: any) => {
  const [values, setValues] = useState<StateDef>(initialState);

  const [errors, setErrors] = useState<StateDef>({});

  const onChange = (event: { target: { name: string; value: string } }) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    callback();
  };

  return {
    setErrors,
    onChange,
    onSubmit,
    values,
    errors,
  };
};
