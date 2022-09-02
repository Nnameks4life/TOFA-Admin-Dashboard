import React, {useEffect, useState } from "react";
// import { useFetch } from '../../../useFetch'
import { axios } from '../../components/baseUrl'
import {applicantDatatabless} from '../Dummydata';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Applicants = () => {


  const [applicants, setApplicants] = useState([]);
  const [applicantView, setApplicantView] = useState([]);

  const getData = async () => {
    try {
      axios.get("/tofa-academy").then((response) => {
        console.log(response.data);
        setApplicants(response.data.data);
      });
    } catch (error) {
      console.log(error.response.data.erros);
    }
  };

  const showDetails = (applicantID) => { 
    axios.get(`/tofa-academy/${applicantID}`).then((response) => {
      setApplicantView(response.data.data)
    });
};

  //  const {data, loading, error} = useFetch("/order")

  //  if (loading) return <h1>LOADING ....</h1>

  //  if (error) console.log(error)

  // const handleDelete = (applicantID) => {
  //   axios.delete(`/product/${applicantID}`).then(() => {

  //   })
  // }

  useEffect(() => {
    getData()
  }, [])

  useEffect(()=>{
    //initialize datatable
$(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,1000);
});
},[])

  return (
    <>
      {/* <!-- main wrapper --> */}
      <div className="dashboard-main-wrapper">
        <Navbar/>
        <Sidebar/>
        {/* <!-- wrapper  --> */}
        <div className="dashboard-wrapper">
          <div className="container-fluid dashboard-content">
            {/* <!-- pageheader --> */}
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="page-header" style={{ textAlign: "left" }}>
                  <h2 className="pageheader-title">Applicants Overview</h2>
                </div>
              </div>
            </div>
            {/* <!-- end pageheader --> */}

            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card">
                  <div className="card-header" style={{ textAlign: "left" }}>
                    <h5 className="mb-0 font-bold">All Applicants</h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <div
                        id="example wrapper"
                        className="dataTables_wrapper dt_bootstrap4"
                      >
                      </div>
                      <div className="container">
                        <table
                          id="example"
                          className="table table-hover table-bordered"
                          style={{ width: "100%", textAlign: "left" }}
                        >
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Full Name</th>
                              <th>Country</th>
                              <th>phoneNumber</th>
                              <th>productTraded</th>
                              <th>Age</th>
                              <th>Email</th>
                              <th className="text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {applicants.map((item, index) => {
                              return (
                                <tr key={item.id}>
                                  <td>{index +1}</td>
                                  <td>{item.firstName} {item.lastName}</td>
                                  <td>{item.country}</td>
                                  <td>{item.phoneNumber}</td>
                                  <td>{item.gender}</td>
                                  <td>{item.age}</td>
                                  <td>{item.email}</td>
                                  <td>
                                  <div className="text-center">
                                    <button
                                      onClick={(e) => showDetails(item.id)}
                                      type="button"
                                      className="btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                    >
                                      view
                                    </button>
                                    </div>

                                    <div
                                      className="modal fade modal-width"
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
                                              Applications Overview
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close text-danger"
                                              data-bs-dismiss="modal"
                                              aria-label="Close"
                                             
                                            ></button>
                                          </div>
                                          
                                          <div className="modal-body px-2">
                                            <label>
                                              Full Name:{" "}
                                            </label>
                                            <br />
                                            <p> {applicantView.firstName} {applicantView.lastName}</p>
                                          </div>
                                          <div className="modal-body px-2">
                                            <label>Country of Exported Import: </label>
                                            <p>
                                              {applicantView.country}
                                            </p>
                                          </div>

                                          <div className="modal-body px-2">
                                            <label>Phone Number: </label>
                                            <p>
                                              {applicantView.phoneNumber}
                                            </p>
                                          </div>

                                          <div className="modal-body px-2">
                                            <label>Email: </label>
                                            <p>
                                              {applicantView.email}
                                            </p>
                                          </div>

                                          <div className="modal-body px-2">
                                            <label>Gender: </label>
                                            <p>
                                              {applicantView.gender}
                                            </p>
                                          </div>

                                          <div className=" modal-bodyb px-2">
                                            <label>Quantity Requested:</label>
                                            <p>39 Metric Tonnes</p>
                                          </div>
                                          <div className="modal-body px-2">
                                            <label>Product Specification:</label>
                                            <p>
                                              Commodo eget a et dignissim
                                              dignissim morbi vitae, mi. Mi
                                              aliquam sit ultrices enim cursus.
                                              Leo sapien, pretium duis est eu
                                              volutpat interdum eu non. Odio
                                              eget nullam elit laoreet. Libero
                                              at felis nam at orci venenatis
                                              rutrum nunc. Etiam mattis ornare
                                              pellentesque iaculis enim. Felis
                                              eu non in aliquam egestas
                                              placerat. Eget maecenas ornare
                                              venenatis lacus nunc{" "}
                                            </p>
                                          </div>

                                         
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-dark"
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

export default Applicants;
