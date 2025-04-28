const prompt = require('prompt');
const crypto = require('crypto');

prompt.start();

prompt.get(['password', 'confirmPassword'], function (err, result) {
    if (err) {
        console.log('Сталася помилка.');
        return;
    }

    const password = result.password;
    const confirmPassword = result.confirmPassword;

    if (password !== confirmPassword) {
        console.log('Паролі не співпадають!');
        return;
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex');

    console.log('Пароль успішно зашифровано!');
    console.log('Хеш пароля (SHA-256):', hash);
});
