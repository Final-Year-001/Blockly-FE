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
