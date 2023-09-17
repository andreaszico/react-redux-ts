declare global {
  interface String {
    padZero(length: number): string;
    reverse(): string;
  }
}

String.prototype.padZero = function (length: number) {
  let d = String(this)
  while (d.length < length) {
    d = '0' + d;
  }
  return d;
};

String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};

export {}