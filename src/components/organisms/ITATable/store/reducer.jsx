import { createNextState } from '@reduxjs/toolkit'

export const initialState = {
  data: [],
  columns: [],
  currentPage: 1,
  itemsPage: 10,
}

export const Actions = {
  SET_DATA: 'SET_DATA',
  SET_COLUMNS: 'SET_COLUMNS',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_ITEMS_PAGE: 'SET_ITEMS_PAGE',
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

    case Actions.SET_CURRENT_PAGE:
      return createNextState(state, (draft) => {
        draft.currentPage = action.payload
      })

    case Actions.SET_ITEMS_PAGE:
      return createNextState(state, (draft) => {
        draft.itemsPage = action.payload
      })

    default:
      return state
  }
}
