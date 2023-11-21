"use client";
import { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Menu = {
  id: number;
  kategori_id: string;
  nama_Menu: string;
  harga: string;
  image: string;
  deskripsi: string;
};

const API_URL = "http://127.0.0.1:8000/api";
const DeleteMenu = (menu: Menu) => {
  const [modal, setModal] = useState(false);
  const [kategori_id, setKategori_id] = useState("");
  const [nama_Menu, setNamaMenu] = useState("");
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleDelete = async (MenuId: Number) => {
    setIsMutating(true);
    let params = { id: MenuId };
    let endpoint = `${API_URL}/menu/${MenuId}`;
    const data = { kategori_id: kategori_id,nama_Menu:nama_Menu };
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
            Yakin Mau Hapus {menu.nama_Menu}?
          </h3>
          <div className="modal-action">
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>
            {!isMutating ? (
              <button
                type="button"
                onClick={() => handleDelete(menu.id)}
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
export default DeleteMenu;