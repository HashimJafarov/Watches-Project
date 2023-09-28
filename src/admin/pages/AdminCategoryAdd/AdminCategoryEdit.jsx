import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function AdminCategoryEdit() {
  const { id } = useParams();
  const nav = useNavigate();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState({
    name: "",
    images: "",
  });
  const API_CATEGORY = `http://127.0.0.1:8000/api/control/categories`;
  useEffect(() => {
    fetch(`${API_CATEGORY}/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then((a) => a.json())
      .then((a) => {
        setCategory(a);
        setLoading(false);
      });
  }, []);
  const handleInput = (e) => {
    if (e.target.name === "image") {
      setCategory({ ...category, image: e.target.files[0] });
    } else {
      setCategory({ ...category, [e.target.name]: e.target.value });
    }
  };
  console.log(category);
  const save = (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch(`${API_CATEGORY}/${id}`, {
      method: "POST",
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ${token}`,
        // "Accept-Language": lang,
      },
      body: formData,
    })
      .then((a) => {
        console.log(a);
        setLoading(false);
        if (a.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Category Updated",
            showConfirmButton: false,
            timer: 1000,
          }).then(() => {
            nav("/control/category");
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
      <h4 className="fw-bold py-3 mb-4">Edit Category</h4>
      {loading ? (
        <div className="spinner-border text-primary" role="status"></div>
      ) : (
        <div className="row">
          <div className="col-xl">
            <div className="card mb-4">
              <div className="card-body">
                <form onSubmit={save}>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label
                        className="form-label"
                        htmlFor="basic-default-fullname"
                      >
                        Name
                      </label>
                      <input
                        onChange={handleInput}
                        value={category.name}
                        name="name"
                        type="text"
                        className="form-control"
                        id="basic-default-fullname"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label
                        className="form-label"
                        htmlFor="basic-default-fullname"
                      >
                        Image
                      </label>
                      <input
                        onChange={handleInput}
                        name="image"
                        type="file"
                        className="form-control"
                        id="basic-default-fullname"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success d-block ms-auto"
                  >
                    Update Category
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

export default AdminCategoryEdit;
