import React from 'react'
import styled from 'styled-components'


const BaseButton = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  color: grey;
  background: #6202EE;
  border-radius: 4px;

  cursor: pointer;
`

interface ButtonProps {
  type: "contained" | "outlined" | "text"
  label: string
}

export const Button = ({label}: ButtonProps) => {

  return <BaseButton>{label}</BaseButton>
}