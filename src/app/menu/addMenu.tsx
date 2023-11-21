"use client";
import { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api";
const AddMenu = () => {
  const [modal, setModal] = useState(false);
  const [jenis_id, setJenis_id] = useState("");
  const [nama_menu, setNamaMenu] = useState("");
  const [harga, setHarga] = useState("");
  const [image, setImage] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    let endpoint = `${API_URL}/menu`;
    const data = { jenis_id:jenis_id , nama_menu:nama_menu, harga:harga, image:image, deskripsi:deskripsi};
    await axios.post(endpoint, data);
    setJenis_id("");
    setNamaMenu("");
    setHarga("");
    setImage("");
    setDeskripsi("");
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
          <h3 className="font-bold text-lg"> Add New Menu</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">Kategori ID</label>
              <input
                type="text"
                value={jenis_id}
                onChange={(e) => setJenis_id(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Kategori ID"
              />
              <label className="label font-bold">Nama Menu</label>
              <input
                type="text"
                value={nama_menu}
                onChange={(e) => setNamaMenu(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nama Menu"
              />
              <label className="label font-bold">Harga</label>
              <input
                type="text"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Harga"
              />
              <label className="label font-bold">Image</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Image"
              />
              <label className="label font-bold">deskripsi</label>
              <input
                type="text"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Deskripsi"
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
export default AddMenu;