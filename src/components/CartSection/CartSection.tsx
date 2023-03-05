import CartItem from '../CartItem/CartItem'

const CartSection = ({ cartItems }) => {
  return (
    <div className="cart flex flex-col flex-[70%] bg-white p-5 shadow-xl border border-lightGrey1">
      <div className="flex justify-between items-center w-full mb-5">
        <h1 className="font-medium text-lg sm:text-2xl">Корзина</h1>
      </div>
      <div>
        {cartItems.map((product) => (
          <CartItem product={product} />
        ))}

        {cartItems.length == 0 ? (
          <div className="flex flex-col justify-center items-center h-[300px]">
            <h1>No Products for now!</h1>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default CartSection
