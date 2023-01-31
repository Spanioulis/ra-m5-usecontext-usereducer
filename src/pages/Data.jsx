import useFetch from '../hooks/useFetch'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { urls } from '../constants'
import { Container } from '../styles'

const columns = [
  {
    id: 'title',
    label: 'Nombre',
    isSortable: true,
  },
  {
    id: 'price',
    label: 'Precio',
    isSortable: true,
  },
  {
    id: 'city',
    label: 'Ciudad',
    isSortable: true,
  },
  {
    id: 'district',
    label: 'Distrito',
    isSortable: true,
  },
  {
    id: 'type',
    label: 'Descripción',
    isSortable: false,
  },
  // cell: (row) => (
  //   <span
  //     style={{
  //       color:
  //         row.average < 185000
  //           ? 'green'
  //           : row.average > 500000
  //           ? 'red'
  //           : 'gray',
  //     }}
  //   >
  //     {row.age}
  //   </span>
  // ),
]

function Data() {
  const { loading, data } = useFetch(urls.houses)

  return (
    <Body>
      <Container>
        <ITATable columns={columns} data={data} loading={loading} />
      </Container>
    </Body>
  )
}

export default Data
