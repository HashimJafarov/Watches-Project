import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
function Add({ lang }) {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const token = localStorage.getItem("token");
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/control/companies`, {
      method: "GET",
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((a) => a.json())
      .then((a) => setCompanies(a));
  }, []);
  const [watch, setWatch] = useState({
    company_id: "",
    category_id: "1",
    functionality_id: "1",
    movement_id: "1",
    title: "",
    model: "model",
    case_material: "case_material",
    dial_diameter: "dial_diameter",
    dial_material: "dial_material",
    color: "color",
    diameter: "diameter",
    shape: "shape",
    price: "444",
    dial: "dial",
    description: "description",
    quality: "quality",
    featured: 1,
    delivery: "delivery",
    rate: 5,
    images: [],
  });
  const handleInput = (e) => {
    setWatch({ ...watch, [e.target.name]: e.target.value });
  };
  const handleFile = (e) => {
    setWatch({ ...watch, [e.target.name]: e.target.files });
  };
  const save = (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    for (const key in watch) {
      if (Array.isArray(watch[key]) || key === "images") {
        [...watch[key]].forEach((item, index) => {
          formData.append(`${key}[${index}]`, item);
        });
        continue;
      }
      formData.append(key, watch[key]);
    }
    fetch(`http://127.0.0.1:8000/api/control/watches`, {
      method: "POST",
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ${token}`,
        "Accept-Language": lang,
      },
      body: formData,
    })
      .then((a) => {
        setLoading(false);
        if (a.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Yaradıldı",
            showConfirmButton: false,
            timer: 1000,
          }).then(() => {
            nav("/control/watches");
          });
        }
        return a.json();
      })
      .then((a) => {
        if (a.errors) {
          const errorsAsString = Object.values(a.errors)
            .map((a) => `<p class="error__text">${a[0]}</p>`)
            .toString()
            .replace(/,/g, "");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            html: errorsAsString,
          });
        }
        if (a.message === "Unauthenticated.") {
          window.localStorage.removeItem("token");
          nav("/control/login");
        }
      });
  };
  return (
    <>
      <h4 className="fw-bold py-3 mb-4">Yeni Saat yaradılması</h4>
      {loading ? (
        <div className="spinner-border text-primary" role="status"></div>
      ) : (
        <div className="row">
          <div className="col-xl">
            <div className="card mb-4">
              <div className="card-body">
                <form onSubmit={save}>
                  <div className="row">
                    <div className="mb-3 col-md-4">
                      <label
                        className="form-label"
                        htmlFor="basic-default-fullname"
                      >
                        Ad
                      </label>
                      <input
                        onChange={handleInput}
                        value={watch.title}
                        name="title"
                        type="text"
                        className="form-control"
                        id="basic-default-fullname"
                        placeholder="Title"
                      />
                    </div>
                    <div className="mb-3 col-md-8">
                      <label
                        className="form-label"
                        htmlFor="basic-default-fullname"
                      >
                        Company
                      </label>
                      <select
                        onChange={handleInput}
                        name="company_id"
                        className="form-control"
                        value={watch.company_id}
                      >
                        <option value="">Seçin</option>
                        {companies.map((a) => (
                          <option key={a.id} value={a.id}>
                            {a.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mb-3 col-md-12">
                    <label
                      className="form-label"
                      htmlFor="basic-default-fullname"
                    >
                      Şəkil
                      <span className="required">*</span>
                    </label>
                    <input
                      onChange={handleFile}
                      name="images"
                      type="file"
                      className="form-control"
                      id="basic-default-fullname"
                      placeholder=""
                      multiple={true}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success d-block ms-auto"
                  >
                    Əlavə et
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
const t = (a) => {
  return {
    lang: a.lang,
  };
};
export default connect(t)(Add);
