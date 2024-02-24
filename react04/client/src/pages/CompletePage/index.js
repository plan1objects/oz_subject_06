import React, { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../../context/OrderContext';
import axios from 'axios';

const CompletePage = () => {

    const [orderHistory, setOrderHistory] = useState([]);
    const [orderData] = useContext(OrderContext);

    useEffect(() => {
        orderCompleted(orderData);
    },[orderData]);

    const orderCompleted = async (orderData) => {
        try{
            const response = await axios.post('http://localhost:4000/order', orderData);
            setOrderHistory(response.data);
        }catch(error){
            console.error(error);
        }
    }
    

    return (
        <div>
            CompletePage
        </div>
    );
};

export default CompletePage;