import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
function Customers({ subcustomers }) {
  const [customerDetail, setCustomerDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { name, id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:1225/customers/${id}`)
      .then((a) => a.json())
      .then((a) => {
        setCustomerDetail(a);
        setLoading(false);
      });
  }, []);

  const filteredCustomers = subcustomers.filter((a) => a.customer_id === +id);
  console.log(filteredCustomers);
  const questions = filteredCustomers.filter((a) => a.question);
  const returns = filteredCustomers.filter((a) => a.return);
  const shipping = filteredCustomers.filter((a) => a.shipping);
  const damaged = filteredCustomers.filter((a) => a.damaged);
  const cancelling = filteredCustomers.filter((a) => a.cancelling);
  console.log(cancelling);
  return (
    <>
      {!loading ? (
        <section className="customers">
          <div className="container">
            <div className="customers_wrapper">
              <h1>{customerDetail.name}</h1>
              <div className="customers_questions">
                {questions.length ? (
                  <ul>
                    {filteredCustomers.map((sub) => {
                      return (
                        <li key={sub.id}>
                          {sub.question ? <p>{sub.question}</p> : null}
                          {sub.answer ? <p>{sub.answer}</p> : null}
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
                {returns.length
                  ? filteredCustomers.map((sub) => {
                      return (
                        <div className="customers_returns" key={sub.id}>
                          {sub.return ? <p>{sub.return}</p> : null}
                          {sub.part_one ? <p>{sub.part_one}</p> : null}
                          {sub.part_two ? (
                            <ul>
                              {sub.part_two.map((a) => (
                                <li key={a.id}>{a.text}</li>
                              ))}{" "}
                            </ul>
                          ) : null}
                          {sub.part_three ? <p>{sub.part_three}</p> : null}
                          {sub.part_four ? <p>{sub.part_four}</p> : null}
                          {sub.part_five ? <p>{sub.part_five}</p> : null}
                          {sub.part_six ? <p>{sub.part_six}</p> : null}
                          {sub.part_seven ? (
                            <ul>
                              {sub.part_seven.map((a) => (
                                <li key={a.id}>{a.text}</li>
                              ))}
                            </ul>
                          ) : null}
                          {sub.part_eight ? <p>{sub.part_eight}</p> : null}
                          {sub.part_nine ? <p>{sub.part_nine}</p> : null}
                          {sub.part_ten ? <p>{sub.part_ten}</p> : null}
                          {sub.part_eleven ? <p>{sub.part_eleven}</p> : null}
                          {sub.part_twelve ? <p>{sub.part_twelve}</p> : null}
                          {sub.part_thirteen ? (
                            <ul>
                              {sub.part_thirteen.map((a) => (
                                <li key={a.id}>{a.text}</li>
                              ))}
                            </ul>
                          ) : null}
                          {sub.part_fouteen ? <p>{sub.part_fouteen}</p> : null}
                        </div>
                      );
                    })
                  : null}
                {shipping.length
                  ? filteredCustomers.map((sub) => {
                      return (
                        <div className="customers_shipping" key={sub.id}>
                          {sub.shipping ? <p>{sub.shipping}</p> : null}
                          {sub.shipping_one ? <p>{sub.shipping_one}</p> : null}
                          {sub.shipping_two ? <p>{sub.shipping_two}</p> : null}
                          {sub.shipping_three ? (
                            <p>{sub.shipping_three}</p>
                          ) : null}
                          {sub.shipping_four ? (
                            <ul>
                              {sub.shipping_four.map((a) => (
                                <li key={a.id}>{a.text}</li>
                              ))}
                            </ul>
                          ) : null}
                          {sub.shipping_five ? (
                            <p>{sub.shipping_five}</p>
                          ) : null}
                          {sub.shipping_six ? <p>{sub.shipping_six}</p> : null}
                          {sub.shipping_seven ? (
                            <p>{sub.shipping_seven}</p>
                          ) : null}
                          {sub.shipping_eight ? (
                            <p>{sub.shipping_eight}</p>
                          ) : null}
                          {sub.shipping_nine ? (
                            <p>{sub.shipping_nine}</p>
                          ) : null}
                          {sub.shipping_ten ? <p>{sub.shipping_ten}</p> : null}
                          {sub.shipping_eleven ? (
                            <p>{sub.shipping_eleven}</p>
                          ) : null}
                          {sub.shipping_twelve ? (
                            <p>{sub.shipping_twelve}</p>
                          ) : null}
                          {sub.shipping_thirteen ? (
                            <p>{sub.shipping_thirteen}</p>
                          ) : null}
                          {sub.shipping_fouteen ? (
                            <p>{sub.shipping_fouteen}</p>
                          ) : null}
                          {sub.shipping_fifteen ? (
                            <p>{sub.shipping_fifteen}</p>
                          ) : null}
                          {sub.shipping_sixteen ? (
                            <p>{sub.shipping_sixteen}</p>
                          ) : null}
                          {sub.shipping_seventeen ? (
                            <p>{sub.shipping_seventeen}</p>
                          ) : null}
                          {sub.shipping_eigthteen ? (
                            <p>{sub.shipping_eigthteen}</p>
                          ) : null}
                          {sub.shipping_nineteen ? (
                            <p>{sub.shipping_nineteen}</p>
                          ) : null}
                        </div>
                      );
                    })
                  : null}
                {damaged.length
                  ? filteredCustomers.map((sub) => {
                      return (
                        <div className="customers_damaged" key={sub.id}>
                          {sub.damaged ? <p>{sub.damaged}</p> : null}
                          {sub.damaged_one ? (
                            <ul>
                              {sub.damaged_one.map((a) => (
                                <li key={a.id}>{a.text}</li>
                              ))}
                            </ul>
                          ) : null}
                          {sub.damaged_two ? <p>{sub.damaged_two}</p> : null}
                        </div>
                      );
                    })
                  : null}
                {cancelling.length
                  ? filteredCustomers.map((sub) => {
                      return (
                        <div className="customers_cancelling" key={sub.id}>
                          {sub.cancelling ? <p>{sub.cancelling}</p> : null}
                          {sub.cancelling_one ? (
                            <p>{sub.cancelling_one}</p>
                          ) : null}
                        </div>
                      );
                    })
                  : null}
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
export default connect(t)(Customers);
