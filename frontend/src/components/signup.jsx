import { useRef } from "react"
import apis from '../services/apis'
import webmethod from '../services/webmethod'

export default function Signup() {
    const nameBox = useRef()
    const ageBox = useRef()
    const emailBox = useRef()
    const passwordBox = useRef()

    let issignup = async(event)=>{
        event.preventDefault()
        console.log("signup")
        let obj = {
            "name":nameBox.current.value,
            "age":ageBox.current.value,
            "email":emailBox.current.value,
            "password":passwordBox.current.value
        }
        const response = await webmethod.postapi(apis.signup,obj)
        console.log(response)
        if(response.status){
            alert("Signup successful....")
        }
        else{
            alert("signup not successful....")
        }
    }
    return <>
        <div className="d-flex justify-content-center align-items-center gradient_background" style={{ backgroundColor:"SlateBlue",height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="container p-4 w-50" style={{ height: "fit-content", boxShadow: '1px 2px 4px 2px rgba(0, 0, 0, 0.3)', borderRadius: "10px", backgroundColor: `rgba(255,255,255,0.5)` }}>
                <h3 className='text-center'>Signup</h3>
                <form onSubmit={issignup}>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input type="text" ref={nameBox} required className="form-control" placeholder="Enter Name here" style={{ backgroundColor: `rgba(255,255,255,0.7)` }}></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input type="text" ref={ageBox} required className="form-control" placeholder="Enter Age here" style={{ backgroundColor: `rgba(255,255,255,0.7)` }}></input>
                        </div>
                    </div>
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
                            <button className="btn btn-primary w-100" >Register</button> &nbsp;&nbsp;&nbsp;
                            {/* <span className="text-danger">{msg}</span> */}
                            {/* <Link to='/signup' className="text-center w-100 d-block text-primary fw-bold" style={{ textDecoration: "none" }}>Sign Up or Register</Link> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}