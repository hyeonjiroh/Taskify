import { useState } from "react";

export const usePasswordVisibility = (initialVisibility = false) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(initialVisibility);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return { isPasswordVisible, togglePasswordVisibility };
};
