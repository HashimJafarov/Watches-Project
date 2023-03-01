import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Blogbg from "../components/Blogbg";
function Blog({ blog }) {
  console.log(blog);
  return (
    <>
      <Blogbg />
      {blog.length ? (
        <section className="blog">
          <div className="container">
            <div className="blog_wrapper">
              {blog.map((a) => (
                <div className="blog_product" key={a.id}>
                  <div className="blog_img">
                    <img src={a.head_img} alt="" />
                  </div>
                  <div className="blog_title">
                    <p>{a.about.toUpperCase()}</p>
                    <p>{a.title}</p>
                    <p>{a.part_one.slice(0, 100)}... </p>
                    <Link to={`/blog/${a.id}`}>
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="loading">
          <div className="load">
            <div className="circle_one">
              <div className="circle_two"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
const t = (a) => a;
export default connect(t)(Blog);
