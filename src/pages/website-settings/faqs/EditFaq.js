import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { axios } from "../../components/baseUrl";
import { useNavigate } from "react-router-dom";

const EditFaq = () => {
  const [id, setId] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setQuestion(localStorage.getItem("question"));
    setAnswer(localStorage.getItem("answer"));
  }, []);

  const handleUpdate = (e, faqID) => {
    e.preventDefault();
    axios
      .put(
        `/faq/${faqID}`,
        { answer: answer, question: question }
      )
      .then(() => {
        navigate("/faq");
      });
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
                            type="text"
                            className="form-control"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlTextarea1">
                            Answer
                          </label>
                          <textarea
                            className="form-control"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={handleUpdate}
                        >
                          Update
                        </button>
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
