import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE, CREATE_ITEM_REQUEST, CREATE_ITEM_SUCCESS, CREATE_ITEM_FAILURE, UPDATE_ITEM_REQUEST, UPDATE_ITEM_SUCCESS, UPDATE_ITEM_FAILURE, DELETE_ITEM_REQUEST, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE } from "./actions";


// Action Creators

export const fetchItemsRequest = () => ({
    type: FETCH_ITEMS_REQUEST,
});

export const fetchItemsSuccess = (items) => ({
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
});

export const fetchItemsFailure = (error) => ({
    type: FETCH_ITEMS_FAILURE,
    payload: error,
});

export const createItemRequest = () => ({
    type: CREATE_ITEM_REQUEST,
});

export const createItemSuccess = (item) => ({
    type: CREATE_ITEM_SUCCESS,
    payload: item,
});

export const createItemFailure = (error) => ({
    type: CREATE_ITEM_FAILURE,
    payload: error,
});

export const updateItemRequest = () => ({
    type: UPDATE_ITEM_REQUEST,
});

export const updateItemSuccess = (item) => ({
    type: UPDATE_ITEM_SUCCESS,
    payload: item,
});

export const updateItemFailure = (error) => ({
    type: UPDATE_ITEM_FAILURE,
    payload: error,
});

export const deleteItemRequest = () => ({
    type: DELETE_ITEM_REQUEST,
});

export const deleteItemSuccess = (id) => ({
    type: DELETE_ITEM_SUCCESS,
    payload: id,
});

export const deleteItemFailure = (error) => ({
    type: DELETE_ITEM_FAILURE,
    payload: error,
});
