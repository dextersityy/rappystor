"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/db";
import { Product, User } from "@/lib/types";
import withAdminAuth from "@/components/withAdminAuth";

const AdminPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Product["category"]>("streaming");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [newSaldo, setNewSaldo] = useState("");
  const [newRole, setNewRole] = useState<User["role"]>("member");

  useEffect(() => {
    const fetchData = async () => {
      const prods = await db.getProducts();
      const usrs = await db.getUsers();
      setProducts(prods);
      setUsers(usrs);
    };
    fetchData();
  }, []);

  const handleAddProduct = async () => {
    const newProduct = await db.addProduct({
      name,
      price: parseFloat(price),
      description,
      category,
    });
    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setDescription("");
  };

  const handleUpdateUser = async () => {
    if (selectedUser) {
      await db.updateUser(selectedUser.uid, {
        saldo: parseFloat(newSaldo),
        role: newRole,
      });
      const updatedUsers = await db.getUsers();
      setUsers(updatedUsers);
      setSelectedUser(null);
      setNewSaldo("");
    }
  };

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Add Product</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-[#282d39] rounded-md"
            />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 bg-[#282d39] rounded-md"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 bg-[#282d39] rounded-md"
            />
            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value as Product["category"])
              }
              className="w-full px-4 py-2 bg-[#282d39] rounded-md"
            >
              <option value="streaming">Streaming</option>
              <option value="music">Music</option>
              <option value="editing">Editing</option>
              <option value="AI">AI</option>
              <option value="tools">Tools</option>
            </select>
            <button
              onClick={handleAddProduct}
              className="w-full py-2 text-white bg-primary rounded-md"
            >
              Add Product
            </button>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Users</h2>
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.uid}
                className="p-4 bg-[#1a202e] rounded-md cursor-pointer"
                onClick={() => {
                  setSelectedUser(user);
                  setNewSaldo(user.saldo.toString());
                  setNewRole(user.role);
                }}
              >
                <h3 className="text-xl font-bold">{user.email}</h3>
                <p>Role: {user.role}</p>
                <p>Saldo: ${user.saldo.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="p-8 space-y-4 bg-[#1a202e] rounded-xl">
            <h2 className="text-2xl">Edit {selectedUser.email}</h2>
            <input
              type="number"
              value={newSaldo}
              onChange={(e) => setNewSaldo(e.target.value)}
              className="w-full px-4 py-2 bg-[#282d39] rounded-md"
            />
            <select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value as User["role"])}
              className="w-full px-4 py-2 bg-[#282d39] rounded-md"
            >
              <option value="member">Member</option>
              <option value="reseller">Reseller</option>
              <option value="admin">Admin</option>
            </select>
            <button
              onClick={handleUpdateUser}
              className="w-full py-2 text-white bg-primary rounded-md"
            >
              Update
            </button>
            <button
              onClick={() => setSelectedUser(null)}
              className="w-full py-2 mt-2 text-white bg-gray-600 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default withAdminAuth(AdminPage);
