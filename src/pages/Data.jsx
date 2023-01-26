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
  // const [currentPage, setCurrentPage] = useState(1)
  // const { data } = useSelector((state) => state.houses)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getHouses(currentPage))
  // }, [currentPage, dispatch])
  const { loading, error, data, isSuccess } = useFetch(urls.houses)

  return (
    <Body>
      <Container>
        {loading && <div>Loading...</div>}
        {isSuccess && <ITATable columns={columns} data={data} />}
        {error && <div>Error</div>}
      </Container>
    </Body>
  )
}

export default Data
