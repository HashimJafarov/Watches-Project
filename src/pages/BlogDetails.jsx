import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Blogbg from "../components/Blogbg";
function BlogDetails({ blog }) {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:1225/blog/${id}`)
      .then((a) => a.json())
      .then((a) => {
        setBlogDetail(a);
        setLoading(false);
      });
  }, []);
  const updatePage = (id) => {
    useEffect(() => {
      fetch(`http://localhost:1225/blog/${id}`)
        .then((a) => a.json())
        .then((a) => {
          setBlogDetail(a);
          setLoading(false);
        });
    }, []);
  };
  const filteredBlog = blog.filter((a) => a.id !== +id);
  return (
    <>
      <Blogbg />
      {!loading ? (
        <section className="blog_detail">
          <div className="container">
            <p>{blogDetail.about}</p>
            <p>{blogDetail.title}</p>
            <div className="blog_detail_img">
              <img src={blogDetail.head_img} alt="" />
            </div>
            <div className="blog_detail_wrapper">
              <div className="blog_detail_text">
                {blogDetail.part_one ? <p>{blogDetail.part_one}</p> : null}
                {blogDetail.part_one_img ? (
                  <div className="blog_detail_text_img">
                    <img src={blogDetail.part_one_img} alt="" />
                  </div>
                ) : null}
                {blogDetail.part_two ? <p>{blogDetail.part_two}</p> : null}
                {blogDetail.part_two_img ? (
                  <div className="blog_detail_text_img">
                    <img src={blogDetail.part_two_img} alt="" />
                  </div>
                ) : null}
                {blogDetail.part_ol ? (
                  <ol>
                    {blogDetail.part_ol.map((a) => (
                      <li key={a.id}>{a.title}</li>
                    ))}
                  </ol>
                ) : null}
                {blogDetail.part_three ? <p>{blogDetail.part_three}</p> : null}
                {blogDetail.part_three_img ? (
                  <div className="blog_detail_text_img">
                    <img src={blogDetail.part_three_img} alt="" />
                  </div>
                ) : null}
                {blogDetail.part_four ? <p>{blogDetail.part_four}</p> : null}
                {blogDetail.part_four_img ? (
                  <div className="blog_detail_text_img">
                    <img src={blogDetail.part_four_img} alt="" />
                  </div>
                ) : null}
                {blogDetail.part_five ? <p>{blogDetail.part_five}</p> : null}
                {blogDetail.part_five_img ? (
                  <div className="blog_detail_text_img">
                    <img src={blogDetail.part_five_img} alt="" />
                  </div>
                ) : null}
                {blogDetail.part_six ? <p>{blogDetail.part_six}</p> : null}
                {blogDetail.part_six_img ? (
                  <div className="blog_detail_text_img">
                    <img src={blogDetail.part_six_img} alt="" />
                  </div>
                ) : null}
                {blogDetail.part_seven ? <p>{blogDetail.part_seven}</p> : null}
                {blogDetail.part_seven_img ? (
                  <div className="blog_detail_text_img">
                    <img src={blogDetail.part_seven_img} alt="" />
                  </div>
                ) : null}
                {blogDetail.part_eight ? <p>{blogDetail.part_eight}</p> : null}
                {blogDetail.part_eight_img ? (
                  <div className="blog_detail_text_img">
                    <img src={blogDetail.part_eight_img} alt="" />
                  </div>
                ) : null}
                {blogDetail.part_nine ? <p>{blogDetail.part_nine}</p> : null}
                {blogDetail.part_nine_img ? (
                  <div className="blog_detail_text_img">
                    <img src={blogDetail.part_nine_img} alt="" />
                  </div>
                ) : null}
                {blogDetail.part_ten ? <p>{blogDetail.part_ten}</p> : null}
                {blogDetail.part_ten_img ? (
                  <div className="blog_detail_text_img">
                    <img src={blogDetail.part_ten_img} alt="" />
                  </div>
                ) : null}
                {blogDetail.part_eleven ? (
                  <p>{blogDetail.part_eleven}</p>
                ) : null}
                {blogDetail.part_eleven_img ? (
                  <div className="blog_detail_text_img">
                    <img src={blogDetail.part_eleven_img} alt="" />
                  </div>
                ) : null}
              </div>
              <div className="blog_recent">
                {filteredBlog.map((a) => (
                  <Link
                    onClick={() => updatePage(a.id)}
                    to={`/blog/${a.id}`}
                    key={a.id}
                    className="blog_recent_product"
                  >
                    <div className="blog_recent_img">
                      <img src={a.head_img} alt="" />
                    </div>
                    <div className="blog_recent_title">
                      <p>{a.about}</p>
                      <p>{a.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
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
export default connect(t)(BlogDetails);
