
export default function historyReducer(state, action) {
    switch (action.type) {
        case 'add': {
            return { history: [...state.history, action.payload] };
        }
        case 'remove': {
            return { history: state.history.filter((name) => name !== action.payload) };
        }
        case 'clear': {
            return { history: [] };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}