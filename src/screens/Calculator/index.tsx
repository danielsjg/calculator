// React
import React from 'react';

// Mobx
import { observer } from 'mobx-react';
import { store } from '~/store';

// Hooks
import useCalculator from './useCalculator';

// Components
import {
  Container,
  SafeArea,
  Input,
  Button,
  OperatorButton,
  Text,
  RowContent,
  LogsContainer,
  ScrollContainer,
  LogText,
} from './styles';

const Calculator: React.FC = () => {
  const { logs, clearLogs } = store.calculatorStore;
  const { n1, n2, operator, setN1, setN2, setOperator, calculate } =
    useCalculator();

  return (
    <Container>
      <SafeArea>
        <Input
          placeholder="Insert N1"
          keyboardType="numeric"
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          value={String(n1 ?? '')}
          onChangeText={text => {
            const replacedText = text.replace(/[^0-9]/g, '');
            if (replacedText !== '') {
              setN1(Number(replacedText));
            } else {
              setN1(undefined);
            }
          }}
        />
        <RowContent>
          <OperatorButton
            selected={operator === '+'}
            onPress={() => {
              setOperator('+');
            }}
          >
            <Text selected={operator === '+'}>+</Text>
          </OperatorButton>
          <OperatorButton
            selected={operator === '-'}
            onPress={() => {
              setOperator('-');
            }}
          >
            <Text selected={operator === '-'}>-</Text>
          </OperatorButton>
          <OperatorButton
            selected={operator === 'x'}
            onPress={() => {
              setOperator('x');
            }}
          >
            <Text selected={operator === 'x'}>x</Text>
          </OperatorButton>
          <OperatorButton
            selected={operator === '/'}
            onPress={() => {
              setOperator('/');
            }}
          >
            <Text selected={operator === '/'}>/</Text>
          </OperatorButton>
        </RowContent>
        <Input
          placeholder="Insert N2"
          keyboardType="numeric"
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          value={String(n2 ?? '')}
          onChangeText={text => {
            const replacedText = text.replace(/[^0-9]/g, '');
            if (replacedText !== '') {
              setN2(Number(replacedText));
            } else {
              setN2(undefined);
            }
          }}
        />
        <Button onPress={calculate}>
          <Text selected>CALCULATE</Text>
        </Button>
        <LogsContainer>
          <ScrollContainer>
            <Text>Logs</Text>
            {logs.map(log => (
              <LogText key={log.id}>
                {`${log.n1} ${log.operator} ${log.n2} = ${log.result.toFixed(
                  2,
                )}`}
              </LogText>
            ))}
          </ScrollContainer>
        </LogsContainer>
        <Button onPress={clearLogs}>
          <Text selected>CLEAR LOGS</Text>
        </Button>
      </SafeArea>
    </Container>
  );
};

export default observer(Calculator);
