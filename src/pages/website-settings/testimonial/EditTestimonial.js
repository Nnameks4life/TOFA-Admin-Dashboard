import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { axios } from "../../components/baseUrl";
import { useNavigate, useParams } from "react-router-dom";
// import { useNavigate} from 'react-router-dom';

const EditTestimonial = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [testimonialInfo, setTestimonialInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate();

  const {myTestimonialId} = useParams()

const getInfo = async () => {
    try {
    const response =  await axios.get(`/testimonial/${myTestimonialId}`)
    setTestimonialInfo(response.data.data)
    console.log(response.data.data)
    setIsLoading(false)
    }  catch(error) {
    console.log(error)
    setIsLoading(false)
    }
}

useEffect(() => {
    getInfo()
}, [])

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .patch(`testimonial/${id}`, {
        name: name,
        company: company,
        message: message,
      })
      .then(() => {
        navigate("/testimonial");
      });
  };

  if (isLoading) {
    return (
        <h1>Loading</h1>
    )
}

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
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="page-header" style={{ textAlign: "left" }}>
                    <h2 className="pageheader-title">Testimonial</h2>
                  </div>
                </div>
              </div>
              {/* <!-- end pageheader --> */}

              <div className="row" style={{ textAlign: "left" }}>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="card">
                    <h5 className="card-header font-bold">Edit Testimonial</h5>
                    <div className="card-body">
                      <form>
                        <div className="form-group">
                          <label
                            htmlFor="inputText3"
                            className="col-form-label"
                          >
                            Name
                          </label>
                          <input
                            value={testimonialInfo.name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="inputText3"
                            className="col-form-label"
                          >
                            Company
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={testimonialInfo.company}
                            onChange={(e) => setCompany(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlTextarea1">
                            Message
                          </label>
                          <textarea
                            className="form-control"
                            rows="3"
                            value={testimonialInfo.message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleUpdate}
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default EditTestimonial;
