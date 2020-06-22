import React from 'react';
import { Slider } from 'antd';

export const marks = {
  0: 'Abominable',
  1: 'Poor',
  2: 'Mediocre',
  3: 'Good',
  4: 'Excellent',
  5: 'Mint'
};

function QualitySlider(props: any) {
  return (
    <Slider
      className="mx-5"
      marks={marks}
      included={false}
      step={0.5}
      defaultValue={5}
      min={0}
      max={5}
      onChange={props.onChange}
    />
  );
}

export default QualitySlider;
