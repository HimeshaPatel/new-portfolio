import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export const Primary = {
  args: {
    children: 'Click Me',
  },
  render: (args) => <Button {...args} />,
};