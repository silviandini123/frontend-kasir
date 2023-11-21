import React from "react";
import Link from "next/Link";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/category">Category</Link>
        </li>
        <li>
          <Link href="/jenis">Jenis</Link>
        </li>
        <li>
          <Link href="/menu">Menu</Link>
        </li>
        <li>
          <Link href="/pelanggan">Pelanggan</Link>
        </li>
        <li>
          <Link href="/stok">Stok</Link>
        </li>
        <li>
          <Link href="/meja">Meja</Link>
        </li>
        <li className="mr-5">
          <Link href="/pemesanan">Pemesanan</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default MainLayout;
// rafce
