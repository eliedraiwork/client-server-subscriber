import { UPDATE_PROPERTY, MAKE_BUSINESS, MAKE_PERSONAL, NEXT_STEP, PREV_STEP, VALIDATE_FIELD } from './types';

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
    validate: {
        firstname: true,
        lastname: true,
        email: true,
        phone: true,
        isBusiness: true,
        companyName: true,
        country: true,
        iban: true,
        bic: true
    }
}


const subscriberReducer = (state = initialState, action) => {
    var newState = {}
    switch (action.type) {
        case UPDATE_PROPERTY:
            newState = {
                ...state,
                subscriber: state.subscriber
            }
            newState.subscriber[action.field] = action.value;
            return newState;

        case VALIDATE_FIELD:
            newState = {
                ...state,
                validate: state.validate
            }
            newState.validate[action.field] = action.value;
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