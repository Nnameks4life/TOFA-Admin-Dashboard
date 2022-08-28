import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { axios } from "../../components/baseUrl";

const NewCommodity = () => {
  const editorRef = useRef();
 const [commodity, setCommodity] = useState({
   name:"",
   briefHistory:""
 })

 const [formErrors, setFormErrors] = useState({});
  const [customError, setCustomError] = useState("");

 const handleChange = (e) => {
setCommodity({...commodity, [e.target.name]: e.target.value})
 }
 const handleSubmit = async(e) => {
   try{
    e.preventDefault()
    const jsonData = {
      name: commodity.name,
      countries:getCountry(), 
      briefHistory:commodity.briefHistory, 
    }
    // const formData = new FormData()
    //   for (const property in jsonData) {
    //     formData.append(`${property}`, jsonData[property]);
    //   }
      const { data: result } = await axios
        .post("/commodity", jsonData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert ("success")
        console.log(result)
    // const {data} = axios.post("./commodity", {
    //   name: commodity.name,
    //   country:getCountry(), 
    //   briefHistory:commodity.briefHistory,
    // })
    // console.log(data)
  } catch (err) {
    if (err.response.data.errors[0].field) {
      console.log(err.response.data.errors)
      setFormErrors(
        err.response.data.errors.reduce(function(obj, err) {
          obj[err.field] = err.message;
          return obj;
        }, {})
      );
    } else {
      console.log(err.response.data.errors[0].message);
      setCustomError(err.response.data.errors[0].message);
      alert(customError);
    }
  }
 
 }

 const getCountry = () => {
  const countries = document.getElementsByClassName("country-keys");
  // const prices = document.getElementsByClassName("country-values");

  const country = [];
  // [{ countryName: string, price: string }]
  for (let i = 0; i < countries.length; i++) {
    const countryName = countries[i].value;
    // const price = prices[i].value;
    if (countryName) country.push( countryName);
  }
  return JSON.stringify(country);
};

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
                <h2> Create Commodity Insight</h2>
                {/* <Link to="/commodityInsight">
                <button className="btn btn-primary m-3">Show Commodity</button>
              </Link> */}
                <div
                  className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                  align="right"
                >
                  <a href="/commodityInsight" className="btn btn-dark">
                    Show Commodity
                  </a>
                </div>
              </div>

              <div className="row" style={{ textAlign: "left" }}>
                <div className="col-6 mt-2">
                  <label className="form-label">Commodity Name:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                  />
                   {formErrors.name && (
                    <p className="text-danger">{formErrors.name}</p>
                  )}
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
                         {formErrors.country && (
                    <p className="text-danger">{formErrors.country}</p>
                  )}
                      </div>
                    </div>
                  ))}
                  {formErrors.country && (
                    <p className="text-danger">{formErrors.country}</p>
                  )}
                </div>
              </div>
              <div>
                <h4>Commodity Information</h4>
                <Editor
                  name='briefHistory'
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  onChange={handleChange}
                />
                 {formErrors.briefHistory && (
                    <p className="text-danger">{formErrors.briefHistory}</p>
                  )}
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
                <button className="btn btn-dark" onClick={handleSubmit}>Submit</button>
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

export default NewCommodity;
