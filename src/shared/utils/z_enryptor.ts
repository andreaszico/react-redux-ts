class StringEncryptor {
  private static async getKey(): Promise<CryptoKey> {
    const password = "AO1d3a123a123!@#!@s3asd23d8sd64saIA2S1#&^S*D^!@#YGDAY@#"; // Replace with your secret password
    const encoder = new TextEncoder();
    const secretData = new Uint8Array(encoder.encode(password));

    return await crypto.subtle.importKey("raw", secretData, "PBKDF2", false, [
      "deriveBits",
      "deriveKey",
    ]);
  }

  static async encrypt(plainText: string): Promise<string> {
    const key = await this.getKey();
    const encoder = new TextEncoder();
    const data = encoder.encode(plainText);
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const algorithm = {
      name: "PBKDF2",
      salt: salt,
      iterations: 100000,
      hash: "SHA-256",
    };

    const derivedKey = await crypto.subtle.deriveKey(
      algorithm,
      key,
      { name: "AES-GCM", length: 256 }, // Specify the key length (in bits)
      false,
      ["encrypt", "decrypt"]
    );

    const cipherText = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv: iv },
      derivedKey,
      data
    );

    const encryptedData = new Uint8Array(
      salt.length + iv.length + cipherText.byteLength
    );
    encryptedData.set(salt, 0);
    encryptedData.set(iv, salt.length);
    encryptedData.set(new Uint8Array(cipherText), salt.length + iv.length);

    // Convert the Uint8Array to an array of numbers
    const encryptedDataArray = Array.from(encryptedData);

    return btoa(String.fromCharCode.apply(null, encryptedDataArray));
  }

  static async decrypt(encryptedText: string): Promise<string> {
    const key = await this.getKey();
    const decodedData = atob(encryptedText);
    const data = new Uint8Array(decodedData.length);
    for (let i = 0; i < decodedData.length; i++) {
      data[i] = decodedData.charCodeAt(i);
    }

    const salt = data.slice(0, 16);
    const iv = data.slice(16, 28);
    const cipherText = data.slice(28);

    const algorithm = {
      name: "AES-GCM",
      iv: iv,
    };
    
    const derivedKey = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt,
        iterations: 100000,
        hash: "SHA-256",
      },
      key,
      { name: "AES-GCM", length: 256 }, // Specify the key length (in bits)
      false,
      ["encrypt", "decrypt"]
    );

    const decryptedData = await crypto.subtle.decrypt(
      algorithm,
      derivedKey,
      cipherText
    );

    return new TextDecoder().decode(decryptedData);
  }
}

export default StringEncryptor;
