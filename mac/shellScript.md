
# Shell Script

## Bash 입문자를 위한 핵심 요약 정리

파일명은 *.sh
> 만일 실행이 안된다면 퍼미션을 변경해야되는데 뭔지 모르겠다면 일단 이렇게 해봐라.chmod 700 hello.sh<br>
### echo
문장을 출력하는데 자동으로 줄바꿈 됩니다.<br>

### printf
출력 ( C언어와 비슷합니다. )<br>

### 주석(Comments)
\#<br>

### 함수(Function)
형식은 다른 언어와 차이는 없습니다.<br>
그러나 function는 생략해도 됩니다.<br>

### 변수(Variable)
변수 사용시에는 "=" 기호 앞뒤로 공백이 없이 입력하면 대입연산자가 됩니다.<br>
그리고 선언된 변수는 기본적으로 전역 변수(global variable) 입니다.<br>
단 함수 안에서만 지역 변수(local variable)를 사용할 수 있는데 사용할려면 변수 명 앞에 local을 붙여주면 됩니다.<br>
그런데 전역 변수는 현재 실행된 스크립트 파일에서만 유효합니다. 자식 스크립트에서는 사용 할 수 없는 변수 입니다.<br>
변수 명 앞에 export을 붙여주면 환경 변수(environment variable)로 설정되어 자식 스크립트에서 사용 가능합니다.<br>
환경 변수 사용시 예약 변수(reserved variable)에 주의해야 합니다.(참고로 환경 변수는 .bash_profile에서 정의 합니다.)<br>

#### 변수 EXAMPLE
```bash
# 전역 변수 지정
string="hello world"
echo ${string}

# 지역 변수 테스트 함수
string_test() {
    # 전역 변수와 동일하게 사용함. 만약 local 뺀다면 전역 변수에 덮어씌어지게 됨
    local string="local"
    echo ${string}
}
# 지역 변수 테스트 함수 호출
string_test
# 지역 변수 테스트 함수에서 동일한 변수 명을 사용했지만 값이 변경되지 않음
echo ${string}

# 환경 변수 선언
export hello_world="hello world..."
# 자식 스크립트 호출은 스크립트 경로을 쓰면된다.
/home/export_test.sh

#환경 변수를 테스트하기 위해 export_test.sh 파일을 만들고 선언한 변수를 확인해본다.
echo ${hello_world}
```

### 변수 타입 지정(Variables Revisited)
Bash 변수는 타입을 구분하지 않고 기본적으로 문자열 입니다. 단 문맥에 따라서 연산 처리합니다.<br>
그런데 불완전한 형태의 declare, typeset 타입 지정 명령을 지원 합니다.( 두 명령은 동일 합니다. )<br>
참고: 코멘트에 있는 다른 문법 사용을 추천합니다.<br>

#### 변수 타입 지정 EXAMPLE
```bash
# 읽기 전용
# readonly string_variable="hello world" 문법과 동일 함
declare -r string_variable

# 정수
# number_variable=10 문법과 동일 함
declare -i number_variable=10

# 배열
# array_variable=() 문법과 동일 함
declare -a array_variable

# 환경 변수
# export export_variable="hello world" 문법과 동일 함
declare -x export_variable="hello world"

# 현재 스크립트의 전체 함수 출력
declare -f

# 현재 스크립트에서 지정한 함수만 출력
declare -f 함수이름
```

### 정수 비교(Integer Comparison)
|문자|설명|
|---|---|
|-eq|	같음|
|-ne|	같지 않음|
|>, -gt|	더 큼(> 이중 소괄호에서 사용 가능)|
|>=, -ge|	더크거나 같음(>= 이중 소괄호에서 사용 가능)|
|<, -lt|	더 작음(< 이중 소괄호에서 사용 가능)|
|<=, -le|	더 작거나 같음(<= 이중 소괄호에서 사용 가능)|

### 문자열 비교(String Comparison)
|문자|설명|
|---|---|
|=, ==|	같음|
|!=|	같지 않음|
|<|	ASCII 알파벳 순서에 더 작음|
|>|	ASCII 알파벳 순서에서 더 큼|
|-z|	문자열이 NULL, 길이가 0인 경우|
|-n|	문자열이 NULL이 아님|
|${변수}|	문자열이 NULL이 아님|

### 파일 비교(File test operators)
|문자|설명|
|---|---|
|-e|	파일이 존재|
|-f|	파일이 존재하고 일반 파일인 경우(디렉토리 혹은 장치파일이 아닌 경우)|
|-s|	파일이 존재하고 0보다 큰 경우|
|-d|	파일이 존재하고 디렉토리인 경우|
|-b|	파일이 존재하고 블록장치 파일인 경우|
|-c|	파일이 존재하고 캐릭터 장치 파일인 경우|
|-p|	파일이 존재하고 FIFO인 경우|
|-h|	파일이 존재하고 한 개 이상의 심볼릭 링크가 설정된 경우|
|-L|	파일이 존재하고 한 개 이상의 심볼릭 링크가 설정된 경우|
|-S|	파일이 소켓 디바이스인 경우|
|-t|	파일이 디스크립터가 터미널 디바이스와 연관이 있음|
|-r|	파일이 존재하고 읽기 가능한 경우|
|-w|	파일이 존재하고 쓰기가 가능한 경우|
|-x|	파일이 존재하고 실행 가능한 경우|
|-g|	파일이 존재하고 SetGID가 설정된 경우|
|-u|	파일이 존재하고 SetUID가 설정된 경우|
|-k|	파일이 존재하고 스티키 비트(Sticky bit)가 설정된 경우|
|-O|	자신이 소유자임|
|-G|	그룹 아이디가 자신과 같음|
|-N|	마지막으로 읽힌 후에 변경 됐음|
|file1 -nt file2|	file1 파일이 file2 파일보다 최신임|
|file1 -ot file2|	file1 파일이 file2 파일보다 예전것임|
|file1 -ef file2|	file1 파일과 file2 파일이 같은 파일을 하드 링크하고 있음|
|!|	조건이 안 맞으면 참(예: ! -e file)|

### 배열(Array Variable)
배열 변수 사용은 반드시 괄호를 사용해야 합니다.(예: ${array[1]})<br>
참고: 1차원 배열만 지원 합니다.<br>

#### 배열 EXAMPLE
```bash
# 배열의 크기 지정없이 배열 변수로 선언
# 참고: 'declare -a' 명령으로 선언하지 않아도 배열 변수 사용 가능함
declare -a array

# 4개의 배열 값 지정
array=("hello" "test" "array" "world")

# 기존 배열에 1개의 배열 값 추가(순차적으로 입력할 필요 없음)
array[4]="variable"

# 기존 배열 전체에 1개의 배열 값을 추가하여 배열 저장(배열 복사 시 사용)
array=(${array[@]} "string")

# 위에서 지정한 배열 출력
echo "hello world 출력: ${array[0]} ${array[3]}"
echo "배열 전체 출력: ${array[@]}"
echo "배열 전체 개수 출력: ${#array[@]}"

printf "배열 출력: %s\n" ${array[@]}

# 배열 특정 요소만 지우기
unset array[4]
echo "배열 전체 출력: ${array[@]}"

# 배열 전체 지우기
unset array
echo "배열 전체 출력: ${array[@]}"
```

### 조건문(if...elif...else...fi)
조건문 작성 시 주의해야될 부분은 실행 문장이 없으면 오류 발생합니다.<br>
```bash
string1="hello"
string2="world"
if [ ${string1} == ${string2} ]; then
    # 실행 문장이 없으면 오류 발생함
    # 아래 echo 문장을 주석처리하면 확인 가능함
    echo "hello world"
elif [ ${string1} == ${string3} ]; then
    echo "hello world 2"
else
    echo "hello world 3"
fi

# AND
if [ ${string1} == ${string2} ] && [ ${string3} == ${string4} ]
..생략

# OR
if [ ${string1} == ${string2} ] || [ ${string3} == ${string4} ]
..생략

# 다중 조건
if [[ ${string1} == ${string2} || ${string3} == ${string4} ]] && [ ${string5} == ${string6} ]
..생략
```


### 반복문(for, while, until)
반목문 작성 시 아래 명령어(흐름제어)을 알아두면 좋습니다.<br>
반복문을 빠져 나갈때: break<br>
현재 반복문이나 조건을 건너 뛸때: continue<br>
```bash
# 지정된 범위 안에서 반복문 필요 시 좋음
for string in "hello" "world" "..."; do;
    echo ${string};
done

# 수행 조건이 true 일때 실행됨 (실행 횟수 지정이 필요하지 않은 반복문 필요 시 좋음)
count=0
while [ ${count} -le 5 ]; do
    echo ${count}
    count=$(( ${count}+1 ))
done

# 수행 조건이 false 일때 실행됨 (실행 횟수 지정이 필요하지 않은 반복문 필요 시 좋음)
count2=10
until [ ${count2} -le 5 ]; do
    echo ${count2}
    count2=$(( ${count2}-1 ))
done
```

###선택문(case)
정규식을 지원하며 | 기호로 다중 값을 입력 가능하며 조건의 문장 끝에는 ;; 기호로 끝을 표시합니다.<br>
참고: 대문자와 소문자는 다른 문자입니다.<br>
```bash
# case문 테스트를 위한 반복문
for string in "HELLO" "WORLD" "hello" "world" "s" "start" "end" "etc"; do

    # case문 시작
    case ${string} in
        hello|HELLO)
            echo "${string}: hello 일때"
            ;;
        wo*)
            echo "${string}: wo로 시작하는 단어 일때"
            ;;
        s|start)
            echo "${string}: s 혹은 start 일때"
            ;;
        e|end)
            echo "${string}: s 혹은 start 일때"
            ;;
        *)
            echo "${string}: 기타"
            ;;
    esac
    # //case문 끝

done
```

### 예약 변수(Reserved Variable)
|문자|설명|
|---|---|
|HOME|	사용자의 홈 디렉토리|
|PATH|	실행 파일을 찾을 경로|
|LANG|	프로그램 사용시 기본 지원되는 언어|
|PWD|	사용자의 현재 작업중인 디렉토리|
|FUNCNAME|	현재 함수 이름|
|SECONDS|	스크립트가 실행된 초 단위 시간|
|SHLVL|	쉘 레벨(중첩된 깊이를 나타냄)|
|SHELL|	로그인해서 사용하는 쉘|
|PPID|	부모 프로세스의 PID|
|BASH	BASH| 실행 파일 경로|
|BASH_ENV|	스크립트 실행시 BASH 시작 파일을 읽을 위치 변수|
|BASH_VERSION|	설치된 BASH 버전|
|BASH_VERSINFO|	BASH_VERSINFO[0]~BASH_VERSINFO[5]배열로 상세정보 제공|
|MAIL|	메일 보관 경로|
|MAILCHECK|	메일 확인 시간|
|OSTYPE|	운영체제 종류|
|TERM|	로긴 터미널 타입|
|HOSTNAME|	호스트 이름|
|HOSTTYPE|	시스템 하드웨어 종류|
|MACHTYPE|	머신 종류(HOSTTYPE과 같은 정보지만 조금더 상세하게 표시됨)|
|LOGNAME|	로그인 이름|
|UID|	사용자 UID|
|EUID|	su 명령에서 사용하는 사용자의 유효 아이디 값(UID와 EUID 값은 다를 수 있음)|
|USER|	사용자의 이름|
|USERNAME|	사용자 이름|
|GROUPS|	사용자 그룹(/etc/passwd 값을 출력)|
|HISTFILE|	history 파일 경로|
|HISTFILESIZE|	history 파일 크기|
|HISTSIZE|	history 저장되는 개수|
|HISTCONTROL|	중복되는 명령에 대한 기록 유무|
|DISPLAY|	X 디스플레이 이름|
|IFS|	입력 필드 구분자(기본값:   - 빈칸)|
|VISUAL|	VISUAL 편집기 이름|
|EDITOR|	기본 편집기 이름|
|COLUMNS|	현재 터미널이나 윈도우 터미널의 컬럼 수|
|LINES|	터미널의 라인 수|
|LS_COLORS|	ls 명령의 색상 관련 옵션|
|PS1|	기본 프롬프트 변수(기본값: bash\$)|
|PS2|	보조 프롬프트 변수(기본값: >), 명령을 "\"를 사용하여 명령 행을 연장시 사용됨|
|PS3|	쉘 스크립트에서 select 사용시 프롬프트 변수(기본값: #?)|
|PS4|	쉘 스크립트 디버깅 모드의 프롬프트 변수(기본값: +)|
|TMOUT|	0이면 제한이 없으며 time시간 지정시 지정한 시간 이후 로그아웃|

### 위치 매개 변수(Positional Parameters)
|문자|설명|
|---|---|
|$0|	실행된 스크립트 이름|
|$1|	$1 $2 $3...${10}인자 순서대로 번호가 부여된다. 10번째부터는 "{}"감싸줘야 함|
|$*|	전체 인자 값|
|$@|	전체 인자 값($* 동일하지만 쌍따옴표로 변수를 감싸면 다른 결과 나옴)|
|$#|	매개 변수의 총 |개수

### 특수 매개 변수(Special Parameters)
|문자|설명|
|---|---|
|$$|	현재 스크립트의 PID|
|$?|	최근에 실행된 명령어, 함수, 스크립트 자식의 종료 상태|
|$!|	최근에 실행한 백그라운드(비동기) 명령의 PID|
|$-|	현재 옵션 플래그|
|$_|	지난 명령의 마지막 인자로 설정된 특수 변수|

### 매개 변수 확장(Parameter Expansion)
아래 예를 테스트하기 위한 변수: string="abc-efg-123-abc"<br>
|문자|설명|
|---|---|
|${변수}|	$변수와 동일하지만 {} 사용해야만 동작하는 것들이 있음(예: echo ${string})|
|${변수:위치}|	위치 다음부터 문자열 추출(예: echo ${string:4})|
|${변수:위치:길이}|	위치 다음부터 지정한 길이 만큼의 문자열 추출(예: echo ${string:4:3})|
|${변수:-단어}|	변수 미선언 혹은 NULL일때 기본값 지정, 위치 매개 변수는 사용 불가(예: echo ${string:-HELLO})|
|${변수-단어}|	변수 미선언시만 기본값 지정, 위치 매개 변수는 사용 불가(예: echo ${string-HELLO})|
|${변수:=단어}|	변수 미선언 혹은 NULL일때 기본값 지정, 위치 매개 변수 사용 가능(예: echo ${string:=HELLO})|
|${변수=단어}|	변수 미선언시만 기본값 지정, 위치 매개 변수 사용 가능(예: echo ${string=HELLO})|
|${변수:?단어}|	변수 미선언 혹은 NULL일때 단어 출력 후 스크립트 종료,(예: echo ${string:?HELLO})|
|${변수?단어}|	변수 미선언시만 단어 출력 후 스크립트 종료(예: echo ${string?HELLO})|
|${변수:+단어}|	변수 선언시만 단어 사용(예: echo ${string:+HELLO})|
|${변수+단어}|	변수 선언 혹은 NULL일때 단어 사용(예: echo ${string+HELLO})|
|${#변수}|	문자열 길이(예: echo ${#string})|
|${변수#단어}|	변수의 앞부분부터 짧게 일치한 단어 삭제(예: echo ${string#a*b})|
|${변수##단어}|	변수의 앞부분부터 길게 일치한 단어 삭제(예: echo ${string##a*b})|
|${변수%단어}|	변수의 뒷부분부터 짧게 일치한 단어 삭제(예: echo ${string%b*c})|
|${변수%%단어}|	변수의 뒷부분부터 길게 일치한 단어 삭제(예: echo ${string%%b*c})|
|${변수/찾는단어/변경단어}|	처음 일치한 단어를 변경(예: echo ${string/abc/HELLO})|
|${변수//찾는단어/변경단어}|	일치하는 모든 단어를 변경(예: echo ${string//abc/HELLO})|
|${변수/#찾는단어/변경단어}|	앞부분이 일치하면 변경(예: echo ${string/#abc/HELLO})|
|${변수/%찾는단어/변경단어}|	뒷부분이 일치하면 변경(예: echo ${string/%abc/HELLO})|
|${!단어*}, ${!단어@}|	선언된 변수중에서 단어가 포함된 변수 명 추출(예: echo ${!string*}, echo ${!string@})|

### 디버깅(Debugging)
간단하게는 echo, exit 명령나 tee 명령어로 디버깅 합니다.<br>
다른 방법으로 실행 시 옵션을 주거나 코드에 한줄만 추가하면 해볼수 있습니다.<br>
|Bash 옵션(스크립트 실행 시)|	set 옵션(스크립트 코드 삽입)|	설명|
|----------------------|------------------------|---|
|bash -n|	set -n, set -o noexec|	스크립트 실행없이 단순 문법 오류만 검사(찾지 못하는 문법 오류가 있을수 있음)|
|bash -v|	set -v, set -o verbose|	명령어 실행전 해당 명령어 출력(echo)|
|bash -x|	set -x, set -o xtrace|	명령어 실행후 해당 명령어 출력(echo)|
||set -u, set -o nounset| 미선언된 변수 발견시 "unbound variable" 메시지 출력|

### 코멘트
여기서 인자(argument)와 매개변수(parameter)는 이름만 다를 뿐 의미는 같습니다.<br>
Bash는 공백에 민감합니다.<br>
변수 사용은 생각하지 말고 ${변수} 이렇게 사용 할 것을 권장합니다.<br>