import styled, { css } from 'styled-components/macro'
import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import useClickOutside from '../hooks/useClickOutside'

export default function SearchBox({ searchTerm, onChange }) {
  const [isToggled, setIsToggled] = useState(false)
  function handleToggled() {
    setIsToggled(!isToggled)
  }
  const node = useRef()
  useClickOutside(node, () => setIsToggled(false))
  return (
    <div ref={node}>
      <Form>
        <Input
          type="text"
          name="input"
          isToggled={isToggled}
          value={searchTerm}
          onChange={onChange}
        />
        <NavLink to="/list">
          <Button isToggled={isToggled} onClick={handleToggled} />
        </NavLink>
      </Form>
    </div>
  )
}

const Form = styled.form`
  position: fixed;
  height: 2rem;
  width: 300px;
  top: 1.5rem;
  right: 1.5rem;
  transform: translateX(298px);
`

const Input = styled.input`
  box-sizing: border-box;
  width: 2rem;
  height: 2rem;
  border: 4px solid #333333;
  border-radius: 50%;
  background: none;
  color: transparent;
  font-size: 16px;
  font-weight: 400;
  outline: 0;
  -webkit-transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out,
    padding 0.2s;
  transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out,
    padding 0.2s;
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
  ${({ isToggled }) =>
    isToggled &&
    css`
      box-sizing: border-box;
      padding: 0 40px 0 10px;
      width: 300px;
      height: 2rem;
      border: 4px solid #333333;
      border-radius: 25px;
      background-color: rgba(255, 255, 255, 0.7);
      color: #333;
      font-size: 16px;
      font-weight: 400;
      outline: 0;
      -webkit-transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
        padding 0.2s;
      transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
        padding 0.2s;
      -webkit-transition-delay: 0.4s, 0s, 0.4s;
      transition-delay: 0.4s, 0s, 0.4s;
      -webkit-transform: translate(-100%, -50%);
      -ms-transform: translate(-100%, -50%);
      transform: translate(-100%, -50%);
    `}
`

const Button = styled.button`
  background: none;
  position: absolute;
  top: 0px;
  left: 0;
  height: 2rem;
  width: 2rem;
  padding: 0;
  border-radius: 100%;
  outline: 0;
  border: 0;
  color: inherit;
  cursor: pointer;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
  &::before {
    content: '';
    position: absolute;
    width: 0.8rem;
    height: 0.16rem;
    border-radius: 10px;
    background-color: #333;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    margin-top: 1.04rem;
    margin-left: 0.68rem;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }
  ${({ isToggled }) =>
    isToggled &&
    css`
      -webkit-transition: 0.4s ease-in-out;
      transition: 0.4s ease-in-out;
      -webkit-transition-delay: 0.4s;
      transition-delay: 0.4s;
      &::before {
        content: '';
        position: absolute;
        width: 1.08rem;
        height: 0.16rem;
        border-radius: 10px;
        margin-top: -0.04rem;
        margin-left: -0.52rem;
        background-color: #333;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-transition: 0.2s ease-in-out;
        transition: 0.2s ease-in-out;
      }
      &::after {
        content: '';
        position: absolute;
        width: 1.08rem;
        height: 0.16rem;
        border-radius: 10px;
        background-color: #333;
        margin-top: -0.04rem;
        margin-left: -0.52rem;
        cursor: pointer;
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    `}
`