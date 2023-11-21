"use client";
import { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api";
const AddJenis = () => {
  const [modal, setModal] = useState(false);
  const [kategori_id, setKategori_id] = useState("");
  const [nama_jenis, setNamaJenis] = useState("");
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    let endpoint = `${API_URL}/jenis`;
    const data = { kategori_id: kategori_id, nama_jenis: nama_jenis };
    await axios.post(endpoint, data);
    setKategori_id("");
    setNamaJenis("");
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
          <h3 className="font-bold text-lg"> Add New Jenis</h3>
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
              <label className="label font-bold">Nama Jenis</label>
              <input
                type="text"
                value={nama_jenis}
                onChange={(e) => setNamaJenis(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nama Jenis"
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
export default AddJenis;
