import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersOrdersAction } from "../actions/orderActions";

function OrdersPage() {
  const dispatch = useDispatch();

  const orderState = useSelector((state) => state.getUsersOrdersReducer);

  const { success, loading, orders } = orderState;

  console.log(orders);
  useEffect(() => {
    dispatch(getUsersOrdersAction());
  }, []);

  return (
    <div className="container">
      <h2 className="display-2 text-warning">Siparişlerim</h2>
      <hr className="border border-warning" />
      {orders.map((order) => (
        <div className="row border border-3 border-warning shadow-lg p-3 mb-5 bg-body-tertiary rounded bg-light text-warning">
          {order.orderItems.map((item) => (
            <>
              <div className="col-md-4">
                <p>{item.ad}</p>
              </div>
              <div className="col-md-4">
                <h4>Adres Bilgileri</h4>
                <p>Sokak: </p>
              </div>
              <div className="col-md-4"></div>
            </>
          ))}
        </div>
      ))}
    </div>
  );
}

export default OrdersPage;
