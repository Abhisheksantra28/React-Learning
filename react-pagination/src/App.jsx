import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total / 10);
    }
  };

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage != page
    ) {
      setPage(selectedPage);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div className="w-full h-screen bg-zinc-900 text-white p-20 flex flex-col items-center justify-center">
      {products.length > 0 && (
        <div className="products grid grid-cols-5 gap-10 m-4">
          {products.map((item, index) => (
            <span
              className={`single-products p-6 h-[18vw] text-center border-2 border-zinc-700 cursor-pointer  rounded-xl bg-zinc-300/10 `}
              key={index}
            >
              <img
                className="w-full h-[85%] aspect-auto object-cover"
                src={item.thumbnail}
                alt={item.title}
              />
              <h1 className="text-center mt-1">{item.title}</h1>
            </span>
          ))}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination p-2 flex justify-center ">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={`cursor-pointer px-3 ${page > 1 ? "" : "opacity-0"}`}
          >
            ◀
          </span>
          {[...Array(totalPages)].map((_, index) => {
            return (
              <span
                onClick={() => selectPageHandler(index + 1)}
                className={`px-3 cursor-pointer ${
                  page === index + 1 ? "bg-zinc-600 rounded-lg" : ""
                } `}
                key={index}
              >
                {index + 1}
              </span>
            );
          })}
          <span
            onClick={() => selectPageHandler(page + 1)}
            className={`cursor-pointer px-3 ${
              page === totalPages ? "opacity-0" : ""
            }`}
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
