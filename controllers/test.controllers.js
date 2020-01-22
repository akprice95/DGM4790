export const test = ((req, res) => {
    res.send('Greetings from the test controller');
});

export const api = ((req, res) => {
    res.json({
        status: 'good',
        AccountNumber: '5248 2737 2364 1838',
        RoutingNumber: '324377820',
        AccountName: 'Car Loan',
        Balance:'-10000.0',
        Imported_at: '1579281689',
    })
});

export const postMalone = ((req, res) => {
    res.send('Ozzy was here...')
})

