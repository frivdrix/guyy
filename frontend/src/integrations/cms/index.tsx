import axios from 'axios';

// Get backend URL from environment variable
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';

// Real CMS Service connected to backend API
export class BaseCrudService {
  static async getAll<T>(collectionName: string): Promise<{ items: T[]; totalCount: number }> {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/${collectionName}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${collectionName}:`, error);
      return { items: [], totalCount: 0 };
    }
  }

  static async getById<T>(collectionName: string, id: string): Promise<T | null> {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/${collectionName}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${collectionName} by id:`, error);
      return null;
    }
  }

  static async create<T>(collectionName: string, data: Partial<T>): Promise<T | null> {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/${collectionName}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error creating ${collectionName}:`, error);
      return null;
    }
  }

  static async update<T>(collectionName: string, id: string, data: Partial<T>): Promise<T | null> {
    try {
      const response = await axios.put(`${BACKEND_URL}/api/${collectionName}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating ${collectionName}:`, error);
      return null;
    }
  }

  static async delete(collectionName: string, id: string): Promise<boolean> {
    try {
      await axios.delete(`${BACKEND_URL}/api/${collectionName}/${id}`);
      return true;
    } catch (error) {
      console.error(`Error deleting ${collectionName}:`, error);
      return false;
    }
  }
}
