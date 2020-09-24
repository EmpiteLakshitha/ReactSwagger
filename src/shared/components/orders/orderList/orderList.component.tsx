import { render } from "@testing-library/react";
import React from "react";
import ReactJson from "react-json-view";
import * as styles from "../../../styles/styles";
import { IOrderList } from "./orderList.interface";

const { container, titleStyle, buttonStyle, jsonEditorStyle } = styles.styles;

export interface Props {}

const OrderList = (props: IOrderList) => {
  const { onClick, response } = props;

  return (
    <div style={container}>
      <label style={titleStyle}>Order List</label>
      <button onClick={onClick} style={buttonStyle}>
        Try out now
      </button>
      <ReactJson
        src={response}
        theme="solarized"
        displayDataTypes={true}
        style={jsonEditorStyle}
      />
    </div>
  );
};

export { OrderList };
