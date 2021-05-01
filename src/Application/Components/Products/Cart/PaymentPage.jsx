import React, { Component } from "react";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import { withStyles } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

class PaymentPage extends Component {
  state = {
    price: 215.0,
    delivery: 40.0,
  };

  makePayment = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Not initiated yet");
      return;
    }
    const data = await fetch("http://042898a0b92e.ngrok.io/createOrder", {
      method: "POST",
    }).then((r) => r.json());
    console.log(data);
    var options = {
      key: "rzp_test_P976FIz2rt8SnC",
      amount: data.totalAmmount,
      currency: "INR",
      name: data.name,
      description: data.description,
      image: "",
      order_id: data.orderId,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Gaurav Kumar",
      },
      theme: {
        color: "#F37254",
      },
    };
    var rzp = new window.Razorpay(options);
    rzp.open();
  };
  render() {
    const { price, delivery } = this.state;
    return (
      <Card style={{ padding: 10 }}>
        <div
          style={{
            fontSize: 14,
            color: "#808080",
            fontWeight: 600,
          }}
        >
          PAYMENT DETAILS
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: 16,
            marginTop: 15,
          }}
        >
          <div>M.R.P. Total</div>
          <div>{"Rs." + price}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: 16,
            marginTop: 15,
          }}
        >
          <div>Delivery Charges</div>
          <div>{"Rs." + delivery}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: 16,
            marginTop: 15,
          }}
        >
          <div>Total Ammount</div>
          <div>{"Rs." + (price + delivery)}</div>
        </div>
        <div style={{ textAlign: "center", marginTop: 15 }}>
          <Button onClick={() => this.makePayment()} round color="info">
            Proceed
          </Button>
        </div>
      </Card>
    );
  }
}

export default PaymentPage;
