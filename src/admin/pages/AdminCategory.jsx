import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function AdminCategory() {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const API_CATEGORY = `http://127.0.0.1:8000/api/control/categories`
  useEffect(() => {
    fetch(`${API_CATEGORY}`, {
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
  const deleteCategory = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        fetch(`${API_CATEGORY}/${id}`, {
          method: "DELETE",
          headers: {
            Accept: "Application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
          .then((a) => {
            setLoading(false);
            if (a.status === 201) {
              Swal.fire({
                icon: "success",
                title: "Category Deleted",
                showConfirmButton: false,
                timer: 1000,
              }).then(() => {
                window.location.reload();
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
      }
    });
  };
  return (
    <>
      <h4>
        Category
        <Link to="add" className="btn btn-success ms-2">
          Add New Category
        </Link>
      </h4>
      {loading ? (
        <div className="spinner-border text-primary" role="status"></div>
      ) : category.length ? (
        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Background Image</td>
              <td>Operations</td>
            </tr>
          </thead>
          <tbody>
            {category.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>
                  <img
                    src={a.image}
                    alt=""
                    style={{
                      width: "150px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>
                  <Link to={`edit/${a.id}`} className="btn btn-warning ">
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteCategory(a.id)}
                    className="btn btn-danger ms-3 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>No Category Found...</h1>
      )}
    </>
  );
}

export default AdminCategory;
