export const metadata = {
  title: "Pelanggan",
};
import axios from "axios";
import Link from "next/link";
import AddPelanggan from "./addPelanggan";
import DeletePelanggan from "./deletePelanggan";
import UpdatePelanggan from "./updatePelanggan";

type Pelanggan = {
  id: number;
  nama: string;
  email: string;
  nomor_telepon: string;
  alamat: string;
};
const getPelanggan = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/pelanggan");

  return res.data.data;
};
const pelangganList = async () => {
  const pelanggan: Pelanggan[] = await getPelanggan();
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddPelanggan />
      </div>
      <table className="table table-zebra">
        <thead>
          <tr className="bg-base-200">
            <th>No.</th>
            <th>Nama</th>
            <th>email</th>
            <th>Nomor Telepon</th>
            <th>Alamat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pelanggan &&
            pelanggan.map &&
            pelanggan.map((pelanggan, index) => (
              <tr key={pelanggan.id}>
                <td>{index + 1}</td>
                <td>{pelanggan.nama}</td>
                <td>{pelanggan.email}</td>
                <td>{pelanggan.nomor_telepon}</td>
                <td>{pelanggan.alamat}</td>
                <td className="flex">
                  <div className="mr-1">
                    <UpdatePelanggan {...pelanggan} />
                  </div>
                  <DeletePelanggan {...pelanggan} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default pelangganList;
