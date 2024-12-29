import { defineStore } from 'pinia';
import type { User } from '../types';
import { authService } from '../services/api/auth';
import { storageService } from '../services/storage';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async login(email: string, password: string) {
      try {
        this.loading = true;
        const { data, error } = await authService.login({ email, password });
        
        if (error) throw new Error(error);
        this.user = data;
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async register(email: string, password: string, username: string, name: string) {
      try {
        this.loading = true;
        const { data, error } = await authService.register({
          email,
          password,
          username,
          name,
        });
        
        if (error) throw new Error(error);
        this.user = data;
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async updateProfile(profile: Partial<User>) {
      try {
        this.loading = true;
        const { data, error } = await authService.updateProfile(this.user!.id, profile);
        
        if (error) throw new Error(error);
        this.user = data;
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async uploadAvatar(file: File) {
      try {
        this.loading = true;
        if (!this.user) throw new Error('User not authenticated');
        
        const avatarUrl = await storageService.uploadAvatar(this.user.id, file);
        if (!avatarUrl) throw new Error('Failed to upload avatar');
        
        await this.updateProfile({ avatarUrl });
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    logout() {
      this.user = null;
      this.error = null;
    },
  },
});