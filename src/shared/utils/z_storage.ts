class ZStorage {
  private static instance: ZStorage;
  static readonly accessTokenKey: string = "accessToken";

  private constructor() {}

  static getInstance(): ZStorage {
    if (!ZStorage.instance) {
      ZStorage.instance = new ZStorage();
    }
    return ZStorage.instance;
  }

  static async getItem<T>(item: string): Promise<T | null> {
    try {
      const storedItem = localStorage.getItem(item);
      if (storedItem !== null) {
        return JSON.parse(storedItem);
      }
      return null;
    } catch (error) {
      console.error("Error getting item from localStorage:", error);
      return null;
    }
  }

  static async setItem(item: string, value: string): Promise<void> {
    try {
      localStorage.setItem(item, value);
    } catch (error) {
      console.error("Error setting item in localStorage:", error);
    }
  }
}

export default ZStorage;

