// Mock CMS Service
export class BaseCrudService<T> {
  private collectionName: string;
  private mockData: T[];

  constructor(collectionName: string, mockData: T[] = []) {
    this.collectionName = collectionName;
    this.mockData = mockData;
  }

  async query() {
    return {
      find: () => ({
        items: this.mockData,
        totalCount: this.mockData.length,
      }),
    };
  }

  async getById(id: string): Promise<T | undefined> {
    return this.mockData.find((item: any) => item._id === id);
  }

  async create(data: Partial<T>): Promise<T> {
    const newItem = { ...data, _id: Date.now().toString() } as T;
    this.mockData.push(newItem);
    return newItem;
  }
}
