import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css';
import Routes from "./routes";
import { addCate, getAllCate, removeCate, updateCate } from "./api/categoryAPI";
import swal from "sweetalert";
import { addProduct, getAllProduct, removeProduct, updateProduct } from './api/productAPI';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);


  // hiển thị danh mục từ API
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getAllCate();
        setCategories(data);
      } catch (error) {
        console.log(error)
      }
    };
    getCategory();
  }, []);

  // thêm danh mục từ API
  const onHandleAddCate = async (item) => {
    swal({
      title: "Thêm thành công !",
      text: "Dữ liệu đang được cập nhật",
      buttonCancel: true,
      icon: "success",
      timer: 2000
    });
    try {
      const { data } = await addCate(item);
      setCategories([...categories, data]);
    } catch (error) {
      console.log(error);
    }
  }

  // xóa danh mục từ Api
  const onHandleRemovecate = (id) => {
    swal({
      title: "Bạn có chắc muốn xóa ?",
      text: "Nếu xóa bạn có thể mất vĩnh viễn dữ liệu",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal({
            title: "Xóa thành công !",
            text: "Dữ liệu đang được cập nhật",
            icon: "success",
            timer: 2000
          })
          removeCate(id);
          const newCategory = categories.filter((listCate) => listCate.id !== id);
          setCategories(newCategory);
        }
        else {
          swal({
            title: "Xóa thất bại !",
            text: "Dữ liệu hoàn lại như ban đầu",
            icon: "error",
            timer: 2000
          })
        }
      })
  }

  // cập nhật danh mục
  const onHandleEditCate = async (item) => {
    swal({
      title: "Cập nhật thành công <3",
      text: "Dữ liệu mới đang được cập nhật",
      icon: "success",
      timer: 2000
    });
    try {
      const { data } = await updateCate(item);
      const newCate = categories.map((cate) => cate.id == data.id ? data : cate);
      setCategories(newCate);
    } catch (error) {
      console.log(error)
    }
  }


  // hiển thị danh sách sản phẩm
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await getAllProduct();
        setProducts(data);
      } catch (error) {
        console.log(error)
      }
    }
    getProduct();
  }, [])

  // thêm sản phẩm
  const onHandleAddProduct = async (item) => {
    swal({
      title: "Thêm thành công <3",
      text: "Dữ liệu mới đang được cập nhật",
      icon: "success",
      timer: 2000
    })
    try {
      const { data } = await addProduct(item);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error)
    }
  }


  // xóa sản phẩm
  const onHandleRemoveProduct = (id) => {
    swal({
      title: "Bạn có chắc muốn xóa ? ",
      text: "Nếu xóa bạn có thể mất vĩnh viễn dữ liệu",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal({
            title: "Xóa thành công :3",
            text: "Dữ liệu đang được cập nhật",
            icon: "success",
            timer: 2000
          })
          removeProduct(id);
          const newProduct = products.filter((list) => list.id !== id);
          setProducts(newProduct);
        }
        else {
          swal({
            title: "Xóa thất bại -_-",
            text: "Dữ liệu hoàn về ban đầu",
            icon: "error",
            timer: 2000
          })
        }
      })
  }

  // cập nhật sản phẩm
  const onHandleEditPro = async (item) => {
    swal({
      title:"Cập nhật thành công <3",
      text: "Dữ liệu đang được cập nhật",
      icon: "success",
      timer: 2000
    })
    try{
      const { data } = await updateProduct(item);
      const newProduct = products.map((pro) => pro.id == data.id ? data : pro);
      setProducts(newProduct);
    }catch(error){
      console.log(error)
    }
  }

  return (
    <Routes categories={categories} onAddCate={onHandleAddCate} onRemoveCate={onHandleRemovecate} onUpdateCate={onHandleEditCate}
      products={products} onAddProduct={onHandleAddProduct} onRemoveProduct={onHandleRemoveProduct} onUpdateProduct={onHandleEditPro}
    />
  );
}

export default App;
