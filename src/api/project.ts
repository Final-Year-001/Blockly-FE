import { httpClient } from "../helpers/axios";
import { Tokens } from "../state/auth";

export async function getAllProjects(tokens: Tokens) {
  let res = await httpClient.request({
    headers: {
      Authorization: `Bearer ${tokens.access_token}`,
    },
    url: "project",
  });

  return res.data;
}

export async function saveProject(tokens: Tokens, id: string, code: any) {
  let res = await httpClient.request({
    headers: {
      Authorization: `Bearer ${tokens.access_token}`,
    },
    url: "project/" + id || "?",
    data: { code },
    method: "POST"
  });

  return res.data;
}

export async function getProjectById(tokens: Tokens, id: string) {
    let res = await httpClient.request({
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
        url: "project/" + id,
        method: "GET"
      });
    
      return res;
}