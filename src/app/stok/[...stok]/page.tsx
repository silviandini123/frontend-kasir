import React from "react";
const StokDetail = ({ params }: { params: { stokId: string } }) => {
  return <div>Stok {params.stokId[1]}</div>;
};

export default StokDetail;
