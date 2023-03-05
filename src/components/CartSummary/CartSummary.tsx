import React from 'react'

const CartSummary = ({ cartItems }) => {
  return (
    <div className={`summary flex flex-col flex-[30%] bg-white xl p-5 h-fit shadow-lg my-5 lg:my-0  {cartItems.length == 0 ? 'hidden' : ''}`}>
      <h1 className="font-medium text-lg sm:text-xl">Итого</h1>

      <div className="py-5 border-b-[#ddd] border-b-[0.5px]">
        {cartItems.map((product) => (
          <div key={product.id} className="flex justify-between mb-2">
            <div className="flex flex-col">
              <h1 className="text-sm">{product.name}</h1>
              <p className="text-[grey] text-xs w-fit">{product.companyName}</p>
            </div>
            <h1 className="text-[#004] ">
              {product.itemCount} x {product.price}тг.
            </h1>
          </div>
        ))}
      </div>

      <div>
        <div className="flex justify-between">
          <p className="text-[grey] mb-3">Сумма</p>
          <p className="text-[#004] mb-3">{cartItems?.reduce((acc, a) => acc + a.price * a.itemCount, 0)}тг.</p>
        </div>

        <div className="flex justify-between">
          <p className="text-[grey] mb-3">Доставка.</p>
          <p className="text-[#004] mb-3">2000 тг.</p>
        </div>
      </div>

      <div className="flex justify-between font-semibold text-[18px] px-1">
        <p className="">Сумма</p>
        <p className="">{cartItems?.reduce((acc, a) => acc + a.price * a.itemCount, 0) + 20}тг.</p>
      </div>

      <div className="flex justify-between gap-2 mt-5">
        <button className="rounded-lg outline-none border border-[#ddd] py-1 px-5 flex-[50%]">Отменить</button>
        <button className="rounded-lg outline-none border border-[#ddd] py-1 px-5 flex-[50%] bg-primaryColor text-white">Подтвердить</button>
      </div>
    </div>
  )
}

export default CartSummary
