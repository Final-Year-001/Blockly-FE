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

export async function saveProject(tokens: Tokens, id: string, code: any, lessonStep?: number) {
  let res = await httpClient.request({
    headers: {
      Authorization: `Bearer ${tokens.access_token}`,
    },
    url: "project/" + id || "?",
    data: { code, lessonStep },
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

export async function newProject(tokens: Tokens, data: any) {
  let res = await httpClient.request({
    headers: {
      Authorization: `Bearer ${tokens.access_token}`,
    },
    url: "project/new",
    data: data,
    method: "POST"
  });

  return res;
}

export async function getLessonById(tokens: Tokens, id: string) {
  let res = await httpClient.request({
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
      url: "lesson/" + id,
      method: "GET"
    });
  
    return res;
}

export async function saveLesson(tokens: Tokens, id: string, steps: any) {
  let res = await httpClient.request({
    headers: {
      Authorization: `Bearer ${tokens.access_token}`,
    },
    url: "lesson/" + id || "?",
    data: { steps },
    method: "POST"
  });

  return res.data;
}