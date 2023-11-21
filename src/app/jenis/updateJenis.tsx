"use client";
import { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Jenis = {
  id: number;
  kategori_id: string;
  nama_jenis: string;
};

const API_URL = "http://127.0.0.1:8000/api";
const EditJenis = (jenis: Jenis) => {
  const [modal, setModal] = useState(false);
  const [kategori_id, setKategori_id] = useState(jenis.kategori_id);
  const [nama_jenis, setNamaJenis] = useState(jenis.nama_jenis);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/jenis/${jenis.id}`;
    const data = { kategori_id: kategori_id, nama_jenis: nama_jenis };
    await axios.patch(endpoint, data);

    // setKategori_id("");
    // setNamaJenis("");
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
      console.error('Error updating data:', error);
    }try {
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
          <h3 className="font-bold text-lg"> Edit {jenis.nama_jenis}</h3>
          <form onSubmit={handleUpdate}>
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
export default EditJenis;
