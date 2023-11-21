"use client";
import { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Meja = {
  id: number;
  nomor_meja: string;
  kapasitas: string;
  status: string;
};

const API_URL = "http://127.0.0.1:8000/api";
const DeleteMeja = (meja: Meja) => {
  const [modal, setModal] = useState(false);
  const [nomor_meja, setNomorMeja] = useState("");
  const [kapasitas, setKapasitas] = useState("");
  const [status, setStatus] = useState("");
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleDelete = async (mejaId: Number) => {
    setIsMutating(true);
    let params = { id: mejaId };
    let endpoint = `${API_URL}/meja/${mejaId}`;
    const data = {
      nomor_meja: nomor_meja,
      kapasitas: kapasitas,
      status: status,
    };
    await axios.delete(endpoint);

    setIsMutating(false);
    router.refresh();
    setModal(false);
  };
  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={handleChange}>
        Delete
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {" "}
            Yakin Mau Hapus Nomor Meja {meja.nomor_meja}?
          </h3>
          <div className="modal-action">
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>
            {!isMutating ? (
              <button
                type="button"
                onClick={() => handleDelete(meja.id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            ) : (
              <button type="button" className="btn loading">
                Deleting...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteMeja;
