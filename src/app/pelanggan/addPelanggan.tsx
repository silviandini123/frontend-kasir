"use client";
import { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api";
const AddPelanggan = () => {
  const [modal, setModal] = useState(false);
  const [kategori_id, setKategori_id] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nomor_telepon, setNomorTelepon] = useState("");
  const [alamat, setAlamat] = useState("");
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    let endpoint = `${API_URL}/pelanggan`;
    const data = {

      nama: nama,
      email: email,
      nomor_telepon: nomor_telepon,
      alamat: alamat,
    };
    await axios.post(endpoint, data);
    setKategori_id("");
    setNama("");
    setEmail("");
    setNomorTelepon("");
    setAlamat("");
    router.refresh();
    setModal(false);
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={handleChange}>
        Add New
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg"> Add New Pelanggan</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">Kategori ID</label>
              <input
                type="text"
                value={kategori_id}
                onChange={(e) => setKategori_id(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Kategori ID"
              />
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
              <label className="label font-bold">Nomor Telepon</label>
              <input
                type="text"
                value={nomor_telepon}
                onChange={(e) => setNomorTelepon(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nomor Telepopn"
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
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button type="button" className="btn loading">
                Saving...
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddPelanggan;