import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [loading, setLoading] = useState(true);
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/control/watches`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then((a) => a.json())
      .then((a) => {
        setWatches(a);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h4>
        Saatlar
        <Link to="add" className="btn btn-success ms-2">
          Yeni saat əlavə et
        </Link>
      </h4>
      <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
        {loading ? (
          <div className="spinner-border text-primary" role="status"></div>
        ) : watches.length ? (
          watches.map((a) => (
            <div className="col" key={a.id}>
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={a.images[0]?.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{a.title}</h5>
                  <p style={{ height: 100 }} className="card-text"></p>
                  <Link to="#" className="btn btn-primary">
                    Ətraflı
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>Saat Tapılmadı...</h1>
        )}
      </div>
    </>
  );
}

export default Home;
