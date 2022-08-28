import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
import { axios } from "../../components/baseUrl";
// import DropFileInput from "../../components/DropFileInput";
// import OtherImages from "./OtherImages";

const EditProducts = () => {

    const [id, setId] = useState(0)
    const [productDetails, setProductDetails] = useState({
        productName: "",
        parentCategory: "",
        unitForMinOrder: "",
        supplyCapacity: "",
        unitForSupplyCapacity: "",
        minDuration: "",
        maxDuration: "",
        category: "",
        subCategory: "",
        specification: "",
        productDescription: "",
      });

      const handleProductChange = (e) => {
          setProductDetails({...productDetails, [e.target.name]: e.target.value})
      }

   


  const navigate = useNavigate()

  useEffect(() =>{
     setId(localStorage.getItem("id"));
     setProductDetails(localStorage.getItem("parentCategory","productName", "unitForSupplyCapacity", "unitForMinOrder",
     "unitForSupplyCapacity", "minDuration", "maxDuration", "category", "subCategory", "countryName", "productDescription","otherImages", "featuredImage" ));
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault()
    axios.put(`product/${id}`,
    {
    productName: productDetails.productName,
    currency: "NGN",
    parentCategory: productDetails.parentCategory,
    unitForMinOrder: productDetails.unitForMinOrder,
    unitForSupplyCapacity: productDetails.unitForSupplyCapacity,
    minDuration: productDetails.minDuration,
    maxDuration: productDetails.maxDuration,
    category: productDetails.category,
    subCategory: productDetails.subCategory,
    productDescription: productDetails.productDescription,
    supplyCapacity: productDetails.supplyCapacity,
    // specification: getSpecifications(),
    // countries: getCountry(),
  }
).then(() =>{
navigate('/products')
})
  }

  return (
    <>
      {/* <!-- main wrapper --> */}
      <div className="dashboard-main-wrapper">
        {/* <!-- navbar --> */}
        <Navbar />

        {/* <!-- left sidebar --> */}
        <Sidebar />

        {/* <!-- wrapper  --> */}
        <div className="dashboard-wrapper">
          <div>
            <form className="mx-5 my-5" >
              

              <div className="row my-3" style={{ textAlign: "left" }}>
                <div className="col-4 ">
                  <label className="form-label">Product Name:</label>
                  <input
                    name="productName"
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={handleProductChange}
                  />
                 
                </div>

                <div className="col-4 ">
                  <label className="form-label">Parent Category</label>


                  <select className="form-control"
                    name="parentCategory"
                    aria-describedby="Default select example"
                    onChange={handleProductChange}
                    placeholder='parent category'
                    >
                      <option>CONSTRUCTION_MATERIAL</option>
                      <option>FOOD_AND_BEVERAGE</option>
                      <option>APPAREL</option>
                      <option>HOME_AND_FURNITURE</option>
                      <option> BEAUTY_AND_PERSONAL_CARE</option>
                      <option>PACKAGING_AND_SUPPLY</option>
                      <option>  MINERALS_AND_METALLURGY</option>
                      <option>  AGRICULTURE</option>
                  </select>
                  
                  {/* {formErrors.parentCategory && (
                    <p className="text-danger">{formErrors.parentCategory}</p>
                  )} */}
                </div>

                <div className="col-4 ">
                  <label className="form-label">Supply Capacity</label>
                  <input
                    type="number"
                    name="supplyCapacity"
                    className="form-control"
                    onChange={handleProductChange}
                  ></input>
                 
                </div>

               
              </div>

              <div className="row" style={{ textAlign: "left" }}>
                <div className="col-4 mb-3">
                  <label className="form-label">Unit of Min order</label>
                  <input
                    name="unitForMinOrder"
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={handleProductChange}
                  />
                 
                </div>

                <div className="col-4  mb-3">
                  <label className="form-label">Unit of Supply Capacity</label>
                  <input
                    name="unitForSupplyCapacity"
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={handleProductChange}
                  />
               
                </div>

                <div className="col-4 mb-3">
                  <label className="form-label">Min Duration</label>
                  <input
                    name="minDuration"
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={handleProductChange}
                  />
               
                </div>
              </div>

              <div className="row" style={{ textAlign: "left" }}>
                <div className="col-4  mb-3">
                  <label className="form-label">Max Duration</label>
                  <input
                    name="maxDuration"
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={handleProductChange}
                  />
               
                </div>

                <div className="col-4 mb-3">
                  <label className="form-label">Category</label>
                  <input
                    name="category"
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={handleProductChange}
                  />
                </div>

                <div className="col-4 mb-3">
                  <label className="form-label">Sub Category</label>
                  <input
                    name="subCategory"
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={handleProductChange}
                  />
              
                </div>
              </div>
              <div className="row">
                {/* <div className="col-6" style={{ textAlign: "left" }}>
                  <label className="form-label">Specification</label>
                  {specification.map((info, index) => (
                    <div key={index} className="root my-2">
                      <input
                        type='text'
                        name="Type"
                        value={specification.Type}
                        placeholder="type"
                        className="mx-1 form-control specification-keys"
                      />

                      <input
                        type='text'
                        name="Color"
                        value={specification.Color}
                        variant="filled"
                        placeholder="value"
                        className="mx-1 form-control specification-values"
                      />

                      <div className="d-flex align-items-center">
                        <i
                          className="fa-solid fa-plus mx-1 "
                          onClick={() => handleAddFields()}
                        ></i>
                        <i
                          className="fa-solid fa-minus mx-1"
                          onClick={() => handleRemoveFields(index)}
                        ></i>
                      </div>
                    </div>
                  ))} */}
                  {/* {formErrors.specification && (
                    <p className="text-danger">{formErrors.specification}</p>
                  )} */}
                {/* </div> */}

                {/* <div className="col-6">
                  <label className="form-label">Country</label>
                  {country.map((info, index) => (
                    <div key={index} className="root my-2">
                      <input
                        type='text'
                        name="countryName"
                        value={country.countryName}
                        variant="filled"
                        placeholder="country name"
                        className="mx-1 form-control country-keys"
                      />

                      <input
                        type="text"
                        name="price"
                        value={country.price}
                        variant="filled"
                        placeholder="price"
                        className="mx-1 form-control country-values"
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
                  ))} */}
                  {/* {formErrors.country && (
                    <p className="text-danger">{formErrors.country}</p>
                  )} */}
                {/* </div> */}

              </div>

              <div className="mb-3" style={{ textAlign: "left" }}>
                <label className="form-label">Description</label>
                <textarea
                  name="productDescription"
                  type="text"
                  className="form-control"
                  onChange={handleProductChange}
                />
                {/* {formErrors.productDescription && (
                  <p className="text-danger">{formErrors.productDescription}</p>
                )} */}
              </div>

              

                <div className="row">
                  <div className="col-6 box">
                    <h3 className="header">Featured Images</h3>

                    {/* <DropFileInput
                      onFileChange={(files) => onFileChange(files)}
                    /> */}
                  <input type="file" name="featuredImage" />
                  </div>
                  <div className="col-6 mx-auto">
                  {/* <div className="mb-3" style={{ textAlign: "left" }}>
                <label className="form-label d-block">Other Images</label>
                <input
                  type="file"
                  name="otherImages"
                  accept="image/*"
                  multiple
                  onChange={onSelectFile}
                /> */}

                {/* <div className="iamges d-flex">
                  {selectedImages &&
                    selectedImages.map((image, index) => {
                      return (
                        <div
                          key={image}
                          className="image"
                          style={{ position: "relative" }}
                        >
                          <img src={image} alt="" /> */}
                          {/* <button
                            onClick={() =>
                              setSelectedImages(
                                selectedImages.filter((e) => e !== image)
                              )
                            }
                          >
                            delete image
                          </button> */}
                          {/* <div
                            className="bin-icon"
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "0",
                              color: "red",
                            }} */}
                          {/* > */}
                            {/* <IconButton
                              className="text-danger"
                              aria-label="delete"
                              size="small"
                              onClick={() =>
                                setSelectedImages(
                                  selectedImages.filter((e) => e !== image)
                                )
                              }
                            >
                              <DeleteIcon fontSize="inherit" />
                            </IconButton>
                          </div>
                        </div>
                      );
                    })}
                    {console.log(selectedImages)}
                </div>
                  </div> */}
                </div>


                
              </div>

              <div style={{ textAlign: "left" }}>
              

                <button
          type="submit"
          className="btn btn-dark"
        onClick={handleUpdate}
        >
          Update
        </button>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- end main wrapper --> */}
      </div>
    </>
  );
};

export default EditProducts;
