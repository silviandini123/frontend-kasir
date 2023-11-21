import React from "react";
const PelangganDetail = ({ params }: { params: { jenisId: string } }) => {
  return <div>Jenis {params.jenisId[1]}</div>;
};

export default PelangganDetail;
