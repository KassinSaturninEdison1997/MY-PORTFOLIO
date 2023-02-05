import { useEffect, useReducer, useState } from "react"

export interface IValidateForm <TAttributes> {
    ({attributes}: {attributes: TAttributes}) : any;
}

const formReducer = (state:any, action: {
    value: any;
    name: string;
}) => {

    const {name, value} = action;

    return {
        ...state,
        [name]: value
    }
}

interface IUseForm <TAttributes = {}> {
 init?: Partial<TAttributes>;
 validate?: IValidateForm<TAttributes>
}

export const useForm= <TAttributes>({
init,
validate
}: IUseForm<TAttributes>) => {
    const [attributes, dispatch] = useReducer(
        formReducer,
        init || {}
    );
    const [error, setError] = useState({})

    useEffect(() => {
        if(validate){
            const err = validate({attributes})
            setError(err)
        }
    }, [attributes, validate]);

    const handleInputChange = (name: string, value: any) => {
        dispatch({
            name,
            value
        })
    }


    return {
        attributes,
        handleInputChange,
        error
    }
}