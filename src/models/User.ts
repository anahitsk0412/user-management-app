export interface User {
  id: number;
  username: string;
  password: string;
  confirmPassword?: string;
  phoneNumber: string;
}
