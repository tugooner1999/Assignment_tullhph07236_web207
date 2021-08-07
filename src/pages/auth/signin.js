
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { signin } from '../../api/authAPI';
import { authenticate, isAuthenticated } from '../../auth';

const Signin = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const onSubmit = async (user) => {
        try {
            const { data } = await signin(user);
            authenticate(data); // set localStorage
            console.log(data);
            setSuccess(true);
            setError("");
        } catch (error) {
            setError(error.response.data);
        }
    };

    const redirectUser = () => {
        if (success) {
            const id = isAuthenticated().user.id; // lấy ID trong localStorage
            if (id == 1) {
                return <Redirect to="/screen" />; // admin
            } else {
                return <Redirect to="/homepage" />; // member
            }
        }
    };
    return (
        <div className="screen-wrapper" style={{padding:'100px 10px'}}>
            <div className="col-4 container auth-wrapper">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Đăng nhập</h1>
                </div>
                <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
                    {redirectUser()}
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" {...register("email", { required: true })} />
                        {errors.email && errors.email.type === "required" && <span className="d-block mt-2 text-danger">Email không được để trống</span>}
                        {error && <div className="d-block mt-2 text-danger">{error} <br></br>Email đã tồn tại</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Mật khẩu</label>
                        <input type="password" className="form-control" {...register("password", { required: true })} />
                        {errors.password && errors.password.type === "required" && <span className="d-block mt-2 text-danger">Mật khẩu không được để trống</span>}
                    </div>
                    <div className="App">
                        <button className="btn btn-primary">Đăng nhập</button>
                        <Link to="/homepage" className="btn btn-danger" style={{ marginLeft: '10px', color:'#fff' }}>Trở về</Link>
                        <p style={{marginTop:'10px'}}>Bạn chưa có tài khoản ? <Link to="/signup">Đăng ký ngay</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin
