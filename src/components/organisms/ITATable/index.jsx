import { useEffect, useContext } from 'react'
import Download from './Download'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import TablePagination from './TablePagination'
import { FlexBox } from '../../../styles'
import { TableStyled } from './styles'

// eslint-disable-next-line react/prop-types
function Table({ columns, data, showHeader = true }) {
  const { dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
  }, [data, columns, dispatch])

  return (
    <FlexBox>
      <Download />
      <TableStyled>
        {showHeader && <TableHeader />}
        <TableBody />
      </TableStyled>
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
