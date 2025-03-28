import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("이메일을 입력해주세요.")
    .email("이메일 형식으로 작성해 주세요."),
  password: z
    .string()
    .nonempty("비밀번호를 입력해주세요.")
    .min(8, "8자 이상 작성해 주세요."),
});

export const signupSchema = z
  .object({
    email: z
      .string()
      .nonempty("이메일을 입력해주세요.")
      .email("이메일 형식으로 작성해 주세요."),
    nickname: z
      .string()
      .nonempty("닉네임을 입력해주세요.")
      .max(10, "열 자 이하로 작성해주세요."),
    password: z
      .string()
      .nonempty("비밀번호를 입력해주세요.")
      .min(8, "8자 이상 입력해주세요."),
    confirmPassword: z.string().nonempty("비밀번호 확인을 입력해주세요."),
    terms: z
      .boolean()
      .refine((val) => val === true, "이용약관에 동의해 주세요."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });
export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
