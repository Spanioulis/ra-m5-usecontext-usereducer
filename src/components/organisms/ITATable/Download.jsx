/* eslint-disable import/named */
import { CSVLink } from 'react-csv' // No utilices CSVLink o librerias, crea tu propia función para pasar los datos a .csv
import { useContext } from 'react'
import styled from 'styled-components'
import { colors, FlexBox } from '../../../styles'
import { Button, Icon, Text } from '../../atoms'
import { TableContext } from './store/context'

const ButtonStyled = styled(Button)`
  background-color: green;
  width: 150px;
  margin: 1rem;
`

const IconStyled = styled(Icon)`
  color: ${colors.clearBlueBg};
`
const TextStyled = styled(Text)`
  margin: 0.5rem;
`

function Download() {
  const { state } = useContext(TableContext)
  const { data } = state

  const columns = [
    { label: 'Distrito', key: 'district' },
    { label: 'Ciudad', key: 'city' },
    { label: 'Nombre', key: 'title' },
    { label: 'Precio', key: 'price' },
    { label: 'Descripción', key: 'type' },
  ]

  return (
    <FlexBox align="end" justify="row">
      <CSVLink
        data={data}
        headers={columns}
        filename="houses-list.csv"
        target="_blank"
      >
        <ButtonStyled>
          <FlexBox direction="row" align="center">
            <IconStyled icon="download" />
            <TextStyled color={colors.clearBlueBg}>Descargar</TextStyled>
          </FlexBox>
        </ButtonStyled>
      </CSVLink>
    </FlexBox>
  )
}

export default Download
