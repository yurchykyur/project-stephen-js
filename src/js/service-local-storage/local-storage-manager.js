export default class LocalStorageManager {
  static getData(key) {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  }

  static saveData(key, value) {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  }
}

// за рахунок static створювати новий клас не потрібно, тільки імпортувати цей клас

// виклики будуть ось такі:
// LocalStorageManager.getData(key);
// LocalStorageManager.saveData(key, value);
