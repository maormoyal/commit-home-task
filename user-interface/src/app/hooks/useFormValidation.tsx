import { useState, useEffect, ChangeEvent, FocusEvent } from 'react';

function useFormValidation<T extends Record<string, any>>(
    initialValues: T,
    validators: { [K in keyof T]: (value: T[K], formData?: T) => string | undefined }
) {
    const [formData, setFormData] = useState<T>(initialValues);
    const [errors, setErrors] = useState<{ [K in keyof T]?: string }>({});
    const [touched, setTouched] = useState<{ [K in keyof T]?: boolean }>({});
    const [isFormValid, setIsFormValid] = useState(true);

    useEffect(() => {
        const newErrors: { [K in keyof T]?: string } = {};
        let allValid = true;
        Object.keys(formData).forEach(key => {
            const field = key as keyof T;
            if (touched[field]) {
                const error = validators[field](formData[field], formData);
                newErrors[field] = error;
                if (error) allValid = false;
            }
        });
        setErrors(newErrors);
        setIsFormValid(allValid);
    }, [formData, touched]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
        const name = event.target.name as keyof T;
        setTouched(prev => ({ ...prev, [name]: true }));
    };

    return { formData, handleChange, handleBlur, errors, isFormValid, touched };
}

export { useFormValidation };
