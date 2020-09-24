import React, { Component } from "react";
import "./App.css";
import { Login, OrderList } from "./shared/components";
import { loginAction } from "./shared/components/identity/login.logic";
import { orderListAction } from "./shared/components/orders/orderList/orderList.logic";

//import logo from './logo.svg';
const logo = require("./logo.svg") as string;

class App extends Component {
  state = {
    loginResponse: "",
    orderListResponse: "",
  };

  render() {
    const { loginResponse, orderListResponse } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>Restaurant APIs</p>
        </header>
        <body>
          <Login
            onClick={() =>
              loginAction().then((response) =>
                this.setState({ loginResponse: response })
              )
            }
            response={loginResponse}
          />
          <OrderList
            onClick={() =>
              orderListAction().then((response) =>
                this.setState({ orderListResponse: response })
              )
            }
            response={orderListResponse}
          />
        </body>
      </div>
    );
  }
}

export default App;
