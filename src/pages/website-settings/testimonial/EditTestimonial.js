import React, {useState} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { axios } from "../../components/baseUrl";
// import { useNavigate} from 'react-router-dom';

const EditTest = () => {

    const [formErrors, setFormErrors] = useState({})
    const [customError, setCustomError] = useState("")
    const [testimonial, setTestimonial] = useState({
    name:"",
    company:"",
    message:"",
});

// const navigate = useNavigate()

const handleChange = (e) => {
    setTestimonial({...testimonial, [e.target.name]: e.target.value})
}

const handleSubmit = (e) => {
    try{
        e.preventDefault()
        const {result} = axios.post("/testimonial", {
            name:testimonial.name,
            company:testimonial.company,
            message:testimonial.message,
        })
        console.log(result)
    } catch (err) {
       if (err.response.data.errors[0].field) {
           setFormErrors(err.response.data.errors.reduce (function(obj, err) {
               obj[err.field] = err.message;
               return obj;
           }, {}))
       } else {
           console.log(err.response.data.errors[0].message)
           setCustomError(err.response.data.errors[0].message)
           alert(customError)
       }
    }

}

    
  return (
    <div>
        <>
    {/* <!-- main wrapper --> */}
    <div className="dashboard-main-wrapper">
        {/* <!-- navbar --> */}
        <Navbar/>

        {/* <!-- left sidebar --> */}
        <Sidebar/>


        {/* <!-- wrapper  --> */}
        <div className="dashboard-wrapper">
            <div className="container-fluid dashboard-content">
                {/* <!-- pageheader --> */}
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="page-header" style={{textAlign:'left'}}>
                            <h2 className="pageheader-title">Testimonial</h2>
                        </div>
                    </div>
                </div>
                {/* <!-- end pageheader --> */}

                <div className="row" style={{textAlign:'left'}}>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" >
                            <div className="card">
                                <h5 className="card-header font-bold">Create Testimonial</h5>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="inputText3" className="col-form-label">Name</label>
                                            <input id="inputText3" name='question'  type="text" className="form-control" onChange={handleChange}/>
                                            {formErrors.name && (<p className="text-danger">{formErrors.name}</p>)}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputText3" className="col-form-label">Company</label>
                                            <input id="inputText3" name='question'  type="text" className="form-control" onChange={handleChange}/>
                                            {formErrors.company && (<p className="text-danger">{formErrors.company}</p>)}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                                            <textarea className="form-control" name='answer' id="exampleFormControlTextarea1" rows="3" onChange={handleChange}/>
                                            {formErrors.message && (<p className="text-danger">{formErrors.message}</p>)}
                                        </div>
                                        <div className="form-group">
                                            <a href="comingsoon" className="btn btn-dark" onClick={handleSubmit}>Save Testimonial</a>
                                        </div>
                                    </form>
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
                                <a href="jav">About</a>
                                <a href="jav">Support</a>
                                <a href="jav;">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  */}
            {/* <!-- end footer --> */}

        </div>
        {/* <!-- end main wrapper --> */}

    </div>
    {/* <!-- end main wrapper --> */}


    {/* <!-- Optional JavaScript -->
    <!-- jquery 3.3.1 -->
    <script src="assets/vendor/jquery/jquery-3.3.1.min.js"></script>
    <!-- bootstap bundle js -->
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.js"></script>
    <!-- slimscroll js -->
    <script src="assets/vendor/slimscroll/jquery.slimscroll.js"></script>
    <script src="../assets/vendor/multi-select/js/jquery.multi-select.js"></script>
    <!-- main js -->
    <script src="assets/libs/js/main-js.js"></script>
    <!-- chart chartist js -->
    <script src="assets/vendor/charts/chartist-bundle/chartist.min.js"></script>
    <!-- sparkline js -->
    <script src="assets/vendor/charts/sparkline/jquery.sparkline.js"></script>
    <!-- morris js -->
    <script src="assets/vendor/charts/morris-bundle/raphael.min.js"></script>
    <script src="assets/vendor/charts/morris-bundle/morris.js"></script>
    <!-- chart c3 js -->
    <script src="assets/vendor/charts/c3charts/c3.min.js"></script>
    <script src="assets/vendor/charts/c3charts/d3-5.4.0.min.js"></script>
    <script src="assets/vendor/charts/c3charts/C3chartjs.js"></script>
    <script src="assets/libs/js/dashboard-ecommerce.js"></script>
    <!-- Data tables -->
    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script src="assets/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js"></script>
    <script src="assets/vendor/datatables/js/buttons.bootstrap4.min.js"></script>
    <script src="assets/vendor/datatables/js/data-table.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.colVis.min.js"></script>
    <script src="https://cdn.datatables.net/rowgroup/1.0.4/js/dataTables.rowGroup.min.js"></script>
    <script src="https://cdn.datatables.net/select/1.2.7/js/dataTables.select.min.js"></script>
    <script src="https://cdn.datatables.net/fixedheader/3.1.5/js/dataTables.fixedHeader.min.js"></script>
    <!-- Form validation -->
    <script src="../assets/vendor/parsley/parsley.js"></script>
    <script>
    $('#form').parsley();
    </script> */}
   
</>
 
    </div>
  )
}

export default EditTest;