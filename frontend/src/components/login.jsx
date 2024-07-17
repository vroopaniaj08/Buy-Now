import { useRef } from "react";
import { Link } from 'react-router-dom';
import apis from '../services/apis';
import apiObj from '../services/webmethod';

export default function Login() {
    let emailBox = useRef();
    let passwordBox = useRef();
    let islogin = async (event) => {
        event.preventDefault();
        // console.log("login Successful");

        let obj = {
            "email": emailBox.current.value,
            "password": passwordBox.current.value
        }
        let response = await apiObj.postapi(apis.login, obj);
        console.log(response)
        if (response.status == 200) {
            // console.log("hi");
            alert(response.data.Info);
        }
        else {
            alert("User not found");
        }
    }
    return <>
        <div className="d-flex justify-content-center align-items-center gradient_background" style={{  backgroundColor:"SlateBlue",height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

            <div className="container p-4 w-50" style={{ height: "fit-content", boxShadow: '1px 2px 4px 2px rgba(0, 0, 0, 0.3)', borderRadius: "10px", backgroundColor: `rgba(255,255,255,0.5)` }}>
                <h3 className='text-center'>Login page</h3>
                <form onSubmit={islogin}>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input type="text" ref={emailBox} required className="form-control" placeholder="Enter email here" style={{ backgroundColor: `rgba(255,255,255,0.7)` }}></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input type="text" ref={passwordBox} required className="form-control" placeholder="Enter Password here" style={{ backgroundColor: `rgba(255,255,255,0.7)` }}></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <button className="btn btn-primary w-100" >Login</button> &nbsp;&nbsp;&nbsp;
                            {/* <span className="text-danger">{msg}</span> */}
                            <Link to='/signup' className="text-center w-100 d-block text-primary fw-bold" style={{ textDecoration: "none" }}>Sign Up or Register</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}