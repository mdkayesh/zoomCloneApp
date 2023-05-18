import React, { useEffect, useState } from "react";
import { UseProductContext } from "../../Context/ProductContext";
import ProductStyle1 from "./ProductStyle1";
import { BiEdit } from "react-icons/bi";
import { db } from "../../Firebase/Firebase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import {
  ref,
  deleteObject,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
// -------
import { v4 as uuid } from "uuid";
import { storage } from "../../Firebase/Firebase";
import { BiImageAdd } from "react-icons/bi";
import { kids, men, women } from "../../Header/DeskDrop";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineCheck } from "react-icons/ai";

/* ==========================================================================================
    INTENTIONALY I HAVEN'T USE ENY THIRD PARTY LIBRARY TO HANDLE FORMS FOR PRACTICE PURPOSE
 ============================================================================================*/

const AllProducts = () => {
  const { products, editSingleProduct, singleProduct } = UseProductContext();
  const [uploadImg, setuploadImg] = useState(null);
  const [uploadHoverImg, setHoverImg] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState("");

  const colors = [
    "#ffffff",
    "#000000",
    "#F2F12F",
    "#EE9102",
    "#F12511",
    "#9E1847",
    "#7F01A7",
    "#3B019C",
    "#0243F1",
    "#038BC3",
    "#61A82F",
    "#C5DD29",
  ];
  // const [colors, setColors] = useState();
  const [UpdateProductData, setUpdateProductData] = useState({
    category: [],
    productImages: [],
    hoverImg: [],
    productName: "",
    discription: "",
    productPrize: 0,
    sizes: [],
    offer: "Yes",
    oldPrize: 0,
    color: [],
    stock: {},
    discount: 0,
    show: [],
    imgName: [],
    hoverImgName: [],
  });

  const [formIsOpen, setformIsOpen] = useState(false);

  useEffect(() => {
    if (uploadImg === null) {
      return;
    } else {
      uploadImg.forEach((img) => {
        if (img.name.includes(" ")) {
          return alert("Image name must have without space");
        } else {
          const imgName = uuid() + img.name.split(" ").join("%20");
          const imgRef = ref(storage, `ProductsImages/${imgName}`);
          uploadBytes(imgRef, img)
            .then((snapshot) => {
              getDownloadURL(snapshot.ref).then((url) => {
                setUpdateProductData((prev) => {
                  return {
                    ...UpdateProductData,
                    productImages: [...new Set([...prev.productImages, url])],
                    imgName: [...prev.imgName, imgName],
                  };
                });
                // setImgUrlList((prev) => [...new Set([...prev, url])]);
              });
            })
            .catch((err) => console.log(err));
        }
      });
    }
    return () => {
      return null;
    };
  }, [uploadImg]);

  // hover img

  useEffect(() => {
    if (uploadHoverImg === null) {
      return;
    } else {
      uploadHoverImg.forEach((img) => {
        if (img.name.includes(" ")) {
          return alert("image name must have without space");
        } else {
          const imgName = uuid() + img.name.split(" ").join("%20");
          const imgRef = ref(storage, `ProductsImages/${imgName}`);
          uploadBytes(imgRef, img)
            .then((snapshot) => {
              getDownloadURL(snapshot.ref).then((url) => {
                setUpdateProductData({
                  ...UpdateProductData,
                  hoverImg: [url],
                  hoverImgName: [imgName],
                });
                // setHoverImgUrl([url]);
              });
            })
            .catch((err) => console.log(err));
        }
      });
    }

    return () => {
      return null;
    };
  }, [uploadHoverImg]);

  // hanglecheack

  const handleCheck = (e) => {
    let checkedArr = [...UpdateProductData.sizes];
    if (e.target.checked) {
      checkedArr = [...checkedArr, e.target.name];
    } else {
      checkedArr.splice(UpdateProductData.sizes.indexOf(e.target.name), 1);
    }

    setUpdateProductData({ ...UpdateProductData, sizes: checkedArr });
  };

  // handleShow

  const handleShow = (e) => {
    let show = [...UpdateProductData.show];

    if (e.target.checked) {
      show = [...show, e.target.name];
    } else {
      show.splice(UpdateProductData.show.indexOf(e.target.name), 1);
    }
    setUpdateProductData({ ...UpdateProductData, show: show });
  };

  // handleCategory

  const handleCategory = (e) => {
    let category = [...UpdateProductData.category];
    let label =
      e.target.options[e.target.selectedIndex].parentElement.getAttribute(
        "label"
      );
    category = [label, e.target.value];
    setUpdateProductData({ ...UpdateProductData, category });
  };

  // select colors
  const colorPicker = (e) => {
    const selectedColors = [...UpdateProductData.color];

    const index = selectedColors.indexOf(e.target.value);

    if (index === -1 && selectedColors.length < 4) {
      selectedColors.push(e.target.value);
    } else {
      selectedColors.splice(index, 1);
    }

    setUpdateProductData({
      ...UpdateProductData,
      color: [...new Set(selectedColors)],
    });
  };
  // delete the image

  const deleteImage = (Url, imgName, productImg) => {
    UpdateProductData[imgName].forEach((img) => {
      if (Url.includes(img)) {
        const imgRef = ref(storage, `ProductsImages/${img}`);
        deleteObject(imgRef)
          .then(() => {
            let unRemoved = UpdateProductData[productImg].filter(
              (item) => item !== Url
            );
            setUpdateProductData({
              ...UpdateProductData,
              [productImg]: unRemoved,
            });
          })
          .catch((err) => {
            let unRemoved = UpdateProductData[productImg].filter(
              (item) => Url !== item
            );

            setUpdateProductData({
              ...UpdateProductData,
              [productImg]: unRemoved,
            });

            console.log(err.message);
          });
      }

      return;
    });
  };

  // update the document

  const updateDocument = (event, id) => {
    event.preventDefault();

    const {
      productImages,
      hoverImg,
      hoverImgName,
      productName,
      productPrize,
      show,
      sizes,
      stock,
      offer,
      discription,
      imgName,
      category,
      color,
    } = UpdateProductData;

    const docRef = doc(db, "products", id);
    const confirm = window.confirm("Are you sure to update your product");

    if (confirm) {
      if (
        productImages.length > 0 &&
        hoverImg.length > 0 &&
        hoverImgName.length > 0 &&
        productName &&
        productPrize > 0 &&
        show &&
        sizes &&
        stock > 0 &&
        offer &&
        discription &&
        imgName.length > 0 &&
        category.length > 0 &&
        color.length > 0
      ) {
        updateDoc(docRef, UpdateProductData)
          .then(() => {
            setMessage("your product is updated");
          })
          .catch((err) => console.log(err.message));
      } else {
        setMessage("Please check all the data properly");
      }
    }
  };

  // delete the document

  const deleteProduct = (id) => {
    const confirm = window.confirm("Are you want to delete the product");

    if (confirm) {
      const docRef = doc(db, "products", id);
      deleteDoc(docRef)
        .then(() => {
          UpdateProductData.productImages.forEach((url) => {
            deleteImage(url, "imgName", "productImages");
          });
          UpdateProductData.hoverImg.forEach((url) => {
            deleteImage(url, "hoverImgName", "hoverImg");
          });
          alert("sucessfully deleted");
          setformIsOpen(false);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
    return;
  };

  return (
    <div className="px-4 py-24 w-full lg:ml-[20%] lg:w-[80%]">
      <h1 className="text-2xl font-semibold py-3 border-b border-b-gray-300 mb-3">
        All Products
      </h1>
      <div className="all-products grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="relative">
            <ProductStyle1 {...product} />
            <div
              className="edit-product absolute top-3 left-3 text-white bg-slate-800 text-4xl p-1 cursor-pointer transition-all duration-500"
              onClick={() => {
                setformIsOpen(!formIsOpen);
                editSingleProduct(product.id);
                setUpdateProductData({ ...product });
              }}
            >
              <BiEdit />
            </div>
          </div>
        ))}
      </div>

      <div
        className={`${
          formIsOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } updateForm product-form fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[80%] w-[80%] mx-auto z-20 bg-slate-50 border overflow-auto transition-all duration-300 py-6 px-4`}
      >
        {singleProduct.map((product) => (
          <form
            id="updateForm"
            key={product.id}
            onSubmit={(e) => updateDocument(e, product.id)}
          >
            <div className="delete-btn flex justify-between items-center">
              <p className="text-red-600">{error}</p>
              <button
                title="delete the product"
                type="button"
                className="deleteProduct btn-basic border border-red-600 hover:text-white hover:bg-red-600"
                onClick={() => deleteProduct(product.id)}
              >
                delete product
              </button>
            </div>
            <div className="overflow-hidden">
              <label
              // htmlFor="productImages"
              >
                Upload Your Product images here
              </label>
              <div className="relative h-[200px] flex flex-col justify-center items-center mt-3 bg-[#F7F9FB] rounded-xl border-2 border-dashed border-sky-200">
                <span className="text-5xl mb-2">
                  <BiImageAdd />
                </span>
                <p>Click here or drop files to upload</p>
                <input
                  type="file"
                  name="productImages"
                  id="updateproductImages"
                  className="opacity-0 h-full w-full absolute top-0 left-0 cursor-pointer"
                  multiple
                  onChange={(e) => {
                    setuploadImg([...new Set([...e.target.files])]);
                  }}
                />
              </div>
              <div className="overflow-hidden m-auto mt-3 ">
                <div className="flex gap-3 overflow-auto">
                  {UpdateProductData.productImages.map((url, index) => (
                    <div
                      className="min-w-[130px] h-[120px] bg-cyan-50 p-2 relative"
                      key={index}
                    >
                      <img
                        src={url}
                        alt="pruduct-images"
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="deleteImg absolute right-0 top-0 bg-red-700 text-white rounded-full text-2xl cursor-pointer"
                        onClick={() =>
                          deleteImage(url, "imgName", "productImages")
                        }
                      >
                        <TiDeleteOutline />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="overflow-hidden">
              <label
              // htmlFor="productImages"
              >
                Upload Your Product hover images here
              </label>
              <div className="relative h-[200px] flex flex-col justify-center items-center mt-3 bg-[#F7F9FB] rounded-xl border-2 border-dashed border-sky-200">
                <span className="text-5xl mb-2">
                  <BiImageAdd />
                </span>
                <p>Click here or drop files to upload</p>
                <input
                  type="file"
                  name="hoverImg"
                  id="updatehoverImg"
                  className="opacity-0 h-full w-full absolute top-0 left-0 cursor-pointer"
                  onChange={(e) => {
                    setHoverImg([...new Set([...e.target.files])]);
                  }}
                />
              </div>
              <div className="overflow-hidden m-auto mt-3 ">
                <div className="flex gap-3 overflow-auto">
                  {UpdateProductData.hoverImg.map((url, index) => (
                    <div
                      className="min-w-[130px] h-[120px] bg-cyan-50 p-2 relative"
                      key={index}
                    >
                      <img
                        src={url}
                        alt="pruduct-images"
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="deleteImg absolute right-0 top-0 bg-red-700 text-white rounded-full text-2xl cursor-pointer"
                        onClick={() =>
                          deleteImage(url, "hoverImgName", "hoverImg")
                        }
                      >
                        <TiDeleteOutline />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <label htmlFor="updateproductName">Product Name</label>
            <input
              required
              type="text"
              name="productName"
              id="updateproductName"
              value={UpdateProductData.productName}
              onChange={(e) =>
                setUpdateProductData({
                  ...UpdateProductData,
                  productName: e.target.value,
                })
              }
            />
            <label htmlFor="updatediscription">Discription</label>
            <textarea
              required
              name="discription"
              id="`updatediscription"
              cols="30"
              rows="5"
              value={UpdateProductData.discription}
              onChange={(e) =>
                setUpdateProductData({
                  ...UpdateProductData,
                  discription: e.target.value,
                })
              }
            ></textarea>
            <label htmlFor="updateproductPrize">Prize($)</label>
            <input
              required
              type="number"
              min={0}
              name="productPrize"
              id="updateproductPrize"
              value={UpdateProductData.productPrize}
              onChange={(e) =>
                setUpdateProductData({
                  ...UpdateProductData,
                  productPrize: e.target.value,
                })
              }
            />
            {/* Category */}
            <div className="category">
              <label htmlFor="category">Category</label>
              <select
                required
                name="category"
                onChange={handleCategory}
                className="cursor-pointer"
                value={UpdateProductData.category[1]}
              >
                {console.log()}
                <option>Select Category</option>
                <optgroup label="Men">
                  {men.map((item, index) => (
                    <option key={index}>{item.title}</option>
                  ))}
                </optgroup>
                <optgroup label="Women">
                  {women.map((item, index) => (
                    <option key={index}>{item.title}</option>
                  ))}
                </optgroup>
                <optgroup label="Kids">
                  {kids.map((item, index) => (
                    <option key={index}>{item.title}</option>
                  ))}
                </optgroup>
              </select>
            </div>
            <div className="sizes">
              <label htmlFor="">Product Sizes</label>
              <div className="flex gap-2">
                {["xs", "sm", "md", "lg", "xl", "xxl"].map((size) => (
                  <div className="flex" key={size}>
                    <label htmlFor={`update${size}`} className="checkBox">
                      {size}:
                    </label>
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      name={size}
                      id={`update${size}`}
                      onChange={handleCheck}
                      checked={UpdateProductData.sizes.includes(size)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <label htmlFor="updateoffer">Offer</label>
            <select
              name="offer"
              id="updateoffer"
              className="cursor-pointer"
              onChange={(e) =>
                setUpdateProductData({
                  ...UpdateProductData,
                  offer: e.target.value,
                })
              }
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label htmlFor="updateoldPrize">Old Prize($)</label>
            <input
              required
              type="number"
              min={0}
              name="oldPrize"
              id="updateoldPrize"
              value={UpdateProductData.oldPrize}
              onChange={(e) =>
                setUpdateProductData({
                  ...UpdateProductData,
                  oldPrize: e.target.value,
                })
              }
            />

            {/* select colors */}
            <label>Colors(max-4)</label>
            <div className="flex gap-4 flex-wrap">
              {colors.map((color, index) => (
                <div
                  className={`${
                    UpdateProductData.color.includes(color)
                      ? "border border-primary scale-125 [&_svg]:block"
                      : "border-none [&_svg]:hidden"
                  } relative rounded-full overflow-hidden cursor-pointer transition-all h-8 w-8 shadow-[2px_2px_10px_rgba(0,_0,_0,_0.3)]`}
                  key={index}
                  style={{ backgroundColor: color }}
                >
                  <AiOutlineCheck className="absolute font-bold fill-slate-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <input
                    type="checkbox"
                    name="colorPicker"
                    value={color}
                    className="w-full h-full appearance-none opacity-0 cursor-pointer"
                    onChange={colorPicker}
                  />
                </div>
              ))}
            </div>
            <label htmlFor="updatestock">stock:</label>
            <input
              required
              type="number"
              min={0}
              name="stock"
              id="updatestock"
              value={UpdateProductData.stock}
              onChange={(e) =>
                setUpdateProductData({
                  ...UpdateProductData,
                  stock: e.target.value,
                })
              }
            />
            {/* where to show */}
            <div className="show">
              <label htmlFor="">Product Where to Show:</label>
              <div className="flex flex-wrap text-gray-700 gap-3">
                {["featured", "newArrivals", "bestSellers", "trending"].map(
                  (item, i) => (
                    <div
                      className="featured flex flex-row-reverse gap-0.5"
                      key={i}
                    >
                      <label htmlFor={`update${item}`} className="checkBox">
                        {item}
                      </label>
                      <input
                        className="cursor-pointer"
                        type="checkbox"
                        name={item}
                        id={`update${item}`}
                        onChange={handleShow}
                        checked={UpdateProductData.show.includes(item)}
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            <label htmlFor="updatediscount">
              Discount In Percent (1 or 10 ...)
            </label>
            <input
              type="number"
              min={0}
              name="discount"
              id="updatediscount"
              value={UpdateProductData.discount}
              className="cursor-pointer"
              onChange={(e) =>
                setUpdateProductData({
                  ...UpdateProductData,
                  discount: e.target.value,
                })
              }
            />
            {message && (
              <p
                className={`mt-2 p-2 w-fit rounded-lg text-white ${
                  message.includes("Please") ? "bg-red-500" : "bg-green-500"
                }`}
              >
                {message}
              </p>
            )}
            <div className="flex justify-between mt-5">
              <button
                type="button"
                className="btn-basic rounded-lg border border-btn_bg bg-btn_text text-btn_bg hover:bg-btn_bg hover:text-btn_text"
                onClick={() => setformIsOpen(!formIsOpen)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-basic rounded-lg bg-btn_bg text-btn_text hover:bg-btn_bg_hover hover:text-btn_text_hover"
              >
                update Product
              </button>
            </div>
          </form>
        ))}
      </div>

      {/* shadow */}

      <div
        className={`${
          formIsOpen ? "opacity-[1] visible" : "opacity-0 invisible"
        } fixed top-0 left-0 h-full w-full bg-black/25 z-10 transition-all duration-500`}
        onClick={() => setformIsOpen(!formIsOpen)}
      ></div>
    </div>
  );
};

export default AllProducts;
