import { createNextState } from '@reduxjs/toolkit'

export const initialState = {
  data: [],
  columns: [],
  currentPage: 1,
  itemsPage: 10,
  sort: false,
  district: false,
  dataDistrict: [],
  columnsDistrict: [],
}

export const Actions = {
  SET_DATA: 'SET_DATA',
  SET_COLUMNS: 'SET_COLUMNS',
  SET_CURRENTPAGE: 'SET_CURRENTPAGE',
  SET_ITEMSPAGE: 'SET_ITEMSPAGE',
  SET_SORT: 'SET_SORT',
  SET_HOUSES: 'SET_HOUSES',
  SET_DISTRICT: 'SET_DISTRICT',
  SET_DATADISTRICT: 'SET_DATADISTRICT',
  SET_COLUMNSDISTRICT: 'SET_COLUMNSDISTRICT',
}

// eslint-disable-next-line default-param-last
export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_DATA:
      return createNextState(state, (draft) => {
        draft.data = action.payload
      })

    case Actions.SET_COLUMNS:
      return createNextState(state, (draft) => {
        draft.columns = action.payload
      })

    case Actions.SET_CURRENTPAGE:
      return createNextState(state, (draft) => {
        draft.currentPage = action.payload
      })

    case Actions.SET_ITEMSPAGE:
      return createNextState(state, (draft) => {
        draft.itemsPage = action.payload
      })

    case Actions.SET_SORT:
      return createNextState(state, (draft) => {
        draft.sort = action.payload
      })

    case Actions.SET_DISTRICT:
      return createNextState(state, (draft) => {
        draft.district = action.payload
      })

    case Actions.SET_DATADISTRICT:
      return createNextState(state, (draft) => {
        draft.dataDistrict = action.payload
      })

    case Actions.SET_COLUMNSDISTRICT:
      return createNextState(state, (draft) => {
        draft.columnsDistrict = action.payload
      })

    default:
      return state
  }
}
