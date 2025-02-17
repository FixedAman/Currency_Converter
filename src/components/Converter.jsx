import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { currencyConverter } from "../api/MainApi";

const Converter = () => {
  const [first, setFirst] = useState("USD");
  const [second, setSecond] = useState("INR");
  const [amount, setAmount] = useState(0);
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["currency", first, second, amount],
    queryFn: () => currencyConverter(first, second, amount),
    enabled: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
    console.log(data);
  };
  return (
    <>
      <div className="container">
        <h1>Currency Converter </h1>
        <div className="main_container">
          <form onSubmit={handleSubmit}>
            <span>Amount</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <select onChange={(e) => setFirst(e.target.value)}>
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="AUD">AUD</option>
            </select>
            to
            <select id="" onChange={(e) => setSecond(e.target.value)}>
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="AUD">AUD</option>
            </select>
            <button type="submit">Convert</button>
            {}
          </form>
        </div>
      </div>
    </>
  );
};
export default Converter;
