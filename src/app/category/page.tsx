export const metadata = {
  title: "Category",
};

import AddCategory from "./addCategory";
import DeleteCategory from "./deleteCategory";
import UpdateCategory from "./updateCategory";
import axios from "axios";
import Link from "next/link";
import React from "react";

type Category = {
  id: number;
  name: string;
};
const getCategory = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/category");
  return res.data.data;
};
const CategoryList = async () => {
  const category: Category[] = await getCategory();
  return (
    <>
      <div className="py-10 px-10">
        <div className="py-2"></div>
        Category List
        <div className="py-2">
          <AddCategory />
        </div>
        <table className="table table-zebra">
          <thead>
            <tr className="bg-base-200">
              <th>No.</th>
              <th> Nama Kategori</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {category &&
              category.map((category, index) => (
                <tr key={category.id}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                  <td className="flex">
                    <div className="mr-1">
                      <UpdateCategory {...category} />
                    </div>
                    <DeleteCategory {...category} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default CategoryList;
