import { useEffect, useContext } from 'react'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableStyled } from './styles'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

// eslint-disable-next-line react/prop-types
function Table({ columns, data, showHeader = true, currentPage, itemsPage }) {
  const { dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
    dispatch({ type: Actions.SET_CURRENT_PAGE, payload: currentPage })
    dispatch({ type: Actions.SET_ITEMS_PAGE, payload: itemsPage })
  }, [data, columns, currentPage, itemsPage, dispatch])

  return (
    <TableStyled>
      {showHeader && <TableHeader />}
      <TableBody />
    </TableStyled>
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
