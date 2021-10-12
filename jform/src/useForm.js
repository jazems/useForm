import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    name: "",
    frontend: "false",
    backend: "false",
    year: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  /* bug: value.match() returns null no matter what */
  const handleValidation = (value, key, pattern) => {
    return false;

    /*
    if (key === "name") {
      let matched = value.trim().match(pattern);
      return matched ? false : true;
    } */
  };

  const handleSubmit = () => {
    console.log(values);
  };

  return { values, handleChange, handleValidation, handleSubmit };
};

export default useForm;
