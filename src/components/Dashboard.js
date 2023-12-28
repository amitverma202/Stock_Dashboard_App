import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import Overview from "./Overview";
import Details from "./Details";
import Chart from "./Chart";
import Header from "./Header";
import StockContext from "../context/StockContext";
import { fetchStockDetails, fetchQuote } from "../utils/api/stock-api";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ onLogout }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);
  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log("-----------", error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        
        <Header name={stockDetails.companyName} />
        <div className="ml-auto">
          <button
            onClick={handleLogout}
            className="flex items-center p-2 bg-transparent border-none focus:outline-none space-x-0.5"
          >
            <FaSignOutAlt
              className={`text-xl ${darkMode ? "text-white" : "text-black"}`}
            />
            <span className={`ml-2 ${darkMode ? "text-white" : "text-black"}`}>
              Logout
            </span>
          </button>
        </div>
      </div>
      <div className="md:col-span-2 row-span-4">
        <Chart />
      </div>
      <div>
        <Overview
          symbol={stockSymbol}
          price={quote.iexClose}
          change={quote.iexOpen}
          changePercent={quote.iexMarketPercent}
          currency={stockDetails.currency}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={quote} />
      </div>
    </div>
  );
};

export default Dashboard;
