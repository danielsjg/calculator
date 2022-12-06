// React
import { useState, useCallback } from 'react';
import { Alert } from 'react-native';

// Mobx
import { store } from '~/store';

// Interfaces
import IUseCalculator from './IUseCalculator';

const useCalculator = (): IUseCalculator => {
  const [n1, setN1] = useState<number>();
  const [n2, setN2] = useState<number>();
  const [operator, setOperator] = useState<'+' | '-' | 'x' | '/'>('+');

  const { addLog } = store.calculatorStore;

  const calculate = useCallback(() => {
    if (n1 && n2 && operator) {
      let result: number = 0;

      switch (operator) {
        case '+': {
          result = n1 + n2;
          break;
        }
        case '-': {
          result = n1 - n2;
          break;
        }
        case 'x': {
          result = n1 * n2;
          break;
        }
        case '/': {
          result = n1 / n2;
          break;
        }
        default: {
          break;
        }
      }

      addLog({ n1, n2, operator, result });

      Alert.alert('Success!', `${n1} ${operator} ${n2} = ${result}`);

      setN1(undefined);
      setN2(undefined);
    } else {
      Alert.alert(
        'Something went wrong!',
        'Check the input values and try again.',
      );
    }
  }, [n1, n2, operator, addLog, setN1, setN2]);

  return {
    n1,
    setN1,
    n2,
    setN2,
    operator,
    setOperator,
    calculate,
  };
};

export default useCalculator;
