
import { AES, enc } from "crypto-js";
import { env } from "@shared/config/configs";

class StringEncryptor {
  static encrypt(plainText: string): string {
    const encrypt = AES.encrypt(plainText, env.SECRET_KEY!).toString();
    return encrypt;
  }

  static decrypt(encryptedText: string): any {
    var bytes = AES.decrypt(encryptedText, env.SECRET_KEY!);
    var decryptedData = bytes.toString(enc.Utf8);
    
    return JSON.parse(decryptedData);
  }
}

export default StringEncryptor;
