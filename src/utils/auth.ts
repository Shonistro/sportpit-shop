 
// src/utils/auth.ts
export const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('accessToken');
    return !!token;
  };
  
  export const logout = (): void => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
  };
  