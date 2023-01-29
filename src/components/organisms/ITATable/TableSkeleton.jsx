import { useContext } from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../../styles'
import { TableContext } from './store/context'
import { TableCell } from './styles'

const Spinner = styled.div`
  width: 15px;
  height: 15px;
  background-color: #8077a3;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`

const TableCellStyled = styled(TableCell)`
  height: 1.8rem;
`

function TableSkeleton() {
  const { state } = useContext(TableContext)
  const { columns } = state

  const data = [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
    {
      id: '4',
    },
    {
      id: '5',
    },
    {
      id: '6',
    },
    {
      id: '7',
    },
    {
      id: '8',
    },
    {
      id: '9',
    },
    {
      id: '10',
    },
  ]

  return (
    <>
      <thead>
        <tr>
          {columns
            .filter((col) => !col.isHidden)
            .map((col) => (
              <TableCell as="th" key={col.id}>
                {col.label}
              </TableCell>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr key={d.id}>
            {columns
              .filter((col) => !col.isHidden)
              .map((col) => (
                <TableCellStyled key={`${d.id}-${col.id}`}>
                  <FlexBox align="center">
                    <Spinner className="spinner">
                      <div className="bounce1" />
                    </Spinner>
                  </FlexBox>
                </TableCellStyled>
              ))}
          </tr>
        ))}
      </tbody>
    </>
  )
}

export default TableSkeleton
