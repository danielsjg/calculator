interface IUseCalculator {
  n1?: number;
  n2?: number;
  operator?: string;
  setN1: React.Dispatch<React.SetStateAction<number | undefined>>;
  setN2: React.Dispatch<React.SetStateAction<number | undefined>>;
  setOperator: React.Dispatch<React.SetStateAction<'+' | '-' | 'x' | '/'>>;
  calculate: () => void;
}

export default IUseCalculator;
