import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({
  addUser,
  userSelected,
  updateUser,
  deselectUser
}) => {
  // 1. traer register y handleSubmit del useForm
  // 2. Registrar los inputs {...register("propiedad")}
  // 3. Utilizar el handleSubmit en el onSubmit
  // 4. Recibir data como parámetro en la función del submit
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (userSelected) {
      reset(userSelected);
    }
  }, [userSelected]);

  const submit = (data) => {
    console.log(data);
    if (userSelected) {
      updateUser(data);
    } else {
      addUser(data);
    }
  };

  const clear = () => {
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: ""
    });
    deselectUser();
  };

  return (

    <>
      <form className="user-form" onSubmit={handleSubmit(submit)}>
        <div className="input-container">
          <label htmlFor="first_name">First name:</label>
          <input type="text" id="first_name" {...register("first_name")} />
        </div>

        <div className="input-container">
          <label htmlFor="last_name">Last name:</label>
          <input type="text" id="last_name" {...register("last_name")} />
        </div>

        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" {...register("email")} />
        </div>

        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" {...register("password")} />
        </div>

        <div className="input-container checkbox">
          <label htmlFor="birthday">Date of birth:</label>
          <input type="date" id="birthday" {...register("birthday")} />
        </div>

        <button className="button-form btn-space">
          {userSelected ? "Update" : "Create"} User
        </button>
        <button className="button-form" type="button" onClick={clear}>
          Clear
        </button>
      </form>
    </>
    
  );
};

export default UsersForm;