// Libraries
import AsyncStorage from '@react-native-async-storage/async-storage';

// Mobx
import { create } from 'mobx-persist';
import CalculatorStore from './calculator/store';

class RootStore {
  private hydrate = create({
    storage: AsyncStorage,
    jsonify: true,
  });

  calculatorStore = new CalculatorStore();

  constructor() {
    this.hydrate('calculatorStore', this.calculatorStore);
  }
}

const store = new RootStore();
export { store };
