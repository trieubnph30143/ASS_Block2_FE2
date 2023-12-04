import { useEffect, useState } from "react";
import { Table, Button, Form } from "react-bootstrap";

type typeProduct = {
  id: number;
  name: string;
  price: number;
  desc: string;
};

type formProduct = {
  name: string;
  price: number;
  desc: string;
};
type ProductEdit = {
  id: number;
  name: string;
  price: number;
  desc: string;
};
export function Product() {
  const [data, setData] = useState<typeProduct[]>([]);
  const [productAdd, setProductAdd] = useState<formProduct>({
    name: "",
    price: 0,
    desc: "",
  });
  const [productEdit, setProductEdit] = useState<ProductEdit | null>(null);

  const handleChangeForm =
    (name: keyof formProduct) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setProductAdd((prev) => ({ ...prev, [name]: event.target.value }));
    };
  async function getAll() {
    let res = await fetch("http://localhost:3000/product");
    let data = await res.json();
    if (data) {
      setData(data);
    }
  }
  useEffect(() => {
    getAll();
  }, []);

  async function handleDelete(id: number) {
    await fetch(`http://localhost:3000/product/${id}`, {
      method: "DELETE",
    });
    getAll();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (productEdit) {
      const res = await fetch(
        `http://localhost:3000/product/${productEdit.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productAdd),
        }
      );
      const data = await res.json();
      if (data) {
        alert("upadte thnah ocng");
        setProductAdd({
          name: "",
          price: 0,
          desc: "",
        });
        setProductEdit(null);
        getAll();
      }
    } else {
      const res = await fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productAdd),
      });
      const data = await res.json();
      if (data) {
        alert("add thnah ocng");
        setProductAdd({
          name: "",
          price: 0,
          desc: "",
        });
        getAll();
      }
    }
  }

  function handleUpdate(id: number) {
    let arr = data.filter((item) => item.id === id);
    if (arr[0]) {
      setProductEdit(arr[0]);
      setProductAdd({
        name: arr[0].name,
        price: arr[0].price,
        desc: arr[0].desc,
      });
    }
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "800px",
          border: "1px solid grey",
          padding: "20px",
          marginTop: "20px",
        }}>
        <h2 style={{ textAlign: "center" }}>Add Product</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId=''>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter product name'
              value={productAdd.name}
              onChange={handleChangeForm("name")}
            />
          </Form.Group>

          <Form.Group controlId=''>
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter product price'
              value={productAdd.price}
              onChange={handleChangeForm("price")}
            />
          </Form.Group>

          <Form.Group controlId=''>
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type='textarea'
              placeholder='Enter product description'
              value={productAdd.desc}
              onChange={handleChangeForm("desc")}
            />
          </Form.Group>

          <Form.Group>
            <Button
              variant='primary'
              style={{ marginTop: "10px" }}
              type='submit'>
              {productEdit ? "Update" : "Create"}
            </Button>
          </Form.Group>
        </Form>

        <h2 style={{ textAlign: "center" }}>List Product</h2>
        <Table>
          <thead>
            <tr>
              <th scope='col'>id</th>
              <th scope='col'>Name</th>
              <th scope='col'>Price</th>
              <th scope='col'>Desc</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length &&
              data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.desc === "" ? "đang cập nhật" : item.desc}</td>
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
  );
}
