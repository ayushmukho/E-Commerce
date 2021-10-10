import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDQ5Njg2ODBjZmVhZWJhZjkwYmM1NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzg2MTc2NCwiZXhwIjoxNjM0MTIwOTY0fQ.0fG590raCvzv4eFfQf5c6D7QW2d2j7g5vO1quGdxmhs";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
