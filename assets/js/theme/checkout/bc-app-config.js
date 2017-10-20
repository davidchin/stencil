export default {
    bigpayBaseUrl: 'https://payments.bigcommerce.com',
    cartLink: 'https://store-g445cs32rp.mybigcommerce.com/cart.php',
    checkoutLink: '/checkout',
    cdnPath: 'https://cdn6.bigcommerce.com/r-b959e8917b6bff506bcb196b500890c212320fd1',
    checkout: {
        enableOrderComments: 1,
        enableTermsAndConditions: 0,
        guestCheckoutEnabled: 1,
        isPaymentRequestEnabled: false,
        isPaymentRequestCanMakePaymentEnabled: false,
        orderTermsAndConditions: '',
        orderTermsAndConditionsLink: '',
        orderTermsAndConditionsType: '',
        shippingQuoteFailedMessage: 'Unfortunately one or more items in your cart can\'t be shipped to your location. Please choose a different delivery address.',
        realtimeShippingProviders: [
            'Fedex',
            'UPS',
            'USPS',
        ],
        remoteCheckoutProviders: [],
    },
    clientSidePaymentProviders: [
        'migs',
        'eway',
        'securenet',
        'usaepay',
        'elavon',
        'hps',
        'quickbooks',
        'orbital',
        'stripe',
        'authorizenet',
        'firstdatae4v14',
        'nmi',
        'braintree',
        'braintreepaypal',
        'braintreepaypalcredit',
        'braintreevisacheckout',
        'paypal',
        'cybersource',
        'sagepay',
        'squarev2',
        'afterpay',
        'vantiv',
        'vantivcore',
    ],
    currency: {
        code: 'USD',
        decimal_places: '2',
        decimal_separator: '.',
        symbol_location: 'left',
        symbol: '$',
        thousands_separator: ',',
    },
    shopperCurrency: {
        code: 'USD',
        symbol_location: 'left',
        symbol: '$',
        decimal_places: '2',
        decimal_separator: '.',
        thousands_separator: ',',
        exchange_rate: '1.0000000000',
    },
    defaultNewsletterSignup: false,
    imageDirectory: 'product_images',
    isAngularDebuggingEnabled: false,
    passwordRequirements: {
        alpha: '/[A-Za-z]/',
        numeric: '/[0-9]/',
        minlength: 7,
        error: 'Passwords must be at least 7 characters and contain both alphabetic and numeric characters.',
    },
    orderConfirmationLink: '/checkout/order-confirmation',
    orderEmail: 'ignacio.catalina@bigcommerce.com',
    shopPath: 'https://store-g445cs32rp.mybigcommerce.com',
    showNewsletterSignup: true,
    storeCountry: 'United States',
    storeHash: 'g445cs32rp',
    storeId: 999425555,
    storeName: 'icatalina',
    storePhoneNumber: '',
    storeLanguage: 'en_US',
};
