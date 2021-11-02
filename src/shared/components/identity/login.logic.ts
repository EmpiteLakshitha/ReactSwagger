import { UserIdentityClient, IConfig  } from "../../api/client";
import { setAuthToken } from "../../api/config";

import jwtDecode from "jwt-decode";

export async function loginAction() {
  console.log("login logic");
  let identityClient = new UserIdentityClient(new IConfig());
  

  let response = await identityClient.signIn("maheeka+111@empite.com","Maheeka@1234",1,false,null).then((response) => {
    return response;
  });

  setAuthToken(response.result.data?.token);
  return response;
}
