

export default function genreReducer(state, action) {
    switch (action.type) {
        case 'add': {
            return { genres: [...state.genres, action.payload] };
        }
        case 'remove': {
            return { genres: state.genres.filter((id) => id !== action.payload) };
        }
        case 'clear': {
            return { genres: [] };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}