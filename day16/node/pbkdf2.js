//salt는 가지고있어야함 해시,솔트값은 가지고 있어야함
//원래는 랜덤으로 하면안됨 안에서 솔트가지지말고 밖에서 설정해놔야댐
// 솔트 값은 밖에서 관리를 해야한다. 그리고 굳이 64개까진 안해도댐

const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64 , 'sha512', (err, key) =>{
        console.log('password:', key.toString('base64'));
    });
});