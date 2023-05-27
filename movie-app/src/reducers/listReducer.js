import {Action} from "../consts/consts";

/**
 *
 * @param state list of items
 * @param action ADD, DELETE, or CLEAR
 * @returns {{list: *}|{list: *[]}}
 */
export default function listReducer(state, action) {
    switch (action.type) {
        case Action.ADD: {
            return { list: [...state.list, action.payload] };
        }
        case Action.DELETE: {
            return { list: state.list.filter((item) => item !== action.payload) };
        }
        case Action.CLEAR: {
            return { list: [] };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}