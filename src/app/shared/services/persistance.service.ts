import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data to localStorage: ', error);
    }
  }

  get(key: string): any {
    try {
      const localStorageValue = localStorage.getItem(key);
      return localStorageValue ? JSON.parse(localStorageValue) : null;
    } catch (error) {
      console.error('Error getting data from localStorage: ', error);
      return null;
    }
  }
}
