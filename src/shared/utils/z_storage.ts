import StringEncryptor from "./z_enryptor";

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

  static getItem<T>(item: string): T | null {
    try {
      const storedItem = localStorage.getItem(item);
      if (storedItem !== null) {
        const decrypt = StringEncryptor.decrypt(storedItem!);
        return decrypt;
      }
      return null;
    } catch (error) {
      console.error("Error getting item from localStorage:", error);
      return null;
    }
  }

  static async setItem(item: string, value: string): Promise<void> {
    try {
      const encrypt = StringEncryptor.encrypt(value);
      localStorage.setItem(item, encrypt);
    } catch (error) {
      console.error("Error setting item in localStorage:", error);
    }
  }
}

export default ZStorage;
