"use client";
import { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Pelanggan = {
  id: number;
  nama: string;
  email: string;
  nomor_telepon: string;
  alamat: string;
};

const API_URL = "http://127.0.0.1:8000/api";
const EditPelanggan = (pelanggan: Pelanggan) => {
  const [modal, setModal] = useState(false);
  const [nama, setNama] = useState(pelanggan.nama);
  const [email, setEmail] = useState(pelanggan.email);
  const [nomor_telepon, setNomorTelepon] = useState(pelanggan.nomor_telepon);
  const [alamat, setAlamat] = useState(pelanggan.alamat);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/pelanggan/${pelanggan.id}`;
    const data = {
      nama: nama,
      email: email,
      nomor_telepon: nomor_telepon,
      alamat: alamat,
    };
    await axios.patch(endpoint, data);

    // setNama("");
    // setEmail("");
    // setNomorTelepon("");
    // setAlamat("");
    // setIsMutating(false);
    // router.refresh();
    // setModal(false);
    try {
      await axios.patch(endpoint, data);
      setIsMutating(false);
      router.refresh();
      setModal(false);
    } catch (error) {
      // Tambahkan penanganan pesan kesalahan jika diperlukan
      setIsMutating(false);
      console.error("Error updating data:", error);
    }
  };
  return (
    <div>
      <button className="btn btn-info btn-sm" onClick={handleChange}>
        Edit
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg"> Edit {pelanggan.nama}</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Nama</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nama"
              />
              <label className="label font-bold">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Email"
              />
              <label className="label font-bold">No Telepon</label>
              <input
                type="text"
                value={nomor_telepon}
                onChange={(e) => setNomorTelepon(e.target.value)}
                className="input w-full input-bordered"
                placeholder="No Telepon"
              />
              <label className="label font-bold">Alamat</label>
              <input
                type="text"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Alamat"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Updating...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditPelanggan;
