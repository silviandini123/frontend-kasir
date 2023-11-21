import React from "react";
const MejaDetail = ({ params }: { params: { mejaId: string } }) => {
  return <div>Jenis {params.mejaId[1]}</div>;
};

export default MejaDetail;
