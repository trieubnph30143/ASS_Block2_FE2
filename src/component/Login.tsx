import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

type FormUser = {
  email: string;
  password: string;
};
const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export function Login() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormUser>({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  async function OnSubmit(user: FormUser) {
    let res = await fetch(
      `http://localhost:3000/user?email=${user.email}&password=${user.password}`
    );
    let data = await res.json();
    if (data[0]) {
      navigate("/product");
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          border: "1px solid grey",
          padding: "20px",
          marginTop: "20px",
          width: "800px",
        }}>
        <div>
          <h2 style={{ textAlign: "center" }}>Add Product</h2>
          <Form onSubmit={handleSubmit(OnSubmit)}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control {...register("email")} placeholder='email' />
              <p>{errors?.email?.message}</p>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control {...register("password")} placeholder='password' />
              <p>{errors?.password?.message}</p>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
