"use client";

import { FC } from "react";

interface ILiqpayBtnProps {
  data: string;
  signature: string;
}

const LiqpayBtn: FC<ILiqpayBtnProps> = ({ data, signature }) => {
  //   const onLiqpayClick = () => {
  //     fetch("https://www.liqpay.ua/api/3/checkout");
  //   };

  return (
    // <button
    //   onClick={onLiqpayClick}
    //   className="border-2 border-orange-400 py-3 px-16 rounded-xl hover:bg-orange-400 transition hover:text-white"
    // >
    //   PAY
    // </button>

    <form
      method="POST"
      action="https://www.liqpay.ua/api/3/checkout"
      acceptCharset="utf-8"
    >
      <input type="hidden" name="data" value={data} />
      <input type="hidden" name="signature" value={signature} />

      <button
        type="submit"
        className="border-2 border-orange-400 py-3 px-16 rounded-xl hover:bg-orange-400 transition hover:text-white"
      >
        PAY
      </button>
    </form>
  );
};

export default LiqpayBtn;
