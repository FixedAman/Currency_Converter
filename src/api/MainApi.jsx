import axios from "axios";

const api = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/12f92d44d28b4861869563d5/",
});
// api.get(`pair/${first}/${second}/${amount}`)
export const currencyConverter = async (first, second, amount) => {
  try {
    const res = await api.get(`pair/${first}/${second}/${amount}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
