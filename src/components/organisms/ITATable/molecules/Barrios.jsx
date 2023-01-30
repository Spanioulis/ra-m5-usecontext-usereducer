/* eslint-disable import/named */
import { useContext } from 'react'
import styled from 'styled-components'
import { colors, FlexBox } from '../../../../styles'
import { Button, Icon, Text } from '../../../atoms'
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

function Barrios() {
  const { state, dispatch } = useContext(TableContext)
  const { data } = state

  const districtColumns = [
    {
      id: 'district',
      label: 'Distrito',
    },
    {
      id: 'number',
      label: 'Nº viviendas',
    },
    {
      id: 'average_price',
      label: 'Precio medio',
    },
    {
      id: 'type',
      label: 'Descripción',
    },
  ]

  function filterBarrio() {
    const average = data.reduce((acc, curr) => acc + curr.price, 0)
    const sortList = data.map((item) => {
      return {
        ...item,
        average_price: Math.ceil(average / data.length),
        number: 15,
      }
    })
    dispatch({ type: 'SET_DATADISTRICT', payload: sortList })
    dispatch({ type: 'SET_DISTRICT', payload: true })
    dispatch({ type: 'SET_COLUMNSDISTRICT', payload: districtColumns })
  }

  return (
    <ButtonStyled onClick={filterBarrio} id="download">
      Barrios
    </ButtonStyled>
  )
}

export default Barrios
