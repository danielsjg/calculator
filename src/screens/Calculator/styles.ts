// Libraries
import styled from 'styled-components/native';

interface ISelected {
  selected?: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #525574;
  justify-content: center;
  align-items: center;
`;

export const SafeArea = styled.SafeAreaView`
  background-color: #525574;
`;

export const Input = styled.TextInput`
  height: 50px;
  background-color: #c4c4ca;
  padding: 10px;
  margin: 10px 5px;
  border-radius: 5px;
`;

export const RowContent = styled.View`
  flex-direction: row;
`;

export const OperatorButton = styled.TouchableOpacity<ISelected>`
  height: 50px;
  width: 50px;
  margin: 0px 5px;
  background-color: ${props => (props.selected ? '#5c3e62' : '#c4c4ca')};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity<ISelected>`
  height: 50px;
  margin: 0px 5px;
  background-color: #5c3e62;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<ISelected>`
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.selected ? '#e7ddd3' : '#171133')};
`;

export const LogsContainer = styled.View`
  height: 200px;
  margin: 10px 5px;
  background-color: #c4c4ca;
  border-radius: 5px;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    backgroundColor: '#c4c4ca',
    margin: 10,
  },
})``;

export const LogText = styled.Text`
  font-size: 15px;
  color: #171133;
`;
