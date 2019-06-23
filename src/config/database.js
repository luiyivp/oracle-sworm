const dbpool = {
    driver: 'oracle',
    config: {
        user: 'hr',
        password: 'hr',
        connectString: 'localhost/XE',
        pool: true,
        options: {
            maxRows: 1000
        }
    }
}

module.exports = dbpool