import LiqpayBtn from "@/components/LiqpayBtn";
import { createHash } from "crypto";
import Link from "../../node_modules/next/link";
// import LiqPay from "liqpay";

//installation
//npm i git+https://github.com/liqpay/sdk-nodejs.git

const PRIVATE_KEY = process.env.LIQPAY_PRIVATE_KEY;

const obj = {
  public_key: "sandbox_i25243833427",
  version: 3,
  action: "pay",
  amount: "13",
  currency: "UAH",
  description: "Тестовий благодійний внесок - 1",
  order_id: "",
};

export default function Home() {
  // Buffer.from(str, 'base64') andbuf.toString('base64')
  // console.log("");
  const json_string = JSON.stringify(obj);
  // console.log("SOURCE DATA", json_string);
  // console.log("");

  const encode_bufer = Buffer.from(json_string, "utf-8");
  const encoded_data = encode_bufer.toString("base64");
  // console.log("ENCODED DATA", encoded_data);
  // console.log("");

  // const decode_bufer = Buffer.from(encoded_data, "base64");
  // const decode_data = decode_bufer.toString("utf-8");

  // console.log("DECODED DATA", decode_data);
  const sign_string = PRIVATE_KEY + encoded_data + PRIVATE_KEY;
  // console.log(sign_string);

  const signature_hash = createHash("sha1")
    .update(sign_string)
    .digest("base64");

  console.log("");
  console.log("HASH", signature_hash);

  // const onLiqpayClick = () => {
  //   console.log("click");
  // };

  return (
    <main>
      <LiqpayBtn data={encoded_data} signature={signature_hash} />
      {/* <button
        onClick={onLiqpayClick}
        className="border-2 border-orange-400 py-3 px-16 rounded-xl hover:bg-orange-400 transition hover:text-white"
      >
        PAY
      </button> */}

      {/* <form
        method="POST"
        action="https://www.liqpay.ua/api/3/checkout"
        accept-charset="utf-8"
      >
        <input
          type="hidden"
          name="data"
          value="eyJwdWJsaWNfa2V5IjoiaTAwMDAwMDAwIiwidmVyc2lvbiI6IjMiLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiIzIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6InRlc3QiLCJvcmRlcl9pZCI6IjAwMDAwMSJ9"
        />
        <input
          type="hidden"
          name="signature"
          value="wR+UZDC4jjeL/qUOvIsofIWpZh8="
        />
        <input type="image" src="//static.liqpay.ua/buttons/p1ru.radius.png" />
      </form> */}
    </main>
  );
}
