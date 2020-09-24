import { IdentityClient, IConfig, UserLoginRequest } from "../../api/client";
import { setAuthToken, setTenantId } from "../../api/config";

import jwtDecode from "jwt-decode";

export async function loginAction() {
  console.log("login logic");
  let identityClient = new IdentityClient(new IConfig());
  let body = new UserLoginRequest({
    email: "anuhas+new001@empite.com",
    password: "Password@123",
  });

  let response = await identityClient.login(body).then((response) => {
    return response;
  });

  const { token } = response.result;

  setAuthToken(token);

  let decodedToken = jwtDecode(token);

  setTenantId(decodedToken.TenantClaim);

  return response;
}
