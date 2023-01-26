import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { getHouses } from '../store/houses.slice'
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
  const [currentPage, setCurrentPage] = useState(1)
  const { data } = useSelector((state) => state.houses)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHouses(currentPage))
  }, [currentPage, dispatch])

  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable columns={columns} data={data} />
      </Container>
    </Body>
  )
}

export default Data
