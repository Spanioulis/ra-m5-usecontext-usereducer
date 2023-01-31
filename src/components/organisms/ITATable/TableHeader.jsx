import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { FlexBox } from '../../../styles'
import { Icon } from '../../atoms'
import { TableCell } from './styles'
import styled from 'styled-components'
import { Actions } from './store/reducer'

const IconStyled = styled(Icon)`
  margin-left: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`

function TableHeader() {
  const { state, dispatch } = useContext(TableContext)
  const { columns, columnsDistrict, data, dataDistrict, district, sort } = state

  // El handleSort (la lógica de debajo) debería de estar en el reducer
  function handleSort(value) {
    if (district) {
      if (sort) {
        const sortList = [...dataDistrict].sort((a, b) =>
          a[value] < b[value] ? 1 : -1,
        )
        dispatch({ type: 'SET_SORT', payload: !sort })
        dispatch({ type: 'SET_DATADISTRICT', payload: sortList })
      } else {
        const sortList = [...dataDistrict].sort((a, b) =>
          a[value] > b[value] ? 1 : -1,
        )
        dispatch({ type: 'SET_SORT', payload: !sort })
        dispatch({ type: 'SET_DATADISTRICT', payload: sortList })
      }
    }
    if (sort) {
      const sortList = [...data].sort((a, b) => (a[value] < b[value] ? 1 : -1))
      dispatch({ type: 'SET_SORT', payload: !sort })
      dispatch({ type: 'SET_DATA', payload: sortList })
    } else {
      const sortList = [...data].sort((a, b) => (a[value] > b[value] ? 1 : -1))
      dispatch({ type: 'SET_SORT', payload: !sort })
      dispatch({ type: 'SET_DATA', payload: sortList })
    }
  }
  return (
    <thead>
      <tr>
        {district
          ? columnsDistrict
              ?.filter((col) => !col.isHidden)
              .map((col) => (
                <TableCell as="th" key={col.id}>
                  <FlexBox direction="row" justify="center">
                    {col.label}
                    <IconStyled
                      icon="sort"
                      onClick={() => handleSort(col.id)}
                    />
                  </FlexBox>
                </TableCell>
              ))
          : columns
              ?.filter((col) => !col.isHidden)
              .map((col) => (
                <TableCell as="th" key={col.id}>
                  <FlexBox direction="row" justify="center">
                    {col.label}
                    <IconStyled
                      icon="sort"
                      onClick={() => handleSort(col.id)}
                    />
                  </FlexBox>
                </TableCell>
              ))}
      </tr>
    </thead>
  )
}

export default TableHeader
