// Mobx
import { observable, action, makeAutoObservable } from 'mobx';
import { persist } from 'mobx-persist';

// Interfaces
import { ICalculatorLog } from './type';

export default class CalculatorStore {
  constructor() {
    makeAutoObservable(this);
  }

  @persist
  private logID: number = 0;

  @observable
  @persist('list')
  logs: ICalculatorLog[] = [];

  @action
  addLog = ({
    n1,
    n2,
    operator,
    result,
  }: {
    n1: number;
    n2: number;
    operator: string;
    result: number;
  }) => {
    this.logID += 1;
    this.logs.push({ id: this.logID, n1, n2, operator, result });
  };

  @action
  clearLogs = () => {
    this.logs = [];
  };
}
