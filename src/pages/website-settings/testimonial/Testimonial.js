import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Testimonial = () => {
  // const handleChange = () => {
  //     'use strict';
  //     window.addEventListener('load', function() {
  //         // Fetch all the forms we want to apply custom Bootstrap validation styles to
  //         var forms = document.getElementsByClassNameName('needs-validation');
  //         // Loop over them and prevent submission
  //         var validation = Array.prototype.filter.call(forms, function(form) {
  //             form.addEventListener('submit', function(event) {
  //                 if (form.checkValidity() === false) {
  //                     event.preventDefault();
  //                     event.stopPropagation();
  //                 }
  //                 form.classNameList.add('was-validated');
  //             }, false);
  //         });
  //     }, false);
  // })();
  // }
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
          <div className="container-fluid dashboard-content">
            {/* <!-- pageheader --> */}
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="page-header" style={{textAlign:'left'}}>
                  <h2 className="pageheader-title">
                   Testimonials
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                align="right"
              >
                <a href="/edittest" className="btn btn-dark">
                  New Testimonial
                </a>
              </div>
            </div>
            {/* <!-- end pageheader --> */}
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card">
                  <h5 className="card-header font-bold" style={{textAlign:'left'}}>All Testimonial</h5>
                  <div className="card-body">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Company</th>
                          <th scope="col">Message</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>
                            <a href="edit-faq.html">Edit</a> |
                            <a href="comingsoon">Delete</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- footer --> */}
          {/* <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            Copyright © 2018 Concept. All rights reserved. Dashboard by <a href="https://colorlib.com/wp/">Colorlib</a>.
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="text-md-right footer-links d-none d-sm-block">
                                <a href="javascript: void(0);">About</a>
                                <a href="javascript: void(0);">Support</a>
                                <a href="javascript: void(0);">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  */}
          {/* <!-- end footer --> */}
        </div>
        {/* <!-- end main wrapper --> */}
      </div>
     
    </>
  );
};

export default Testimonial;
