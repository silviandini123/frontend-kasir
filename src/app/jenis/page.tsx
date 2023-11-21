export const metadata = {
  title: "Jenis",
};
import AddJenis from "./addJenis";
import EditJenis from "./updateJenis";
import DeleteJenis from "./deleteJenis";
import axios from "axios";
import Link from "next/link";
import React from "react";

type Jenis = {
  id: number;
  kategori_id: string;
  nama_jenis: string;
};

const getJenis = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/jenis");
  return res.data.data;
};
const JenisList = async () => {
  const jenis: Jenis[] = await getJenis();
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddJenis />
      </div>
      <table className="table table-zebra">
        <thead>
          <tr className="bg-base-200">
            <th>No.</th>
            <th>Kategori ID</th>
            <th>Nama Jenis</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jenis.map((jenis, index) => (
            <tr key={jenis.id}>
              <td>{index + 1}</td>
              <td>{jenis.kategori_id}</td>
              <td>{jenis.nama_jenis}</td>
              <td className="flex">
                <div className="mr-1">
                  <EditJenis {...jenis} />
                </div>
                <DeleteJenis {...jenis} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default JenisList;
