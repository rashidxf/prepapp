module.exports = {
    databaseURL: {
        host: process.env.DB_HOST || '127.0.0.1',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'your_password',
        database: process.env.DB_NAME || 'appusers',
        port: process.env.DB_PORT || 3306
    }
};

