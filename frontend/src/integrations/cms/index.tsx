// Mock data for Vercel deployment (no backend needed)
const mockData: Record<string, any[]> = {
  partnerlogos: [],
  services: [],
  casestudies: [],
  testimonials: [],
  frequentlyaskedquestions: []
};

// CMS Service with mock data for standalone Vercel deployment
export class BaseCrudService {
  static async getAll<T>(collectionName: string): Promise<{ items: T[]; totalCount: number }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const items = (mockData[collectionName] || []) as T[];
    return { items, totalCount: items.length };
  }

  static async getById<T>(collectionName: string, id: string): Promise<T | null> {
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const items = mockData[collectionName] || [];
    const item = items.find((item: any) => item.id === id);
    return item as T || null;
  }

  static async create<T>(collectionName: string, data: Partial<T>): Promise<T | null> {
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const newItem = { ...data, id: Date.now().toString() } as T;
    if (!mockData[collectionName]) {
      mockData[collectionName] = [];
    }
    mockData[collectionName].push(newItem);
    return newItem;
  }

  static async update<T>(collectionName: string, id: string, data: Partial<T>): Promise<T | null> {
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const items = mockData[collectionName] || [];
    const index = items.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      items[index] = { ...items[index], ...data };
      return items[index] as T;
    }
    return null;
  }

  static async delete(collectionName: string, id: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const items = mockData[collectionName] || [];
    const index = items.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
      return true;
    }
    return false;
  }
}
