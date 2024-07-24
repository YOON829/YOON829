// 버전이 1.2.3 메이저 마이너 픽스
// 1이 바뀔때 아키텍쳐 자체가 바뀌었을떄 메인버전이 바뀌고
// 마이너버전이 바뀔땐 기능이 바뀔때
// 픽스는 버그 등등 수정
// deprecate 버전이 올라갈때 많이 씀 (메이저버전이 올라갈때)
// 기능은 비슷한데 이름이 바뀌어서 올라갈때 다음에 없어질수도 있는 코드라고 할수있음



const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x,y) => {
    console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1,2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
.then((buf) => {
    console.log(buf.toString('base64'));
})
.catch((err) => {
    console.error(err);
})