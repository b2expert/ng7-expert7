export const EMP_REGISTRATION_MOCK_FIELDS = [
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
        isRequired: true,
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
    },
    {
        id: 4,
        displayName: 'Salary/Month',
        displayCode: 'SALARY',
        value: '',
        isRequired: false,
        isDisabled: false,
        attrType: 'TEXTBOX',
        pattern: '',
        minLength: 1,
        maxLength: 100,
        errorMessage: {
            required: 'Field can not be left blank!',
            pattern: '',
            minLength: 'Minimum of 10 characters are required!',
            maxLength: 'Maximum of 10 characters are allowed!'
        }
    },
    {
        id: 4,
        displayName: 'Previous employeer',
        displayCode: 'PREV_EMP',
        value: 0,
        isRequired: false,
        isDisabled: false,
        attrType: 'SELECT',
        pattern: '',
        minLength: 0,
        maxLength: 0,
        errorMessage: {
            required: 'Field can not be left blank!',
            pattern: '',
            minLength: 'Minimum of 10 characters are required!',
            maxLength: 'Maximum of 10 characters are allowed!'
        },
        options: [
            {
                title: 'Intel',
                code: 'INTEL'
            },
            {
                title: 'Honeywell',
                code: 'HONEYWELL'
            },
            {
                title: 'Others',
                code: 'OTHERS'
            }
        ]
    }
];