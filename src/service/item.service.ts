import { fetchItemsRequest, fetchItemsSuccess, fetchItemsFailure, createItemRequest, createItemSuccess, createItemFailure, updateItemRequest, updateItemSuccess, updateItemFailure, deleteItemRequest, deleteItemSuccess, deleteItemFailure } from "../store/actionCreator";
import { fetchItemsAPI, createItemAPI, updateItemAPI, deleteItemAPI } from "../api/item.api";

// Thunk Actions
export const fetchItems = () => async (dispatch) => {
    dispatch(fetchItemsRequest());
    try {
        const items = await fetchItemsAPI();
        dispatch(fetchItemsSuccess(items));
    } catch (error) {
        dispatch(fetchItemsFailure(error.message));
    }
};

export const createItem = (itemData) => async (dispatch) => {
    dispatch(createItemRequest());
    try {
        const item = await createItemAPI(itemData);
        dispatch(createItemSuccess(item));
    } catch (error) {
        dispatch(createItemFailure(error.message));
    }
};

export const updateItem = (id, itemData) => async (dispatch) => {
    dispatch(updateItemRequest());
    try {
        const item = await updateItemAPI(id, itemData);
        dispatch(updateItemSuccess(item));
    } catch (error) {
        dispatch(updateItemFailure(error.message));
    }
};

export const deleteItem = (id) => async (dispatch) => {
    dispatch(deleteItemRequest());
    try {
        await deleteItemAPI(id);
        dispatch(deleteItemSuccess(id));
    } catch (error) {
        dispatch(deleteItemFailure(error.message));
    }
};
