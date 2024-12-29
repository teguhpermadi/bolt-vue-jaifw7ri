import type { ApiResponse, LoginCredentials, RegisterData } from './types';
import type { User } from '../../types';

const dummyUser: User = {
  id: '1',
  email: 'user@example.com',
  username: 'johndoe',
  name: 'John Doe',
  avatarUrl: '',
};

export class AuthService {
  async login(credentials: LoginCredentials): Promise<ApiResponse<User>> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (credentials.email === 'user@example.com' && credentials.password === 'password') {
      return {
        data: dummyUser,
        error: null,
      };
    }
    
    return {
      data: null as any,
      error: 'Invalid credentials',
    };
  }

  async register(data: RegisterData): Promise<ApiResponse<User>> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: data.email,
      username: data.username,
      name: data.name,
      avatarUrl: '',
    };
    
    return {
      data: newUser,
      error: null,
    };
  }

  async updateProfile(userId: string, data: Partial<User>): Promise<ApiResponse<User>> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const updatedUser = {
      ...dummyUser,
      ...data,
    };
    
    return {
      data: updatedUser,
      error: null,
    };
  }
}

export const authService = new AuthService();