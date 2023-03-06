import { UseProductContext } from "../../Context/ProductContext";
import ModalRightCol from "../SingleProductPage/ModalRightCol";
import ModalLeftCol from "./ModalLeftCol";

const ModalProduct = () => {
  const { openModal, isOpenModal, singleProduct } = UseProductContext();

  document.body.style.overflow = isOpenModal ? "hidden" : "auto";

  const handleClick = (e) => {
    if (e.target.closest(".modal-body")) {
      return;
    } else {
      openModal();
    }
  };

  return (
    <div
      className={`{${
        isOpenModal ? "opacity-100 visible" : "opacity-0 invisible"
      } fixed inset-0 w-full h-screen bg-black/30 py-20 overflow-auto z-30`}
      onClick={handleClick}
    >
      <div
        className={`${
          isOpenModal ? "scale-100" : "scale-0"
        } modal-body bg-white w-[90%] transition-all duration-300 mx-auto`}
      >
        {singleProduct.map((product) => (
          <div
            className="inner-modal w-full h-screen z-10 relative overflow-auto py-8 grid grid-cols-2 gap-4 p-4"
            key={product.id}
          >
            <ModalLeftCol {...product} openModal={openModal} />
            <ModalRightCol {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalProduct;
