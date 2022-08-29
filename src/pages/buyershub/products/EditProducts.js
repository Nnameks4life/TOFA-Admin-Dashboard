import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
import { axios } from "../../components/baseUrl";
// import DropFileInput from "../../components/DropFileInput";
// import OtherImages from "./OtherImages";

const EditProducts = () => {
  const [id, setId] = useState(0);
  const [productName, setProductName] = useState("")
  const [parentCategory, setParentCategory] = useState("")
  const [unitForMinOrder, setUnitForMinOrder] = useState("")
  const [supplyCapacity, setSupplyCapacity] = useState("")
  const [unitForSupplyCapacity, setUnitForSupplyCapacity] = useState("")
  const [minDuration, setMinDuration] = useState("")
  const [maxDuration, setMaxDuration] = useState("")
  const [category, setCategory] = useState("")
  const [subCategory, setSubCategory] = useState("")
  const [productDescription, setProductDescription] = useState("")
  


  const navigate = useNavigate();

  const handleUpdate = (e, productID) => {
    e.preventDefault();
    axios
      .put(`product/${productID}`, {
        productName:productName,
        parentCategory: parentCategory,
        unitForMinOrder: unitForMinOrder,
        supplyCapacity: supplyCapacity,
        unitForSupplyCapacity: unitForSupplyCapacity,
        minDuration: minDuration,
        maxDuration: maxDuration,
        category: category,
        subCategory: subCategory,
        productDescription: productDescription,
      })
      .then(() => {
        navigate("/product");
      });
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setProductName(localStorage.getItem("productName"));
    setParentCategory(localStorage.getItem("parentCategory"));
    setUnitForMinOrder(localStorage.getItem("unitForMinOrder"));
    setSupplyCapacity(localStorage.getItem("supplyCapacity"));
    setUnitForSupplyCapacity(localStorage.getItem("unitForSupplyCapacity"));
    setMinDuration(localStorage.getItem("minDuration"));
    setMaxDuration(localStorage.getItem("maxDuration"));
    setCategory(localStorage.getItem("category"));
    setSubCategory(localStorage.getItem("subCategory"));
    setProductDescription(localStorage.getItem("productDescription"));
  }, []);


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
            <form className="mx-5 my-5">
              <div className="row my-3" style={{ textAlign: "left" }}>
                <div className="col-4 ">
                  <label className="form-label">Product Name:</label>
                  <input
                    
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="col-4 ">
                  <label className="form-label">Parent Category</label>

                  <select
                    className="form-control"
                    value={parentCategory}
                    onChange={(e) => setParentCategory(e.target.value)}
                    aria-describedby="Default select example"
                    
                    placeholder="parent category"
                  >
                    <option>CONSTRUCTION_MATERIAL</option>
                    <option>FOOD_AND_BEVERAGE</option>
                    <option>APPAREL</option>
                    <option>HOME_AND_FURNITURE</option>
                    <option> BEAUTY_AND_PERSONAL_CARE</option>
                    <option>PACKAGING_AND_SUPPLY</option>
                    <option> MINERALS_AND_METALLURGY</option>
                    <option> AGRICULTURE</option>
                  </select>

                  {/* {formErrors.parentCategory && (
                    <p className="text-danger">{formErrors.parentCategory}</p>
                  )} */}
                </div>

                <div className="col-4 ">
                  <label className="form-label">Supply Capacity</label>
                  <input
                    type="number"
                    value={supplyCapacity}
                    className="form-control"
                    onChange={(e) => setSupplyCapacity(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="row" style={{ textAlign: "left" }}>
                <div className="col-4 mb-3">
                  <label className="form-label">Unit of Min order</label>
                  <input
                    value={unitForMinOrder}
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={(e) => setUnitForMinOrder(e.target.value)}
                  />
                </div>

                <div className="col-4  mb-3">
                  <label className="form-label">Unit of Supply Capacity</label>
                  <input
                    value={unitForSupplyCapacity}
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={(e) => setUnitForSupplyCapacity(e.target.value)}
                  />
                </div>

                <div className="col-4 mb-3">
                  <label className="form-label">Min Duration</label>
                  <input
                    value={minDuration}
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={(e) => setMinDuration(e.target.value)}
                  />
                </div>
              </div>

              <div className="row" style={{ textAlign: "left" }}>
                <div className="col-4  mb-3">
                  <label className="form-label">Max Duration</label>
                  <input
                    value={maxDuration}
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={(e) => setMaxDuration(e.target.value)}
                  />
                </div>

                <div className="col-4 mb-3">
                  <label className="form-label">Category</label>
                  <input
                    value={category}
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>

                <div className="col-4 mb-3">
                  <label className="form-label">Sub Category</label>
                  <input
                    value={subCategory}
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={(e) => setSubCategory(e.target.value)}
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
                  value={productDescription}
                  type="text"
                  className="form-control"
                  onChange={(e) => setProductDescription(e.target.value)}
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
                  <input type="file" />
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
