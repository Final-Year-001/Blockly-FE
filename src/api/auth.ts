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

  return res.data;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
}

export async function signupWithUsernameAndPassword(user: User) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(user);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  let res = await fetch(
    `${import.meta.env.VITE_API_ENDPOINT}/users`,
    requestOptions
  );

  if (res.status != 200) {
    throw new APIError(res.status);
  }
}
