import { useContext } from 'react'
import { TableContext } from './store/context'
import { FlexBox } from '../../../styles'
import { Icon } from '../../atoms'
import { TableCell } from './styles'
import styled from 'styled-components'

const IconStyled = styled(Icon)`
  margin-left: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`

function TableHeader() {
  const { state, dispatch } = useContext(TableContext)
  const {
    columns,
    columnsDistrict,
    isSortable,
    district,
    sortTitle,
    sortDirection,
  } = state

  const handleSort = (column) => {
    dispatch({
      type: 'SET_SORT',
      payload: {
        columnId: column.id,
        sortTitle: column.id,
        sortDirection: !sortDirection,
      },
    })
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
                    <IconStyled icon="sort" onClick={() => handleSort(col)} />
                  </FlexBox>
                </TableCell>
              ))
          : columns
              ?.filter((col) => !col.isHidden)
              .map((col) => (
                <TableCell as="th" key={col.id}>
                  <FlexBox direction="row" justify="center">
                    {col.label}
                    {col.isSortable && (
                      <IconStyled icon="sort" onClick={() => handleSort(col)} />
                    )}
                  </FlexBox>
                </TableCell>
              ))}
      </tr>
    </thead>
  )
}

export default TableHeader
