import { UPDATE_PROPERTY, MAKE_BUSINESS, MAKE_PERSONAL, NEXT_STEP, PREV_STEP } from './types';

const initialState = {
    subscriber: {
        firstname: 'Elie',
        lastname: 'Drai',
        email: 'elie.drai.work@gmail.com',
        phone: '+972584442655',
        isBusiness: false,
        companyName: '',
        country: 'FR',
        iban: '',
        bic: ''
    },
    step: 1
}


const subscriberReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROPERTY:
            return state;
            /*
            var name = action.prop.name;
            const value = action.prop.value;

            var newState = {
                ...state,
                subscriber: state.suscriber
            }

            newState[name] = value;

            return newState;*/

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
            const newState = {
                ...state,
                step: state.step + 1
            }
            return newState;

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