import { useEffect, useContext } from 'react'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { Barrios, Download, Viviendas } from './molecules'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import TableSkeleton from './TableSkeleton'
import TablePagination from './TablePagination'
import { FlexBox } from '../../../styles'
import { TableStyled } from './styles'

// eslint-disable-next-line react/prop-types
function Table({ columns, data, showHeader = true, loading }) {
  const { dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
  }, [data, columns, dispatch])

  return (
    <FlexBox>
      <FlexBox direction="row" justify="flex-end">
        <Viviendas />
        <Barrios />
        <Download />
      </FlexBox>
      {loading ? (
        <TableStyled>
          <TableSkeleton />
        </TableStyled>
      ) : (
        <TableStyled>
          {showHeader && <TableHeader />}
          <TableBody />
        </TableStyled>
      )}
      <TablePagination />
    </FlexBox>
  )
}

function ITATable(props) {
  return (
    <TableProvider>
      <Table {...props} />
    </TableProvider>
  )
}

export default ITATable
