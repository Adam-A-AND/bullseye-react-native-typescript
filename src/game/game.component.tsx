import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import * as stringValues from '../values/strings.json';
import { BigNumberText, GameWrapper, InstructionText, Slider, SliderValueText, SliderWrapper } from './game.component.styled';

export const Game: React.FC = React.memo(function Game() {

  const [targetNumber, setTargetNumber] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
      setTargetNumber(Math.floor(Math.random() * 100) + 1)
  }, [])

  const updateSliderValue = (value: number) => {
    const sliderValue: number = value.toFixed(0) as unknown as number;

    setSliderValue(sliderValue);
    console.log(sliderValue);
  }

  const calculatePoints = () => {
    return 100 - Math.abs(targetNumber - sliderValue)
  };

  const handleOnPress = () => {
    console.log(`You scored ${calculatePoints()} points!`);
  };

  return (
    <GameWrapper>
        <InstructionText>{stringValues.instructionText}</InstructionText>
        <BigNumberText>{targetNumber}</BigNumberText>
        <SliderWrapper>
            <SliderValueText>{stringValues.slider.minValue}</SliderValueText>
            <Slider maximumValue={100} minimumValue={0} value={50} onValueChange={updateSliderValue}/>
            <SliderValueText>{stringValues.slider.maxValue}</SliderValueText>
        </SliderWrapper>
        <Button title='Hit Me!' onPress={handleOnPress}/>
    </GameWrapper>
  )
});