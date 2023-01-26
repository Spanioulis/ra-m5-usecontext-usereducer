/* eslint-disable import/named */
import React, { useContext } from 'react'
import styled from 'styled-components'
import { Container, FlexBox } from '../../../styles'
import { Icon, Text } from '../../atoms'
import { SelectGroup } from '../../molecules'
import { TableContext } from './store/context'

const ContainerStyled = styled(Container)`
  border: 1px solid;
  border-top: 0px;
  padding: 0rem 1rem;
`
const ButtonStyled = styled.button`
  background-color: none;
  color: white;
  border: 0;
  padding: 1rem;

  &:hover {
    cursor: pointer;
  }
`

const IconStyled = styled(Icon)`
  color: grey;
`

function TablePagination() {
  const { state, dispatch } = useContext(TableContext)
  const { currentPage } = state

  const forwardPage = () => {
    if (currentPage < 50) {
      dispatch({ type: 'SET_CURRENTPAGE', payload: currentPage + 1 })
    }
  }
  const backPage = () => {
    if (currentPage > 1) {
      dispatch({ type: 'SET_CURRENTPAGE', payload: currentPage - 1 })
    }
  }

  const handleItemsPage = (e) => {
    dispatch({ type: 'SET_ITEMSPAGE', payload: +e.target.value })
  }

  const optionsSelect = [
    { value: '10', text: '10' },
    { value: '20', text: '20' },
    { value: '50', text: '50' },
  ]
  return (
    <ContainerStyled direction="row" justify="center">
      <FlexBox direction="row">
        <ButtonStyled type="button" onClick={backPage}>
          <IconStyled icon="arrow_back_ios" />
        </ButtonStyled>
        <Text>
          Página <b>{currentPage}</b> de 50
        </Text>
        <ButtonStyled type="button" onClick={forwardPage}>
          <IconStyled icon="arrow_forward_ios" />
        </ButtonStyled>
      </FlexBox>
      <FlexBox direction="row" justify="flex-end" align="center">
        <SelectGroup
          label="Mostrar: "
          id="mostrar"
          onChange={handleItemsPage}
          options={optionsSelect}
          defaultValue="10"
        />
      </FlexBox>
    </ContainerStyled>
  )
}

export default TablePagination
