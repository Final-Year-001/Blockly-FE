import { httpClient } from "../helpers/axios";
import { Tokens } from "../state/auth";

export async function getAllSandBoxes(tokens: Tokens) {
  return httpClient.request({
    url: "sandbox/all",
    method: "GET",
    headers: {
      Authorization: `Bearer ${tokens.access_token}`,
    },
  });
}

export async function createSandbox(tokens: Tokens) {
  return httpClient.request({
    url: "sandbox",
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokens.access_token}`,
    },
  });
}
