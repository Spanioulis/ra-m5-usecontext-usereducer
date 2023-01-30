/* eslint-disable import/named */
import { useContext } from 'react'
import styled from 'styled-components'
import { colors } from '../../../../styles'
import { Button } from '../../../atoms'
import { TableContext } from '../store/context'

const ButtonStyled = styled(Button)`
  background-color: white;
  border: 1px solid gray;
  color: gray;
  margin: 0.7rem;
  width: 150px;
  &:active {
    background-color: ${colors.blue};
    color: white;
  }
`

function Viviendas() {
  const { dispatch } = useContext(TableContext)

  function filterViviendas() {
    dispatch({ type: 'SET_DISTRICT', payload: false })
  }

  return (
    <ButtonStyled onClick={filterViviendas} id="download">
      Viviendas
    </ButtonStyled>
  )
}

export default Viviendas
