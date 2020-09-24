import { render } from "@testing-library/react";
import React from "react";
import { ILogin } from "./login.interface";
import ReactJson from "react-json-view";
import * as styles from "../../styles/styles";

const { container, titleStyle, buttonStyle, jsonEditorStyle } = styles.styles;

export interface Props {}

const Login = (props: ILogin) => {
  const { onClick, response } = props;

  return (
    <div style={container}>
      <label style={titleStyle}>Login</label>
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

export { Login };
