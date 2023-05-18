import React, { useState, useEffect } from "react";
import { storage } from "../../Firebase/Firebase";
import { v4 as uuid } from "uuid";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { addDoc } from "firebase/firestore";
import { productsRef } from "../../Firebase/Firebase";
import { BiImageAdd } from "react-icons/bi";
import { kids, men, women } from "../../Header/DeskDrop";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineCheck } from "react-icons/ai";

/* ==========================================================================================
    INTENTIONALY I HAVEN'T USE ENY THIRD PARTY LIBRARY TO HANDLE FORMS FOR PRACTICE PURPOSE
 ============================================================================================*/

const AddProduct = () => {
  const [uploadImg, setuploadImg] = useState(null);
  const [uploadHoverImg, setHoverImg] = useState(null);
  const [message, setMessage] = useState(null);
  const [colors, setColors] = useState([
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
  ]);
  const [productData, setProductData] = useState({
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

  //   const urlListRef = ref(storage, "ProductsImages/");

  useEffect(() => {
    if (uploadImg === null) {
      return;
    } else {
      uploadImg.forEach((img) => {
        if (img.name.includes(" ")) {
          return alert("image name must have without space");
        } else {
          const imgName = uuid() + img.name;

          const imgRef = ref(storage, `ProductsImages/${imgName}`);
          uploadBytes(imgRef, img)
            .then((snapshot) => {
              getDownloadURL(snapshot.ref).then((url) => {
                setProductData((prev) => {
                  return {
                    ...productData,
                    productImages: [...new Set([...prev.productImages, url])],
                    imgName: prev.imgName
                      ? [...prev.imgName, imgName]
                      : [imgName],
                  };
                });
                // setImgUrlList((prev) => [...new Set([...prev, url])]);
              });
            })
            .catch((err) => console.log(err));
        }
      });
    }

    return () => null;
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
          const imgName = uuid() + img.name;
          const imgRef = ref(storage, `ProductsImages/${imgName}`);
          uploadBytes(imgRef, img)
            .then((snapshot) => {
              getDownloadURL(snapshot.ref).then((url) => {
                setProductData({
                  ...productData,
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

    return () => null;
  }, [uploadHoverImg]);

  const addProductData = (e) => {
    e.preventDefault();

    const {
      productImages,
      hoverImg,
      productName,
      discription,
      productPrize,
      sizes,
      offer,
      color,
      stock,
      category,
    } = productData;

    if (
      productImages.length > 0 &&
      hoverImg.length > 0 &&
      productName &&
      discription &&
      productPrize > 0 &&
      sizes &&
      offer &&
      color.length > 0 &&
      stock > 0 &&
      category.length > 0
    ) {
      addDoc(productsRef, { ...productData })
        .then(() => {
          setProductData({
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
            stock: 0,
            newProduct: "Yes",
            onSale: "Yes",
            discount: 0,
            show: [],
          });
          setColors([]);
          setMessage("Your Product is Created");
          e.target.reset();
        })
        .catch((err) => console.log(err.message));
    } else {
      setMessage("please fill all the data field..!");
    }
  };

  // hanglecheack

  const handleCheck = (e) => {
    let checkedArr = [...productData.sizes];
    if (e.target.checked) {
      checkedArr = [...checkedArr, e.target.name];
    } else {
      checkedArr.splice(productData.sizes.indexOf(e.target.name), 1);
    }

    setProductData({ ...productData, sizes: checkedArr });
  };

  // handleShow

  const handleShow = (e) => {
    let show = [...productData.show];

    if (e.target.checked) {
      show = [...show, e.target.name];
    } else {
      show.splice(productData.show.indexOf(e.target.name), 1);
    }
    setProductData({ ...productData, show: show });
  };

  // handleCategory

  const handleCategory = (e) => {
    let category = [...productData.category];
    let label =
      e.target.options[e.target.selectedIndex].parentElement.getAttribute(
        "label"
      );
    category = [label, e.target.value];
    setProductData({ ...productData, category });
  };

  // const colorPicker = (id, e) => {
  //   const upDatedColors = colors.map((color) => {
  //     if (color.id === id) {
  //       return { ...color, color: e.target.value };
  //     }
  //     return color;
  //   });
  //   setColors(upDatedColors);

  //   // make array from color pickers

  //   const coloArr = [];

  //   colors.forEach((color) => {
  //     if (color.color) {
  //       coloArr.push(color.color);
  //     }
  //     return;
  //   });

  //   setProductData({ ...productData, color: coloArr });
  // };

  // delete the image

  const colorPicker = (e) => {
    const selectedColors = [...productData.color];

    const index = selectedColors.indexOf(e.target.value);

    if (index === -1 && selectedColors.length < 4) {
      selectedColors.push(e.target.value);
    } else {
      selectedColors.splice(index, 1);
    }

    setProductData({ ...productData, color: [...new Set(selectedColors)] });
  };

  const deleteImage = (Url, imgName, productImg) => {
    productData[imgName].forEach((img) => {
      if (Url.includes(img)) {
        const imgRef = ref(storage, `ProductsImages/${img}`);
        deleteObject(imgRef)
          .then(() => {
            let unRemoved = productData[productImg].filter(
              (item) => item !== Url
            );
            setProductData({ ...productData, [productImg]: unRemoved });
          })
          .catch((err) => {
            let unRemoved = productData[productImg].filter(
              (item) => Url !== item
            );

            productData({
              ...productData,
              [productImg]: unRemoved,
            });

            console.log(err.message);
          });
      }

      return;
    });
  };

  return (
    <div className="add-product w-[100%] pt-24 px-5 lg:w-[80%] lg:ml-[20%] pb-32">
      <h1 className="text-xl py-2 border-b border-b-primary font-semibold">
        Add Product
      </h1>
      <div className="product-form">
        <form
          action=""
          className="w-full m-auto md:w-[70%]"
          onSubmit={addProductData}
        >
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
                required
                type="file"
                name="productImages"
                id="productImages"
                className="opacity-0 h-full w-full absolute top-0 left-0 cursor-pointer"
                multiple
                onChange={(e) => {
                  setuploadImg([...new Set([...e.target.files])]);
                }}
              />
            </div>
            <div className="overflow-hidden m-auto mt-3 ">
              <div className="flex gap-3 overflow-auto">
                {productData.productImages.map((url, index) => (
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
                required
                type="file"
                name="hoverImg"
                id="hoverImg"
                className="opacity-0 h-full w-full absolute top-0 left-0 cursor-pointer"
                onChange={(e) => {
                  setHoverImg([...new Set([...e.target.files])]);
                }}
              />
            </div>
            <div className="overflow-hidden m-auto mt-3 ">
              <div className="flex gap-3 overflow-auto">
                {productData.hoverImg.map((url, index) => (
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
          <label htmlFor="name">Product Name</label>
          <input
            required
            type="text"
            name="productName"
            id="productName"
            value={productData.productName}
            onChange={(e) =>
              setProductData({ ...productData, productName: e.target.value })
            }
          />
          <label htmlFor="discription">Discription</label>
          <textarea
            required
            name="discription"
            id="discription"
            cols="30"
            rows="5"
            value={productData.discription}
            onChange={(e) =>
              setProductData({ ...productData, discription: e.target.value })
            }
          ></textarea>
          <label htmlFor="productPrize">Prize($)</label>
          <input
            required
            type="number"
            min={0}
            name="productPrize"
            id="productPrize"
            value={productData.productPrize}
            onChange={(e) =>
              setProductData({ ...productData, productPrize: e.target.value })
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
            >
              <option value={true}>Select Category</option>
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
              <div className="xs flex">
                <label htmlFor="xs" className="checkBox">
                  XS:
                </label>
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  name="xs"
                  id="xs"
                  onChange={handleCheck}
                />
              </div>
              <div className="sm flex">
                <label htmlFor="sm" className="checkBox">
                  SM:
                </label>
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  name="sm"
                  id="sm"
                  onChange={handleCheck}
                />
              </div>
              <div className="md flex">
                <label htmlFor="md" className="checkBox">
                  MD:
                </label>
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  name="md"
                  id="md"
                  onChange={handleCheck}
                />
              </div>
              <div className="lg flex">
                <label htmlFor="lg" className="checkBox">
                  LG
                </label>
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  name="lg"
                  id="lg"
                  onChange={handleCheck}
                />
              </div>
              <div className="xl flex">
                <label htmlFor="xl" className="checkBox">
                  XL
                </label>
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  name="xl"
                  id="xl"
                  onChange={handleCheck}
                />
              </div>
              <div className="xxl flex">
                <label htmlFor="xxl" className="checkBox">
                  XXL
                </label>
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  name="xxl"
                  id="xxl"
                  onChange={handleCheck}
                />
              </div>
            </div>
          </div>
          <label htmlFor="offer">Offer</label>
          <select
            name="offer"
            id="offer"
            className="cursor-pointer"
            onChange={(e) =>
              setProductData({ ...productData, offer: e.target.value })
            }
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <label htmlFor="oldPrize">Old Prize($)</label>
          <input
            required
            type="number"
            min={0}
            name="oldPrize"
            id="oldPrize"
            value={productData.oldPrize}
            onChange={(e) =>
              setProductData({ ...productData, oldPrize: e.target.value })
            }
          />

          {/* select colors */}
          <label>Colors(max-4)</label>

          <div className="flex gap-4 flex-wrap">
            {colors.map((color, index) => (
              <div
                className={`${
                  productData.color.includes(color)
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

          <label htmlFor="stock">stock:</label>
          <input
            required
            type="number"
            min={0}
            name="stock"
            id="stock"
            value={productData.stock}
            onChange={(e) =>
              setProductData({ ...productData, stock: e.target.value })
            }
          />
          {/* where to show */}
          <div className="show">
            <label htmlFor="">Product Where to Show:</label>
            <div className="flex flex-wrap text-gray-700 gap-3">
              <div className="featured flex flex-row-reverse gap-0.5">
                <label htmlFor="featured" className="checkBox">
                  Featured
                </label>
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  name="featured"
                  id="featured"
                  onChange={handleShow}
                />
              </div>
              <div className="newArrivals flex flex-row-reverse gap-0.5">
                <label htmlFor="newArrivals" className="checkBox">
                  New Arrivals
                </label>
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  name="newArrivals"
                  id="newArrivals"
                  onChange={handleShow}
                />
              </div>
              <div className="bestSellers flex flex-row-reverse gap-0.5">
                <label htmlFor="bestSellers" className="checkBox">
                  Best Sellers
                </label>
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  name="bestSellers"
                  id="bestSellers"
                  onChange={handleShow}
                />
              </div>
              <div className="trending flex flex-row-reverse gap-0.5">
                <label htmlFor="trending" className="checkBox">
                  Trending
                </label>
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  name="trending"
                  id="trending"
                  onChange={handleShow}
                />
              </div>
            </div>
          </div>

          <label htmlFor="discount">Discount In Percent (1 or 10 ...)</label>
          <input
            type="number"
            min={0}
            name="discount"
            id="discount"
            value={productData.discount}
            className="cursor-pointer"
            onChange={(e) =>
              setProductData({ ...productData, discount: e.target.value })
            }
          />
          {message && (
            <p
              className={`mt-2 p-2 w-fit rounded-lg text-white ${
                message.includes("please") ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {message}
            </p>
          )}
          <div className="flex justify-between mt-5">
            <button
              type="button"
              className="btn-basic rounded-lg border border-btn_bg bg-btn_text text-btn_bg hover:bg-btn_bg hover:text-btn_text"
              onClick={() =>
                setProductData({
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
                })
              }
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-basic rounded-lg bg-btn_bg text-btn_text hover:bg-btn_bg_hover hover:text-btn_text_hover"
              onClick={addProductData}
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
