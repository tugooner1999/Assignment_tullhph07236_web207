import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAllCate } from '../../../api/categoryAPI';


const AddProduct = (props) => {
    const [categories, setCategories] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();

    const onSubmit = (data) => {
        const product = {
            id: Math.random().toString(4).substring(2),
            ...data
        }
        props.onAddProduct(product);
        history.push("/admin/products");
    }

    return (
        <>
            <br></br>
            <div className="page-wrapper">
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h1 className="page-title">Thêm sản phẩm</h1>
                        </div>
                    </div>
                    {/* /.col-lg-12 */}
                </div>
            </div>
            <br></br>
            <form className="container col-md-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label h4">Tên sản phẩm</label>
                    <input type="text" className="form-control"
                        {...register("name", {required: true, minLength: 3})}
                    />
                    {errors.name && errors.name.type === "required" && <span className="d-block text-danger">Tên sản phẩm không được bỏ trống</span>}
                    {errors.name && errors.name.type === "minLength" && <span className="d-block text-danger">Tên sản phẩm phải nhiều hơn 3 kí tự</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label h4">Giá sản phẩm</label>
                    <input type="text" className="form-control"
                        {...register("price", {required: true, min:5000})}
                    />
                    {errors.price && errors.price.type === "required" && <span className="d-block text-danger">Giá sản phẩm không được bỏ trống</span>}
                    {errors.price && errors.price.type === "min" && <span className="d-block text-danger">Giá sản phẩm phải lớn hơn 5000</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label h4">Danh mục</label>
                    <select className="form-control" {...register("category")}>
                        {
                            props.categories.map((item) => (
                                <option>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label h4">Mô tả</label>
                    <textarea type="text" className="form-control" cols="20"  rows="7" {...register("description", {required:true, minLength:5})}></textarea>
                    {errors.description && errors.description.type === "required" && <span className="d-block text-danger">Mô tả không được bỏ trống</span>}
                    {errors.description && errors.description.type === "minLength" && <span className="d-block text-danger">Mô tả phải nhiều hơn 5 kí tự</span>}
                </div>
                <div className="App">
                    <button className="btn btn-primary" type="submit">
                        Thêm sản phẩm
                    </button>
                    <Link
                        to="/admin/products"
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

export default AddProduct
