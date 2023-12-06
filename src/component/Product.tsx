import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

type dataProduct = {
  name: string;
  price: number;
  desc: string;
  category: string;
  image: string;
  id: number;
};
type FormData = {
  name: string;
  price: number;
  desc: string;
  category: string;
  image: string;
};
const schema = yup.object({
  name: yup.string().required(),
  price: yup.number().min(1).required(),
  desc: yup.string().required(),
  category: yup.string().required(),
  image: yup.string().required(),
});

export function Product() {
  const [data, setdata] = useState<dataProduct[]>([]);
  const [dataedit, setdataedit] = useState<dataProduct | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { name: "", price: 0, desc: "", image: "" },
  });
  async function getAll() {
    const res = await fetch("http://localhost:3000/product");
    const data = await res.json();
    if (data) {
      setdata(data);
    }
  }
  useEffect(() => {
    getAll();
  }, []);
  function setValueProduct(
    name: string,
    price: number,
    desc: string,
    image: string
  ) {
    setValue("name", name);
    setValue("price", price);
    setValue("desc", desc);
    setValue("image", image);
  }
  async function OnSubmit(product: FormData) {
    if (dataedit) {
      let res = await fetch(`http://localhost:3000/product/${dataedit.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const data = await res.json();
      if (data) {
        toast.success("Update success");
        setValueProduct("", 0, "", "");
        setdataedit(null);
        getAll();
      }
    } else {
      let res = await fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const data = await res.json();
      if (data) {
        toast.success("add success");
        setValueProduct("", 0, "", "");
        getAll();
      }
    }
  }
  function handleUpdate(id: number) {
    let arr = data.filter((item) => item.id === id);
    if (arr[0]) {
      setdataedit(arr[0]);
      setValueProduct(arr[0].name, arr[0].price, arr[0].desc, arr[0].image);
    }
  }
  async function handleDelete(id: number) {
    let check = confirm("Do you want to Delete?");
    if (check) {
      await fetch(`http://localhost:3000/product/${id}`, {
        method: "DELETE",
      });
      toast.success("Delete Success");
      getAll();
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
              <Form.Label>Name</Form.Label>
              <Form.Control {...register("name")} placeholder='Name' />
              <p>{errors?.name?.message}</p>
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control {...register("price")} placeholder='Price' />
              <p>{errors?.price?.message}</p>
            </Form.Group>
            <Form.Group>
              <Form.Label>Desc</Form.Label>
              <Form.Control {...register("desc")} placeholder='Desc' />
              <p>{errors?.desc?.message}</p>
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control {...register("image")} placeholder='Image' />
              <p>{errors?.image?.message}</p>
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Select {...register("category")}>
                <option value={"iphone"}>Iphone</option>
                <option value={"samsung"}>Samsung</option>
              </Form.Select>
              <p>{errors?.desc?.message}</p>
            </Form.Group>
            <Button type='submit' variant='primary'>
              {dataedit ? "Update" : "Add"}
            </Button>
          </Form>
          <h2 style={{ textAlign: "center" }}>List Product</h2>
          <Table>
            <thead>
              <tr>
                <td>Stt</td>
                <td>Name</td>
                <td>Image</td>
                <td>Price</td>
                <td>Desc</td>
                <td>Category</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.length &&
                data.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        <img src={item.image} width={50} height={50} alt='' />
                      </td>
                      <td>{item.price}</td>
                      <td>{item.desc}</td>
                      <td>{item.category}</td>
                      <td>
                        <Button
                          onClick={() => handleUpdate(item.id)}
                          variant='warning'>
                          Edit
                        </Button>
                        <Button
                          onClick={() => handleDelete(item.id)}
                          variant='danger'>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
