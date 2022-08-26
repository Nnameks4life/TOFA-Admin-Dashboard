import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { axios } from "../../components/baseUrl";
import { useNavigate } from "react-router-dom";

const CreateBanner = () => {

  const [formErrors, setFormErrors] = useState({})
  const [customError, setCustomError] = useState("")
  const [banner, setBanner] = useState({
    action: "",
    link: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBanner({ ...banner, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { result } = await axios
        .post("/banner", {
          action: banner.action,
          link: banner.link,
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
    if (formErrors.email || formErrors.password ) {
    navigate("/banner")
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
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="page-header" style={{textAlign:'left'}}>
                    <h2 className="pageheader-title">Banner</h2>
                  </div>
                </div>
              </div>
              {/* <!-- end pageheader --> */}

              <div className="row" style={{textAlign:'left'}}>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="card">
                    <h4 className="card-header font-bold">Create Banner</h4>
                    <div className="card-body">
                      <form>
                        <div className="form-group">
                          <label
                            htmlFor="inputText3"
                            className="col-form-label"
                          >
                            Call to Action
                          </label>
                          <input
                            id="inputText3"
                            name="action"
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                          />
                           {formErrors.action && (<p className="text-danger">{formErrors.action}</p>)}
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="inputText3"
                            className="col-form-label"
                          >
                            Link
                          </label>
                          <input
                            id="inputText3"
                            name="link"
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                          />
                           {formErrors.link && (<p className="text-danger">{formErrors.link}</p>)}
                        </div>
                        <div className="form-group">
                          <label className="form-label mx-2">
                            Upload Banner
                          </label>
                          <input
                            type="file"
                            id="img"
                            name="fileName"
                            accept="image/*"
                          />
                           {/* {formErrors.question && (<p className="text-danger">{formErrors.question}</p>)} */}
                        </div>
                        <div className="form-group">
                          <a href="comingsoon" className="btn btn-dark" onClick={handleSubmit}>
                            Save Testimonial
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
      </>
    </div>
  );
};

export default CreateBanner;
