/* eslint-disable import/named */
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

  const downloadFileCSV = () => {
    const blob = new Blob([JSON.stringify(data)], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'yourfilename.csv')
    document.body.appendChild(link)
    link.click()
  }

  return (
    <FlexBox align="end" justify="row">
      <ButtonStyled onClick={downloadFileCSV} id="download">
        <FlexBox direction="row" align="center">
          <IconStyled icon="download" />
          <TextStyled color={colors.clearBlueBg}>Descargar</TextStyled>
        </FlexBox>
      </ButtonStyled>
    </FlexBox>
  )
}

export default Download
