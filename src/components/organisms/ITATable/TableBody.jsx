import { useContext } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'

function TableBody() {
  const { state } = useContext(TableContext)
  const { data, columns, itemsPage, currentPage } = state

  const startPagination = (currentPage - 1) * itemsPage

  return (
    <tbody>
      {data &&
        data.slice(startPagination, itemsPage + startPagination).map((d) => (
          <tr key={d.id}>
            {columns
              .filter((col) => !col.isHidden)
              .map((col) => (
                <TableCell key={`${d.id}-${col.id}`}>
                  {col.cell ? col.cell(d) : d[col.id]}
                </TableCell>
              ))}
          </tr>
        ))}
    </tbody>
  )
}

export default TableBody
