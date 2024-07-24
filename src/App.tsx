import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Cats from "./Cats";
import { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Wrap>
                <Cats />
              </Wrap>
            }
          />
          <Route
            path="/detail/:idx"
            element={
              <Wrap>
                <Detail />
              </Wrap>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const Wrap = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState(0);

  const getTitle = (page: number) => {
    if (page === 0) return "기본";
    if (page === 1) return "오른쪽";
    if (page === 2) return "아래";
    return page;
  };

  return (
    <div className={`cats-${page}`}>
      <h1>{getTitle(page)}</h1>
      <button onClick={() => setPage((page + 1) % 5)}>Next</button>
      {children}
    </div>
  );
};

export default App;
