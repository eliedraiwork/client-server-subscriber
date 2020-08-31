import { UPDATE_PROPERTY, MAKE_BUSINESS, MAKE_PERSONAL, NEXT_STEP, PREV_STEP } from './types';

export const updateProperty = (field, value) => {
    return {
        type: UPDATE_PROPERTY,
        field: field,
        value: value
    };
};

export const makeBusiness = () => {
    return {
        type: MAKE_BUSINESS
    };
};

export const makePersonal = () => {
    return {
        type: MAKE_PERSONAL
    };
};

export const nextStep = () => {
    return {
        type: NEXT_STEP
    }
}

export const previousStep = () => {
    return {
        type: PREV_STEP
    }
}
