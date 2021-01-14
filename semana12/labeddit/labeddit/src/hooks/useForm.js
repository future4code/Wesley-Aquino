import { useState } from 'react'

export const useForm = (inicialValues) => {
    const [form, setForm] = useState(inicialValues);

    const onChange = (value, name) => {
        setForm({ ...form, [name]: value});
    }
    return { form, onChange}
}

