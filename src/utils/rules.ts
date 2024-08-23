import * as yup from 'yup';

export const authSchema = yup.object({
    fullName: yup.string().required('Full name is a required field').min(6, 'Username must be at least 6 characters'),
    phone: yup.string().required('Phone number is a required field').min(9, 'Phone number must be at least 9 characters'),
    password: yup.string().required('Password is a required field').min(8, 'Password must be at least 8 characters'),
    email: yup
        .string()
        .email('Email must be a valid email')
        .required('Email is a required field')
});

export type AuthSchema = yup.InferType<typeof authSchema>;
