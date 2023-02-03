class StorageService {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  get() {
    if (typeof localStorage === "undefined") {
      return;
    }
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : null;
  }

  set(value: unknown) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }
}

export default StorageService;
