import { useState } from "react";


export const useForm = (initialForm = {} ) => {

    const [ formState, setFormState, username, email, password ] = useState( initialForm );

//    const { username, email, password } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }


    return {
            ...formState,
            formState,
            onInputChange,
            onResetForm,
    }
  
}
