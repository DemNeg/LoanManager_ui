export const environment = {
    production: false,
    BASE_URL: 'http://localhost:3000',
    CUSTOMER_BASE_URL: 'http://localhost:3000/customers',
        CUSTOMER: {
            GET_ALL_CUSTOMERS: '/', 
            GET_CUSTOMER: '/view',
            POST_CUSTOMER: '/add',
            UPDATE_CUSTOMER: '/update',
            DELETE_CUSTOMER: '/delete',
            SEARCH_CUSTOMER: '/search'
        },

        LOANS: {
            GET_ALL_LOANS: '/', 
            GET_LOAN: '/view',
            UPDATE_LOAN: '/update',
            DELETE_LOAN: '/delete',
            SEARCH_LOAN: '/search'
        }
    };