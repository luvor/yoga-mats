import { decrementCartItemById, incrementCartItemById, remove } from '../../store/cart.slice'
import { BsTruck } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

const CartItem = ({ product }) => {
  const dispatch = useDispatch()
  const { companyName, image, name, itemCount, id } = product

  return (
    <div className="flex h-[200px] border-b-[#ddd] border-b-[0.5px] p-5 mt-5 gap-5">
      {/* img */}
      <div className="bg-lightGrey1 w-[150px] h-[150px] flex justify-center items-center">
        <img src={image} alt="img" className="max-w-full max-h-full object-contain" />
      </div>

      {/* content */}
      <div className="flex flex-[50%] flex-col gap-1">
        <p className="text-[grey] w-[200px]">{companyName}</p>
        <h1 className="text-textColor font-semibold">{name}</h1>
      </div>

      {/* actions */}
      <div className="actions border-l-[1px] border-lightGrey2 h-[85%] flex flex-col justify-between pl-5">
        <div className="flex rounded-lg border border-[#ddd]">
          <button
            onClick={() => {
              itemCount > 1 && dispatch(decrementCartItemById(id))
            }}
            className={` {itemCount == 1 ? 'opacity-40' : ''}`}
          >
            -
          </button>
          <p>{itemCount}</p>
          <button
            onClick={() => {
              dispatch(incrementCartItemById(id))
            }}
          >
            +
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">{product.price.toFixed(2)}тг.</h1>
          <div className="py-1 px-2 rounded-lg bg-[red] text-center w-full text-[14px] text-white hover:opacity-60 transition cursor-pointer" onClick={() => dispatch(remove(id))}>
            -
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
