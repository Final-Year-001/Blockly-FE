/* eslint-disable @typescript-eslint/no-explicit-any */
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

export async function updateCode(tokens: Tokens, sandbox: any, code: string) {
  return httpClient.request({
    url: "sandbox/" + sandbox.name,
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokens.access_token}`,
      "Content-Type": "text/plain",
    },
    data: code,
  });
}
