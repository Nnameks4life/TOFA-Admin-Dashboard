import React, { useEffect, useRef, useState } from 'react'
import { Editor } from "@tinymce/tinymce-react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useNavigate } from 'react-router-dom';
import { axios } from '../../components/baseUrl';

const EditCommodity = () => {

    const editorRef = useRef();

    const [id, setId] = useState(0)
    const [name, setName] = useState("");
    const [briefHistory, setBriefHistory] = useState("");
  const [countries, setCountries] = useState(""); 

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setCountries(localStorage.getItem("countries"));
    setName(localStorage.getItem("name"));
    setBriefHistory(localStorage.getItem("briefHistory"));
 }, [])

 const navigate = useNavigate()

    const handleUpdate = (e, commodityID) => {
        e.preventDefault()
        axios.put(`/commodity/${commodityID}`,
        {name:name,
        countries:countries,
        briefHistory: briefHistory,
        }
        ).then(() =>{
        navigate('/commodityinsight')
        })
    }

    const [country, setCountry] = useState([{ countryName: "" }]);

 const handleAddCountry = () => {
  setCountry([...country, { countryName: ""}]);
};

const handleRemoveCountry = (index) => {
  const countryValues = [...country];
  countryValues.splice(index, 1);
  setCountry(countryValues);
};

  return (
    <>
      {/* <!-- main wrapper --> */}
      <div className="dashboard-main-wrapper">
        <Navbar />

        <Sidebar />

        {/* <!-- wrapper  --> */}
        <div className="dashboard-wrapper">
          <div>
            <form className="mx-5 my-5">
              <div className="d-flex justify-content-between">
                <h2> Edit Commodity Insight</h2>
                {/* <Link to="/commodityInsight">
                <button className="btn btn-primary m-3">Show Commodity</button>
              </Link> */}
                <div
                  className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                  align="right"
                >
                  <a href="/commodityInsight" className="btn btn-dark">
                    Back
                  </a>
                </div>
              </div>

              <div className="row" style={{ textAlign: "left" }}>
                <div className="col-6 mt-2">
                  <label className="form-label">Commodity Name:</label>
                  <input
                    value={name}
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={(e) => setName(e.target.value)}
                  />
                  
                </div>
               
                <div className="col-6">
                  <label className="form-label">Country</label>
                  {country.map((info, index) => (
                    <div key={index} className="root my-2">
                      <input
                        type='text'
                        name="countries"
                        value={country.countryName}
                        variant="filled"
                        placeholder="country name"
                        className="mx-1 form-control country-keys"
                      />

                      <div className="d-flex align-items-center">
                        <i
                          className="fa-solid fa-plus mx-1 "
                          onClick={() => handleAddCountry()}
                        ></i>
                        <i
                          className="fa-solid fa-minus mx-1"
                          onClick={() => handleRemoveCountry(index)}
                        ></i>
                         
                      </div>
                    </div>
                  ))}
                 
                </div>
              </div>
              <div>
                <h4>Commodity Information</h4>
                <Editor
                  value={briefHistory}
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  onChange={(e) => setBriefHistory(e.target.value)}
                />
                
              </div>

              <div className="mb-3" style={{ textAlign: "left" }}>
                {/* { file && <div>
               
            <img alt="not found" width={"250px"} src={URL.createObjectURL(file)} />
            </div>
          } */}
                <label className="form-label mx-2">Upload Product</label>
                <input type="file" id="img" name="fileName" accept="image/*" />
              </div>

              <div style={{ textAlign: "start" }}>
                <button className="btn btn-dark" onClick={handleUpdate}>Submit</button>
              </div>
             
            </form>
          </div>
        </div>
        {/* <!-- end main wrapper --> */}
      </div>
      {/* <!-- end main wrapper --> */}
    </>
  );
};

export default EditCommodity;




















