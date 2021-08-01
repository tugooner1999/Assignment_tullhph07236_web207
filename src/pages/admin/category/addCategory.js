import React from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const AddCategory = (props) => {
    console.log(props);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();

    const onSubmit = (data) => {
        const category = {
            id: Math.random().toString(5).substring(2),
            ...data
        }
        props.onAddCate(category);
        history.push("/admin/categories")
    }
    return (
        <>
            <br></br>
            <div className="page-wrapper">
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h1 className="page-title">Thêm danh mục</h1>
                        </div>
                    </div>
                    {/* /.col-lg-12 */}
                </div>
            </div>
            <br></br>
            <form className="container col-md-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label h4">Tên danh mục</label>
                    <input type="text" className="form-control"
                        {...register("name", {required: true, minLength: 3})}
                    />
                    {errors.name && errors.name.type === "required" && <span className="d-block text-danger">Tên danh mục không được bỏ trống</span>}
                    {errors.name && errors.name.type === "minLength" && <span className="d-block text-danger">Tên danh mục phải nhiều hơn 3 kí tự</span>}
                </div>
                <div className="App">
                    <button className="btn btn-primary" type="submit">
                        Thêm danh dục
                    </button>
                    <Link
                        to="/admin/categories"
                        type="button"
                        style={{ marginLeft: '10px', color: '#fff' }}
                        className="btn btn-danger">
                        Trở về
                </Link>
                </div>
            </form>
        </>
    )
}

export default AddCategory
