import APIError from "../errors/api";
import { httpAuthClient } from "../helpers/axios";

interface LoginParams {
  username: string;
  password: string;
}

export async function loginWithUsernameAndPassword({
  username,
  password,
}: LoginParams) {
  const params = new URLSearchParams();

  params.append("grant_type", "password");
  params.append("username", username);
  params.append("password", password);
  params.append("client_id", "blockly-dev");
  params.append("scope", "openid");

  let res = await httpAuthClient.post(
    "/realms/blockly/protocol/openid-connect/token",
    params
  );

  if (res.status != 200) {
    throw new APIError(res.status);
  }

  return res.data
}
