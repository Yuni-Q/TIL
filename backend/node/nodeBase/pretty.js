function hello(name){
    console.log('Hi,' + name)
};
hello(yun);

// uglifyjs 파일이름.js // 필요 없는것 줄이기
// uglifyjs 파일이름.js -m // 변수 이름도 줄이기
// uglifyjs 파일이름.js -o uglified.js -m // 줄이것을 저장
// uglifyjs 파일이름.js -o 파일이름.min.js -m // 관습적으로 파일이름.min.js로 저장한다.