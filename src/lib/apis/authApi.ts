import { LoginFormData, SignupFormData } from "@/lib/utils/validationSchema";
import { BASE_URL } from "@/lib/constants/urls";

export async function fetchLogin(data: LoginFormData) {
  const requestBody = {
    email: data.email,
    password: data.password,
  };

  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(requestBody),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      JSON.stringify({
        status: response.status,
        message: errorData.message || "로그인에 실패했습니다.",
      })
    );
  }

  return response.json();
}

export async function fetchSignup(data: SignupFormData) {
  const requestBody = {
    email: data.email,
    password: data.password,
    nickname: data.nickname,
  };

  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(requestBody),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      JSON.stringify({
        status: response.status,
        message: errorData.message || "회원가입에 실패했습니다.",
      })
    );
  }

  return response.json();
}
