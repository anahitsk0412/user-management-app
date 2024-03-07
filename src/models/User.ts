export interface User {
  id: number;
  username: string;
  phoneNumber: string;
  password?: string;
  confirmPassword?: string;
}
