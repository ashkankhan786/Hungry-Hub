import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
const Add = () => {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Salad",
    price: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        title: "",
        description: "",
        category: "Salad",
        price: "",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="add">
      <form action="" className="form-col" onSubmit={handleOnSubmit}>
        <div className="upload-image">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Image"
              width={150}
            />
          </label>
          <input
            type="file"
            hidden
            required
            id="image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <div className="product">
          <div className="product-name">
            <p>Product name</p>
            <input
              onChange={handleOnChange}
              type="text"
              name="title"
              placeholder="Type here"
              required
              value={data.title}
            />
          </div>
          <div className="product-description">
            <p>Product description</p>
            <textarea
              onChange={handleOnChange}
              name="description"
              placeholder="Write description here"
              rows={6}
              value={data.description}
            />
          </div>
        </div>
        <div className="category-price">
          <div className="category">
            <p>Product Category</p>
            <select
              name="category"
              onChange={handleOnChange}
              value={data.category}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Dessert">Dessert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="price">
            <p>Product price</p>
            <input
              type="number"
              placeholder="$"
              name="price"
              value={data.price}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <button type="submit" className="submit-but">
          Add
        </button>
      </form>
    </div>
  );
};
export default Add;
