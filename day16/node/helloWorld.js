// 터미널로 작성한건 인코딩이 안되어서 파일이 깨짐
function helloWorld() {
  console.log('Hello World');
  helloNode();
}

function helloNode() {
  console.log('Hello Node');
}

helloWorld();

// echo 터미널에서 파일 만드는법
// echo "
// >> function helloWorld(0 {
// >>   console.log('Hello World');
// >>   helloNode();
// >> }
// >>
// >> function helloNode() {
// >>   console.log('Hello Node');
// >> }
// >>
// >> helloWorld();
// >> " >> helloWorld.js
// >>