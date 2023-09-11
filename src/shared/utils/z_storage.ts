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

  async getItem<T>(item: string): Promise<T | null> {
    try {
      const storedItem = localStorage.getItem(item);
      if (storedItem !== null) {
        const encryptedText = await StringEncryptor.decrypt(
            storedItem
        );
        return JSON.parse(encryptedText);
      }
      return null;
    } catch (error) {
      console.error("Error getting item from localStorage:", error);
      return null;
    }
  }

  async setItem<T>(item: string, value: T): Promise<void> {
    try {
      const encryptedText = await StringEncryptor.encrypt(
        JSON.stringify(value)
      );

      localStorage.setItem(item, encryptedText);
    } catch (error) {
      console.error("Error setting item in localStorage:", error);
    }
  }
}

export default ZStorage;

// Usage
// const zStorage = ZStorage.getInstance();

// Get the access token
// const accessToken = zStorage.getItem<string>(ZStorage.accessTokenKey);

// Set a new access token
// zStorage.setItem(ZStorage.accessTokenKey, "newAccessToken");
