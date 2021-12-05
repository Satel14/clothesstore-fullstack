import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Payment() {
    const [product] = React.useState({
        name: "Tesla Roadster",
        price: 5700,
        description: "Cool car"
    });

    async function handleToken(token, addresses) {
        const response = await axios.post(
            "https://ry7v05l6on.sse.codesandbox.io/checkout",
            { token, product }
        );

        console.log("Response:", response.data);
    }

    return (
        <div className="container">
            <StripeCheckout
                stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                token={handleToken}
                amount={product.price * 100}
                name="Payment"
                billingAddress
                shippingAddress
            />
        </div>
    );
}
export default Payment