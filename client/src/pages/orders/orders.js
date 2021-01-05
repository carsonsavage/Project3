import React, { useContext } from "react";
import "./orders.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Wrapper from "../../components/wrapper/wrapper";
import OrderSearch from "../../components/ordersPage/order-search/order-search.js";
import OrderDisplay from "../../components/ordersPage/prev-orders/prev-orders.js";
import UserContext from "../../util/userContext.js";

function Orders() {

    const { userState, handleUserInfoChange } = useContext(UserContext);

    return (
        <>
            <Wrapper>
                <div className="orders-header">
                    <h1 className="ui icon header">
                        <i className="massive box icon"></i>
                        <div className="content">Orders</div>
                    </h1>
                </div>
                <hr />
                {userState.isLoggedIn ? (
                    <>
                        <OrderSearch />
                        <OrderDisplay />
                    </>
                ) : (
                    <div className="ui placeholder segment">
                        <div className="ui icon header">
                            <i className="users icon"></i>
                            You need to login to see previous orders
                        </div>
                        <Link to="/login" className="react-link">
                            <div className="ui green huge button">Login</div>
                        </Link>
                    </div>
                )}
            </Wrapper>

            <Footer />
        </>
    );
}

export default Orders;
