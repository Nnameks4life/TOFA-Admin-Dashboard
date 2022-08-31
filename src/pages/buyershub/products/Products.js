import React, { useEffect, useState } from "react";
// import { useFetch } from "../../../useFetch";
import { axios } from "../../components/baseUrl";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./products.css";

// import {datatabless} from '../../website-settings/commodityInsight/DummyData';

import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { Link } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [viewProduct, setViewProduct] = useState([]);

  const getData = async () => {
    try {
      axios.get("/product").then((response) => {
        console.log(response.data);
        setProduct(response.data.data);
      });
    } catch (error) {
      console.log(error.response.data.erros);
    }
  };

  const setData = (
    id,
    productName,
    maxDuration,
    parentCategory,
    supplyCapacity,
    category,
    minDuration,
    subCategory,
    unitForMinOrder,
    unitForSupplyCapacity,
    productDescription
  ) => {
    localStorage.setItem("id", id);
    localStorage.setItem("productName", productName);
    localStorage.setItem("minPricePerUnit", minDuration);
    localStorage.setItem("maxPricePerUnit", maxDuration);
    localStorage.setItem("supplyCapacity", supplyCapacity);
    localStorage.setItem("unitForSupplyCapacity", unitForSupplyCapacity);
    localStorage.setItem("category", category);
    localStorage.setItem("parentCategory", parentCategory);
    localStorage.setItem("subCategory", subCategory);
    localStorage.setItem("unitForMinOrder", unitForMinOrder);
    localStorage.setItem("productDescription", productDescription);
  };

  useEffect(() => {
    getData();
  }, []);

  // const handleDelete = (productID) => {
  //   axios.delete(`/product/${productID}`).then((response) => {
  //     setViewProduct(response.data.data)
  //   });
  // };

  const showDetails = (productID) => {
    axios.get(`/product/${productID}`).then((response) => {
      setViewProduct(response.data.data);
    });
  };

  useEffect(() => {
    //initialize datatable
    $(document).ready(function() {
      setTimeout(function() {
        $("#example").DataTable();
      }, 1000);
    });
  }, []);

  return (
    <>
      {/* <!-- main wrapper --> */}
      <div className="dashboard-main-wrapper">
        <Navbar />
        <Sidebar />
        {/* <!-- wrapper  --> */}
        <div className="dashboard-wrapper">
          <div className="container-fluid dashboard-content">
            {/* <!-- pageheader --> */}
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="page-header" style={{ textAlign: "left" }}>
                  <h2 className="pageheader-title">Product Overview</h2>
                </div>
              </div>

              <div
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                align="right"
              >
                <a href="/createproduct" className="btn btn-dark">
                  Create Products
                </a>
              </div>
            </div>
            {/* <!-- end pageheader --> */}

            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card">
                  <div className="card-header" style={{ textAlign: "left" }}>
                    <h5 className="mb-0 font-bold">All Orders</h5>

                    {/* <p>This example shows DataTables and the Buttons extension being used with the Bootstrap 4 framework providing the styling.</p> */}
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <div
                        id="example wrapper"
                        className="dataTables_wrapper dt_bootstrap4"
                      >
                        <div className="row">
                          <div
                            className="col-sm-12 md-6"
                            style={{ textAlign: "left" }}
                          >
                            <div className="dt-buttons my-3">
                              <button
                                className="btn btn-outline-light buttons-copy buttons-html5"
                                tabIndex="0"
                                aria-controls="example"
                                type="button"
                              >
                                <span>Copy</span>
                              </button>
                              <button
                                className="btn btn-outline-light buttons-excel buttons-html5"
                                tabIndex="0"
                                aria-controls="example"
                                type="button"
                              >
                                <span>Excel</span>
                              </button>
                              <button
                                className="btn btn-outline-light buttons-pdf buttons-html5"
                                tabIndex="0"
                                aria-controls="example"
                                type="button"
                              >
                                <span>PDF</span>
                              </button>
                              <button
                                className="btn btn-outline-light buttons-print"
                                tabIndex="0"
                                aria-controls="example"
                                type="button"
                              >
                                <span>Print</span>
                              </button>
                              <button
                                className="btn btn-outline-light buttons-collection dropdown-toggle buttons-colvis"
                                tabIndex="0"
                                aria-controls="example"
                                type="button"
                                aria-haspopup="true"
                              >
                                <span>Column Visibility</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container">
                        <table
                          id="example"
                          className="table table-hover table-bordered"
                          style={{ width: "100%", textAlign: "left" }}
                        >
                          <thead>
                            <tr>
                              {/* <th>ID</th> */}
                              <th>Product ID</th>

                              <th>Product Name</th>
                              <th>Min Price Per Unit</th>
                              <th>maxPricePerUnit</th>
                              <th>currency</th>
                              <th>supplyCapacity</th>

                              <th>minDuration</th>
                              <th>maxDuration</th>
                              <th>subCategory</th>
                              <th>Actionn-two</th>
                            </tr>
                          </thead>
                          <tbody>
                            {product.map((item) => {
                              return (
                                <tr key={item.id}>
                                  {/* <td>{item.id}</td> */}
                                  <td>{item.id}</td>
                                  <td>{item.productName}</td>
                                  <td>{item.minPricePerUnit}</td>
                                  <td>{item.maxPricePerUnit}</td>
                                  <td>{item.currency}</td>
                                  <td>{item.supplyCapacity}</td>
                                  <td>{item.minDuration}</td>
                                  <td>{item.maxDuration}</td>
                                  <td>{item.subCategory}</td>
                                  <td>
                                    <Link to="/editproduct">
                                      <button
                                        className="btn btn-success"
                                        onClick={() =>
                                          setData(
                                            item.id,
                                            item.productName,
                                            item.parentCategory,
                                            item.minDuration,
                                            item.maxDuration,
                                            item.supplyCapacity,
                                            item.category,
                                            item.unitForSupplyCapacity,
                                            item.subCategory,
                                            item.unitForMinOrder,
                                            item.productDescription
                                          )
                                        }
                                      >
                                        Edit
                                      </button>
                                    </Link>

                                    {/* <button
                                      type="button"
                                      className="btn btn-danger"
                                      data-dismiss="modal"
                                      onClick={() => handleDelete(item.id)}
                                    >
                                      delete
                                    </button> */}

                                    <button
                                      onClick={(e) => showDetails(item.id)}
                                      type="button"
                                      className="btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                    >
                                      view
                                    </button>

                                    <div
                                      className="modal fade"
                                      id="exampleModal"
                                      tabIndex="-1"
                                      aria-labelledby="exampleModalLabel"
                                      aria-hidden="true"
                                    >
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h5
                                              className="modal-title"
                                              id="exampleModalLabel"
                                            >
                                              Product Information
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              data-bs-dismiss="modal"
                                              aria-label="Close"
                                            ></button>
                                          </div>
                                          <div align="right"></div>
                                          <div className="d-flex ">
                                            <div className="modal-body">
                                              Product Name:{" "}
                                              {viewProduct.productName}
                                            </div>
                                            <div className="modal-body">
                                              Category:{" "}
                                              {viewProduct.subCategory}
                                            </div>
                                            <div className="modal-body">
                                              Minimum Price:{" "}
                                              {viewProduct.minPricePerUnit}
                                            </div>
                                          </div>
                                          <div className="d-flex">
                                            <div className="modal-body">
                                              Maximum Price Per Unit:{" "}
                                              {viewProduct.maxPricePerUnit}
                                            </div>
                                            <div className="modal-body">
                                              Currency: {viewProduct.currency}
                                            </div>
                                          </div>
                                          <div className="d-flex">
                                            <div className="modal-body">
                                              Supply Capacity:{" "}
                                              {viewProduct.supplyCapacity}
                                            </div>
                                            <div className="modal-body">
                                              Minmum Duration:{" "}
                                              {viewProduct.minDuration}
                                            </div>
                                          </div>
                                          <div className="mx-auto">
                                            <div className="modal-body">
                                              Subcategory:{" "}
                                              {viewProduct.subCategory}
                                            </div>
                                          </div>
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-secondary"
                                              data-bs-dismiss="modal"
                                            >
                                              Close
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end main wrapper --> */}
      </div>
    </>
  );
};

export default Products;
