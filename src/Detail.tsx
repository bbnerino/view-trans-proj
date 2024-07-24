import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Cat, data } from "./data";
import { updateView } from "./updateView";

const Detail = () => {
  const params = useParams();
  const idx = params.idx;

  const [cat, setCat] = useState<Cat>();

  useEffect(() => {
    const _cat = data.find((cat) => cat.idx === Number(idx));
    if (_cat) setCat(_cat);
  }, []);

  const navigate = useNavigate();

  const goback = () => {
    updateView(() => navigate("/"));
  };

  return (
    <div className="detail">
      <h1>Detail</h1>
      {cat && (
        <>
          <p>idx: {cat.idx}</p>
          <p>name: {cat.name}</p>
          <img className="full-embed" src={cat.img} alt={cat.name} />
        </>
      )}
      <div>
        <button onClick={goback}>메인으로</button>
      </div>
    </div>
  );
};

export default Detail;
