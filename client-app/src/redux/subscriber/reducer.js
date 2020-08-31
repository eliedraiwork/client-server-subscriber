import { UPDATE_PROPERTY, MAKE_BUSINESS, MAKE_PERSONAL, NEXT_STEP, PREV_STEP } from './types';

const initialState = {
    subscriber: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        isBusiness: false,
        companyName: '',
        country: '',
        iban: '',
        bic: ''
    },
    step: 1,
    avoidNext: true,
}


const subscriberReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROPERTY:
            var newState = {
                ...state,
                subscriber: state.subscriber
            }
            newState.subscriber[action.field] = action.value;
            return newState;

        case MAKE_BUSINESS:
            return {
                ...state,
                subscriber: {
                    ...state.subscriber,
                    isBusiness: true
                }
            }
        case MAKE_PERSONAL:
            return {
                ...state,
                subscriber: {
                    ...state.subscriber,
                    isBusiness: false,
                    companyName: ''
                }
            }

        case NEXT_STEP:
            return {
                ...state,
                step: state.step + 1,
                stepValidated: false
            };

        case PREV_STEP:
            return {
                ...state,
                step: state.step - 1
            }
        default:
            return state;
    }
}

export default subscriberReducer;