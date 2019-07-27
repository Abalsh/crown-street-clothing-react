import React from 'react';

import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles';
// Props include name, type value required, every prop in our sign in componnet
const FormInput = ({handleChange, label, ...props}) => ( // props destructured using spread operator
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...props}/> 
        {
            label ? 
            <FormInputLabel className={`${props.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </FormInputLabel>
            : null
        }
    </GroupContainer>
)
export default FormInput;    
