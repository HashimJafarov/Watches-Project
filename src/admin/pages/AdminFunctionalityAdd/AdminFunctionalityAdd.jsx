import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
function AdminFunctionalityAdd() {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const token = localStorage.getItem("token");
  const [functionality, setFunctionality] = useState({
    name: "",
    images: "",
  });
  const API_FUNCTIONALITY = `http://127.0.0.1:8000/api/control/functionalities`;
  const handleInput = (e) => {
    if (e.target.name === "image") {
      setFunctionality({ ...functionality, image: e.target.files[0] });
    } else {
      setFunctionality({ ...functionality, [e.target.name]: e.target.value });
    }
  };
  const save = (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch(`${API_FUNCTIONALITY}`, {
      method: "POST",
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((a) => {
        setLoading(false);
        if (a.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Functionality Created",
            showConfirmButton: false,
            timer: 1000,
          }).then(() => {
            nav("/control/functionality");
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
      <h4 className="fw-bold py-3 mb-4">Adding New Functionality</h4>
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
                        value={functionality.name}
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
                    Add Functionality
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
export default connect()(AdminFunctionalityAdd);
