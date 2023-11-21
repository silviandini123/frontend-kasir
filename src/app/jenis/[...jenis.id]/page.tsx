import React from "react";
const JenisDetail = ({ params }: { params: { jenisId: string } }) => {
  return <div>Jenis {params.jenisId[1]}</div>;
};

export default JenisDetail;