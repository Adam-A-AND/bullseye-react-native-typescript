import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const GameWrapper = styled(SafeAreaView)`
    flex: 1;
    background-color: #B0E0E6;
    align-items: center;
    justify-content: center;
    padding: 12px;
`;

export const InstructionText = styled.Text`
    text-align: center;
    text-transform: uppercase;
    line-height: 38px;
    font-size: 24px;
`;

export const BigNumberText = styled.Text`
    margin-vertical: 24px
    text-align: center;
    font-size: 48px;
    font-weight: bold;
`;

export const SliderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Slider = styled.Slider`
  flex: 1
`;

export const SliderValueText = styled.Text`
  text-align: center;
  padding: 12px;
  width: 48px;
`