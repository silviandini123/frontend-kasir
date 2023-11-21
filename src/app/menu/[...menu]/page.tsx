import React from "react";
const MenuDetail = ({ params }: { params: { jenisId: string } }) => {
  return <div>Jenis {params.jenisId[1]}</div>;
};

export default MenuDetail;
