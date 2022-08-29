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
  const [viewProduct, setViewProduct] = useState([])

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

  const setToLocalStorage = (id, productName,minPricePerUnit, maxPricePerUnit,supplyCapacity, currency,minDuration, subCategory) => {
    // localStorage.setItem("id", id);
    // localStorage.setItem("answer", answer);
   
    localStorage.setItem("productNname", productName);
    localStorage.setItem("minPricePerUnit", minPricePerUnit);
    localStorage.setItem("maxPricePerUnit", maxPricePerUnit);
    localStorage.setItem("supplyCapacity", supplyCapacity);
    localStorage.setItem("currency", currency);
    localStorage.setItem("minDuration", minDuration);
    localStorage.setItem("subCategory", subCategory);
  };



  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (productID) => {
    axios.delete(`/product/${productID}`).then(() => {
      getData();
    });
  };

  const showDetails = (productID) => { 
      axios.get(`/product/${productID}`).then((response) => {
        setViewProduct(response.data.data)
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
                                  <td>{item.subCategory}</td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                      data-dismiss="modal"
                                      onClick={() => handleDelete(item.id)}
                                    >
                                      delete
                                    </button>{" "}
                                    |{" "}
                                    <button
                                      onClick={(e) => showDetails(item.id)}
                                      type="button"
                                      class="btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                    >
                                      view{" "}
                                    </button>
                                  
                                    <div
                                      class="modal fade"
                                      id="exampleModal"
                                      tabindex="-1"
                                      aria-labelledby="exampleModalLabel"
                                      aria-hidden="true"
                                    >
                                      <div class="modal-dialog">
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h5
                                              class="modal-title"
                                              id="exampleModalLabel"
                                            >
                                              Product Information
                                            </h5>
                                            <button
                                              type="button"
                                              class="btn-close"
                                              data-bs-dismiss="modal"
                                              aria-label="Close"
                                            ></button>
                                          </div>
                                          <div align='right'>
                                       <Link to='/editproduct'> 
                          <button
                            className="btn btn-success"
                            onClick={() =>
                              setToLocalStorage(
                                item.productName,
                                item.minPricePerUnit,
                                item.maxPricePerUnit,
                                item.supplyCapacity,
                                item.currency,
                                item.minDuration,
                                item.subCategory,
                                
                              )
                            }
                          >
                            Edit
                          </button>
                          </Link>
                       
                                          </div>
                                          <div className="d-flex ">
                                          <div class="modal-body">Product Name: {viewProduct.productName}</div>
                                          <div class="modal-body">Category: {viewProduct.subCategory}</div>
                                          <div class="modal-body">Minimum Price: {viewProduct.minPricePerUnit}</div>
                                          </div>
                                          <div className="d-flex">
                                          <div class="modal-body">Maximum Price Per Unit: {viewProduct.maxPricePerUnit}</div>
                                          <div class="modal-body">Currency: {viewProduct.currency}</div>
                                          </div>
                                          <div className="d-flex">
                                          <div class="modal-body">Supply Capacity: {viewProduct.supplyCapacity}</div>
                                          <div class="modal-body">Minmum Duration: {viewProduct.minDuration}</div>
                                          </div>
                                          <div className="mx-auto">
                                          <div class="modal-body">Subcategory: {viewProduct.subCategory}</div>
                                          </div>
                                          <div class="modal-footer">
                                            <button
                                              type="button"
                                              class="btn btn-secondary"
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
