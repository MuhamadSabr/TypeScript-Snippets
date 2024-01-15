export interface Validitable{
    value:string | number;
    required? : boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

export function validate(validatibleInput:Validitable): boolean{
    let isValid = true;

    if(!validatibleInput.required)
        return true;

    if(validatibleInput.minLength && typeof validatibleInput.value =='string'){
        isValid = isValid && validatibleInput.value.length >= validatibleInput.minLength;
    }

    if(validatibleInput.maxLength && typeof validatibleInput.value =='string'){
        isValid = isValid && validatibleInput.value.length <= validatibleInput.maxLength;
    }

    if(validatibleInput.min && typeof validatibleInput.value =='number'){
        isValid = isValid && validatibleInput.value >= validatibleInput.min;
    }

    if(validatibleInput.max && typeof validatibleInput.value =='number'){
        isValid = isValid && validatibleInput.value <= validatibleInput.max;
    }

    return isValid;
}