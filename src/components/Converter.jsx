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
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cream-100">
      <div className="   text-cream-100 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Currency Converter
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-semibold">Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 rounded-lg text-blue-900 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex justify-between space-x-4">
            <div className="w-1/2">
              <label className="block text-lg font-semibold">From:</label>
              <select
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                className="w-full p-2 rounded-lg text-blue-900 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="AUD">AUD</option>
              </select>
            </div>
            <div className="w-1/2">
              <label className="block text-lg font-semibold">To:</label>
              <select
                value={second}
                onChange={(e) => setSecond(e.target.value)}
                className="w-full p-2 rounded-lg text-blue-900 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="AUD">AUD</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Convert
          </button>
        </form>
        {isFetching && (
          <p className="text-center text-blue-300 mt-4">Converting...</p>
        )}
        {error && (
          <p className="text-center text-red-500 mt-4">
            Error: {error.message}
          </p>
        )}
        {data && (
          <div className="text-center mt-6">
            <h2 className="text-xl font-semibold">
              Conversion Rate: {data.conversion_rate}
            </h2>
            <h2 className="text-xl font-semibold">
              Converted Amount: {data.conversion_result}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Converter;
