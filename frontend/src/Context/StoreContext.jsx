import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { menu_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "http://localhost:4000";
    const [food_list, setFoodList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + "/api/food/list");
            if (response.data && response.data.data) {
                setFoodList(response.data.data);
                console.log("Fetched food list:", response.data.data);
            } else {
                console.error("Unexpected response structure:", response.data);
            }
        } catch (error) {
            console.error("Error fetching food list:", error);
        }
    };

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        setCartItems(response.data.cartData);
    };

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                const storedToken = localStorage.getItem("token");
                setToken(storedToken);
                await loadCartData(storedToken);
            }
            console.log("Food list after fetching:", food_list);
        }
        loadData();
    }, []);

    const loginUser = async (data) => {
        const response = await axios.post(url + "/api/user/login", data);
        if (response.data.success) {
            const receivedToken = response.data.token;
            setToken(receivedToken);
            localStorage.setItem("token", receivedToken);
            await loadCartData(receivedToken);
        } else {
            throw new Error(response.data.message);
        }
    };

    const registerUser = async (data) => {
        const response = await axios.post(url + "/api/user/register", data);
        if (response.data.success) {
            const receivedToken = response.data.token;
            setToken(receivedToken);
            localStorage.setItem("token", receivedToken);
            await loadCartData(receivedToken);
        } else {
            throw new Error(response.data.message);
        }
    };

    const logoutUser = () => {
        localStorage.removeItem("token");
        setToken("");        // Clear the token
        setCartItems({});    // Clear the cart items
    };
    
    const contextValue = {
        url,
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems,
        loginUser,
        registerUser,
        logoutUser,  // Expose the logout function
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};
export default StoreContextProvider;