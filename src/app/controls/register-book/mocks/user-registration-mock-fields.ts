export const USER_REGISTRATION_MOCK_FIELDS = [
    {
        id: 1,
        displayName: 'Name',
        displayCode: 'NAME',
        value: '',
        isRequired: true,
        isDisabled: false,
        attrType: 'TEXTBOX',
        pattern: '',
        minLength: 3,
        maxLength: 30,
        errorMessage: {
            required: 'Field can not be left blank!',
            pattern: '',
            minLength: 'Minimum of 3 characters are required!',
            maxLength: 'Maximum of 30 characters are allowed!'
        }
    },
    {
        id: 2,
        displayName: 'Email',
        displayCode: 'EMAIL',
        value: '',
        isRequired: true,
        isDisabled: false,
        attrType: 'TEXTBOX',
        pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$',
        minLength: 3,
        maxLength: 30,
        errorMessage: {
            required: 'Field can not be left blank!',
            pattern: 'Invalid email!',
            minLength: 'Minimum of 3 characters are required!',
            maxLength: 'Maximum of 30 characters are allowed!'
        }
    },
    {
        id: 3,
        displayName: 'Phone number',
        displayCode: 'PHONE',
        value: '',
        isRequired: false,
        isDisabled: false,
        attrType: 'TEXTBOX',
        pattern: '^[0-9]*$',
        minLength: 10,
        maxLength: 10,
        errorMessage: {
            required: 'Field can not be left blank!',
            pattern: '',
            minLength: 'Minimum of 10 characters are required!',
            maxLength: 'Maximum of 10 characters are allowed!'
        }
    },
    {
        id: 4,
        displayName: 'DOB',
        displayCode: 'DOB',
        value: '',
        isRequired: true,
        isDisabled: false,
        attrType: 'TEXTBOX',
        pattern: '',
        minLength: 10,
        maxLength: 10,
        errorMessage: {
            required: 'Field can not be left blank!',
            pattern: '',
            minLength: 'Minimum of 10 characters are required!',
            maxLength: 'Maximum of 10 characters are allowed!'
        }
    }
];