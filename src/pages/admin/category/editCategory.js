import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailCate } from "../../../api/categoryAPI";

const UpdateCategory = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [categories, setCategories] = useState({});
    const history = useHistory();

    const { id } = useParams(); // lấy id trên đường dẫn

    // lấy dữ liệu trong API
    useEffect(() => {
        const getCategory = async () => {
            const { data } = await getDetailCate(id);
            setCategories(data);
            reset(data)
        }
        getCategory()
    }, [])

    const onSubmit = (data) => {
        const categories = {
            id: id,
            ...data
        }
        props.onUpdateCate(categories);
        history.push("/admin/categories");
    }
    return (
        <>
            <br></br>
            <div className="page-wrapper">
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h1 className="page-title">Chỉnh sửa danh mục</h1>
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
                        {...register("name", { required: true, minLength: 3 })}
                    />
                    {errors.name && errors.name.type === "required" && <span className="d-block text-danger">Tên danh mục không được bỏ trống</span>}
                    {errors.name && errors.name.type === "minLength" && <span className="d-block text-danger">Tên danh mục phải nhiều hơn 3 kí tự</span>}
                </div>
                <div className="App">
                    <button className="btn btn-primary" type="submit">
                        Cập nhật
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

export default UpdateCategory
