import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { axios } from "../../components/baseUrl";
import { useNavigate } from "react-router-dom";

const EditFaq = () => {
    const [formErrors, setFormErrors] = useState({})
    const [customError, setCustomError] = useState("")
    const [faq, setFaq] = useState({
    answer: "",
    question: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFaq({ ...faq, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { result } = await axios
        .post("/faq", {
          question: faq.question,
          answer: faq.answer,
        })
        console.log(result)
    } catch (err) {
        if(err.response.data.errors[0].field) {
            setFormErrors(err.response.data.errors.reduce(function (obj, err) {
              obj[err.field] = err.message;
              return obj;
            }, {}))
        } else {
            console.log(err.response.data.errors[0].message)
              setCustomError(err.response.data.errors[0].message)
              alert(customError)
        }
    } 
    if (formErrors.question || formErrors.answer ) {
    navigate("/faq")
  }
};

  return (
    <div>
      <>
        {/* <!-- main wrapper --> */}
        <div className="dashboard-main-wrapper">
          {/* <!-- navbar --> */}
          <Navbar />

          {/* <!-- left sidebar --> */}
          <Sidebar />

          {/* <!-- wrapper  --> */}
          <div className="dashboard-wrapper">
            <div className="container-fluid dashboard-content">
              {/* <!-- pageheader --> */}
              <div className="row" style={{ textAlign: "left" }}>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="page-header">
                    <h2 className="pageheader-title">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>
              </div>
              {/* <!-- end pageheader --> */}

              <div className="row" style={{ textAlign: "left" }}>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="card">
                    <h5 className="card-header">Edit FAQ</h5>
                    <div className="card-body">
                      <form>
                        <div className="form-group">
                          <label
                            htmlFor="inputText3"
                            className="col-form-label"
                          >
                            Question
                          </label>
                          <input
                            id="inputText3"
                            name="question"
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                          />
                          {formErrors.question && (<p className="text-danger">{formErrors.question}</p>)}
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlTextarea1">
                            Answer
                          </label>
                          <textarea
                            className="form-control"
                            name="answer"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            onChange={handleChange}
                          />
                          {formErrors.answer && (<p className="text-danger">{formErrors.answer}</p>)}
                        </div>
                        <div className="form-group">
                          <a
                            href="comingsoon"
                            className="btn btn-dark"
                            onClick={handleSubmit}
                          >
                            Save FAQ
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end main wrapper --> */}
        </div>
        {/* <!-- end main wrapper --> */}
      </>
    </div>
  );
};

export default EditFaq;
