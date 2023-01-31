import { createNextState } from '@reduxjs/toolkit'

export const initialState = {
  columns: [],
  columnsDistrict: [],
  currentPage: 1,
  data: [],
  dataDistrict: [],
  district: false,
  itemsPage: 10,
  sortTitle: null,
  sortDirection: false,
}

export const Actions = {
  SET_COLUMNS: 'SET_COLUMNS',
  SET_COLUMNSDISTRICT: 'SET_COLUMNSDISTRICT',
  SET_CURRENTPAGE: 'SET_CURRENTPAGE',
  SET_DATA: 'SET_DATA',
  SET_DATADISTRICT: 'SET_DATADISTRICT',
  SET_DISTRICT: 'SET_DISTRICT',
  SET_HOUSES: 'SET_HOUSES',
  SET_ITEMSPAGE: 'SET_ITEMSPAGE',
  SET_SORT: 'SET_SORT',
  SET_SORT_TITLE: 'SET_SORT_TITLE',
  SET_SORTDIRECTION: 'SET_SORTDIRECTION',
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

    case Actions.SET_SORT_TITLE:
      return createNextState(state, (draft) => {
        draft.sortTitle = action.payload
      })

    case Actions.SET_SORTDIRECTION:
      return createNextState(state, (draft) => {
        draft.sortDirection = action.payload
      })

    case Actions.SET_SORT:
      const { data } = state
      const { columnId, sortTitle, sortDirection } = action.payload
      console.log('sortTitle', sortTitle)
      console.log('sortDirection', sortDirection)

      const dataArray = Object.values(data)
      const sortedData = dataArray.sort((a, b) => {
        if (sortDirection === true) {
          return a[sortTitle] < b[sortTitle] ? 1 : -1
        }
        if (sortDirection === false) {
          return a[sortTitle] > b[sortTitle] ? 1 : -1
        }
        return 0
      })

      return createNextState(state, (draft) => {
        draft.data = sortedData
        draft.sortTitle = columnId
        draft.sortDirection = sortDirection
      })

    default:
      return state
  }
}
