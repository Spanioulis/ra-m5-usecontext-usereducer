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

  function visualNeighborhoods() {
    const barceloneta = data.filter((d) => d.district === 'Barceloneta')
    const gotic = data.filter((d) => d.district === 'Gotic')
    const totalGotic = gotic.reduce(
      (acc, curr) => {
        return {
          price: acc.price + curr.price,
          number: acc.number + 1,
          district: curr.district,
          // type: [acc.type + curr.type],
          type: [...acc.type, [curr.type]],
        }
      },
      { price: 0, number: 0, district: '', type: [] },
    )
    const totalBarceloneta = barceloneta.reduce(
      (acc, curr) => {
        return {
          price: acc.price + curr.price,
          number: acc.number + 1,
          district: curr.district,
          type: [...acc.type, [curr.type]],
        }
      },
      { price: 0, number: 0, district: '', type: [] },
    )

    let LIST = [...[totalGotic], ...[totalBarceloneta]]

    const sortList = LIST.map((item, index) => {
      console.log('item', item.type[6])
      return {
        ...item,
        average_price: Math.ceil(item.price / item.number),
        number: item.number,
        type: item.type,
      }
    })
    dispatch({ type: 'SET_DATADISTRICT', payload: sortList })
    dispatch({ type: 'SET_DISTRICT', payload: true })
    dispatch({ type: 'SET_COLUMNSDISTRICT', payload: districtColumns })
  }

  return (
    <ButtonStyled onClick={visualNeighborhoods} id="download">
      Barrios
    </ButtonStyled>
  )
}

export default Barrios
