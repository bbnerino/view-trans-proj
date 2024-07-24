import { useState } from "react";
import { Cat, data } from "./data";
import { useNavigate } from "react-router-dom";
import { updateView } from "./updateView";

const Cats = () => {
  const [list, setList] = useState<Cat[]>(data);
  const [selected, setSelected] = useState(false);

  const navigate = useNavigate();
  const onClick = (idx: number) => {
    setSelected(true);
    updateView(() => navigate(`/detail/${idx}`));
  };

  return (
    <div>
      <div className="cats">
        {list.map((cat) => (
          <div className="card" key={cat.idx} onClick={() => onClick(cat.idx)}>
            <img
              className={selected ? "full-embed" : ""}
              src={cat.img}
              alt={cat.name}
            />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cats;
