import { useState } from 'react';
import { useForm } from "react-hook-form";
import { signup } from '../../api/authAPI';
import { Link } from "react-router-dom";
import { authenticate } from "../../auth";

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const onSubmit = async (user) => {
        try {
            const { data } = await signup(user);
            authenticate(data); console.log(data);
            setSuccess(true);
            setError("");
        } catch (error) {
            setError(error.respone.data)
        }
    }
    return (
        <div className="screen-wrapper">
            <div className="col-4 container auth-wrapper">
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">Bạn đã đăng ký thành công. Click<Link to="/signin"> Vào đây </Link> để đăng nhập</div>}
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Đăng ký</h1>
                </div>
                <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">Họ và tên</label>
                        <input type="text" className="form-control" {...register("name", { required: true })} />
                        {errors.name && errors.name.type === "required" && <span className="d-block mt-2 text-danger">Tên không được để trống</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" {...register("email", { required: true })} />
                        {errors.email && errors.email.type === "required" && <span className="d-block mt-2 text-danger">Email không được để trống</span>}
                        {error && <div className="d-block mt-2 text-danger">{error} <br></br>Email đã tồn tại</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Số điện thoại</label>
                        <input type="number" className="form-control" {...register("phone", { required: true, minLength:10, maxLength:11 })} />
                        {errors.phone && errors.phone.type === "required" && <span className="d-block mt-2 text-danger">Số điện thoại không được để trống</span>}
                        {errors.phone && errors.phone.type === "minLength" && <span className="d-block mt-2 text-danger">Số điện thoại phải ít nhất 10 và nhiều nhất 11 ký tự số</span>}
                        {errors.phone && errors.phone.type === "maxLength" && <span className="d-block mt-2 text-danger">Số điện thoại phải ít nhất 10 và nhiều nhất 11 ký tự số</span>}
                        {error && <div className="d-block mt-2 text-danger">{error} <br></br>Số điện thoại đã tồn tại</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Địa chỉ</label>
                        <textarea  type="text" rows="4" cols="10" className="form-control" {...register("address", { required: true })}></textarea>
                        {errors.address && errors.address.type === "required" && <span className="d-block mt-2 text-danger">Địa chỉ không được để trống</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Mật khẩu</label>
                        <input type="password" className="form-control" {...register("password", { required: true })} />
                        {errors.password && errors.password.type === "required" && <span className="d-block mt-2 text-danger">Mật khẩu không được để trống</span>}
                    </div>
                    <div className="App">
                        <button className="btn btn-primary">Đăng ký</button>
                        <Link to="/homepage" className="btn btn-danger" style={{ marginLeft: '10px', color:'#fff' }}>Trở về</Link>
                        <p style={{marginTop:'10px'}}>Bạn đã có tài khoản ? <Link to="/signin">Đăng nhập</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
