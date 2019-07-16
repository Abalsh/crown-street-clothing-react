import React from 'react';

import './form-input.styles.scss';
// Other Props include name, type value required, every prop in our sign in componnet
const FormInput = ({handleChange, label, ...otherProps}) => ( // other props destructured using spread operator
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/> 
        {
            label ? 
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>
            : null
        }
    </div>
)
export default FormInput;    
