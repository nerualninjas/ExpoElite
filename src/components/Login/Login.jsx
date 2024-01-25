// "use client"

// import { useContext } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";
// import { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";







const Login = () => {
    // const { signIn, signInWithGoogle } = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate();
    // console.log('location in the login page', location);
    // const [loginError, setLoginError] = useState('');
    // const [success, setSuccess] = useState('');


    // const handleLogin = e => {
    //     e.preventDefault();
    //     console.log(e.currentTarget);
    //     const form = new FormData(e.currentTarget);
    //     // console.log(form);
    //     const email = form.get('email');
    //     const password = form.get('password');
    //     console.log(email, password);



    //     // reset error and success
    //     setLoginError('');
    //     setSuccess('');



    //     // add validation and log in
    //     signIn(email, password)
    //         .then(result => {
    //             console.log(result.user);
    //             // setSuccess('User Logged in Successfully.')
    //             setSuccess,
    //                 Swal.fire("Good job!", "User Logged in Successfully!", "success");

    //             // navigate after login 
    //             navigate(location?.state ? location.state : '/');
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             // setLoginError(error.message);
    //             setLoginError,
    //                 Swal.fire("Oops!", "Your email or password is invalid!", "error");
    //         })
    // }



    // const handleGoogleSignIn = () => {
    //     signInWithGoogle()
    //         .then(result => {
    //             console.log(result.user)
    //             setSuccess,
    //             Swal.fire("Good job!", "User Logged in Successfully!", "success");


    //             // navigate after login 
    //             navigate(location?.state ? location.state : '/');
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }




    return (
        <div className=" bg-gradient-to-r from-pink-200 to-pink-100 min-h-screen ">
            <div className="flex flex-col md:flex-row items-center justify-center w-3/5 mx-auto  border-black py-10 rounded-lg ">
                <div className="w-full lg:w-1/2 bg-[#FF385C] h-[80vh] flex justify-center items-center  rounded-l-lg">
                    <Image width={300} height={300} className="w-full py-3" src={"https://i.postimg.cc/TwpYwc0g/login1-removebg-preview.png"} alt="picture" />
                </div>
                <div className="w-full lg:w-1/2 my-0 md:mt-1 bg-base-100 rounded-r-lg py-3 h-[80vh] ">
                    <h2 className="text-3xl my-8 font-bold text-center  text-black">Sign In</h2>
                    <form className="w-4/5 md:w-4/5 lg:w-4/5   mx-auto h-full text-center  place-items-center">
                        <div className="form-control">

                            <input type="email" placeholder="Email" name="email" className="input input-bordered py-6 mb-5 rounded-full" required />
                        </div>
                        <div className="form-control">

                            <input type="password" placeholder="Password" name="password" className="input input-bordered py-6 mb-5 rounded-full" required />

                        </div>
                        <div className="form-control">
                            <button className="btn bg-[#FF385C] text-white py-6 mb-2 rounded-full border-none">Sign In</button>
                        </div>
                        <div className="form-control">
                            <h2 className="text-md font-semibold"> Or Log in with</h2>
                            <button className="btn bg-[#FF385C] text-white py-6 mt-2 rounded-full border-none">
                                {/* <FcGoogle></FcGoogle> */}
                                Google
                            </button>
                        </div>
                        <p className="text-center mt-4 pb-5 text-black font-semibold text-sm">Do not have an Account?
                            <Link href={""}
                                className="text-[#FF385C] ml-2 font-semibold text-base mb-10" to='/register'>Register</Link></p>
                    </form>
                    {/* {
                loginError && <p className="text-red-700">{loginError}</p>
            }
            {
                success && <p className="text-green-600">{success}</p>
            } */}

                </div>
            </div>
        </div>
    );
};

export default Login;