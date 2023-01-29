import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { urls } from '../constants'
import useFetch from '../hooks/useFetch'
import { Container } from '../styles'

const columns = [
  {
    id: 'title',
    label: 'Nombre',
  },
  {
    id: 'price',
    label: 'Precio',
  },
  {
    id: 'city',
    label: 'Ciudad',
  },
  {
    id: 'district',
    label: 'Distrito',
  },
  {
    id: 'type',
    label: 'Descripción',
  },
  // {
  //   id: 'age',
  //   label: 'Edad',
  //   cell: (row) => (
  //     <span style={{ color: row.age > 50 ? 'green' : 'red' }}>{row.age}</span>
  //   ),
  // },
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
