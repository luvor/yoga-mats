import { ICartItem, add } from '../../store/cart.slice'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

const ProductCard = ({ product, isInCart }) => {
  const dispatch = useDispatch()

  const { image, name, price, desc } = product

  return (
    <div className="flex flex-col max-w-[260px] border border-darkGrey p-2" id="product__card">
      <div className=" p-1 relative flex items-center justify-center w-[250px] cursor-pointer">
        <img src={image} alt={name} className="h-[220px]  object-contain" />

        <div
          className={`cart-btn absolute border border-red top-3 right-3 p-1 text-[28px] bg-white rounded-[0.3rem] hover:bg-primaryColor hover:text-white  {isInCart && 'hidden'}`}
          onClick={() => {
            dispatch(add(product))
            // navigate("/cart");
          }}
        >
          <AiOutlineShoppingCart />
        </div>
      </div>

      <div className="pt-2 flex w-full justify-between">
        <p className="max-w-full font-bold">{name}</p>
      </div>
      <p className="text-[grey] text-sm w-[200px]">{desc.slice(0, 100)}</p>

      <p className="font-[600] text-lg">{price}тг.</p>
    </div>
  )
}

export default ProductCard
