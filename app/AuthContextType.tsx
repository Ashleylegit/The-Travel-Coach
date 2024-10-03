'use client';
export interface AuthContextType {
  isLoggedIn: boolean;
  user: string | null;
  login: (email: string, password: string) => Promise<{ token: string; }>;
  logout: () => void;
}
