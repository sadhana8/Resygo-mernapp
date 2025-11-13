import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../App";

const AddMenu = ({ token }) => {
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.name || !data.category || !data.price) {
      toast.error("Please fill in all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price);
    if (image) formData.append("image", image);

    try {
      setLoading(true);
      const res = await axios.post(`${backendUrl}/api/menu/add`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        toast.success("Menu added successfully!");
        setData({ name: "", description: "", category: "", price: "" });
        setImage(null);
      } else {
        toast.error(res.data.message || "Failed to add menu");
      }
    } catch (error) {
      toast.error("Server Error! Unable to add menu.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add New Menu Item</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Enter dish name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            rows="3"
            placeholder="Enter dish description"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Category</label>
          <select
            name="category"
            value={data.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500 outline-none"
          >
            <option value="">All</option>
            <option value="Spaghetti">Spaghetti</option>
            <option value="Pizza">Pizza</option>
            <option value="Rice">Rice</option>
            <option value="Noodles">Noodles</option>
            <option value="Chicken">Chicken</option>
            <option value="Drinks">Drinks</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Price (NPR)</label>
          <input
            type="number"
            name="price"
            value={data.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Upload Image</label>
          <input
            type="file"
            accept="../assets/upload.jpg"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border border-gray-300 rounded-md p-2 cursor-pointer"
          />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-md mt-3 border"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md font-semibold transition"
        >
          {loading ? "Adding..." : "Add Menu"}
        </button>
      </form>
    </div>
  );
};

export default AddMenu;
