# VSCode에서 c/c++ 컴파일

1. Visual Studio Code의 메뉴에서 터미널 - 기본빌드 작업구성 선택
2. '템플릿에서 tasks.json 파일 만들기' 선택
3. 'Others 임의의 외부 명령을 실행하는 예' 선택
4. 열린 task.json 파일의 코드를 아래의 코드로 대체한다.
```json
{
    "version": "2.0.0",
    "runner": "terminal",
    "type": "shell",
    "echoCommand": true,
    "presentation" : { "reveal": "always" },
    "tasks": [
          //C++ 컴파일
          {
            "label": "save and compile for C++",
            "command": "g++",
            "args": [
                "${file}",
                "-std=c++11",
                "-o",
                "${fileDirname}/${fileBasenameNoExtension}"
            ],
            "group": "build",

            //컴파일시 에러를 편집기에 반영
            //참고:   https://code.visualstudio.com/docs/editor/tasks#_defining-a-problem-matcher

            "problemMatcher": {
                "fileLocation": [
                    "relative",
                    "${workspaceRoot}"
                ],
                "pattern": {
                    // The regular expression. 
                   //Example to match: helloWorld.c:5:3: warning: implicit declaration of function 'prinft'
                    "regexp": "^(.*):(\\d+):(\\d+):\\s+(warning error):\\s+(.*)$",
                    "file": 1,
                    "line": 2,
                    "column": 3,
                    "severity": 4,
                    "message": 5
                }
            }
        },
        //C 컴파일
        {
            "label": "save and compile for C",
            "command": "gcc",
            "args": [
                "${file}",
                "-o",
                "${fileDirname}/${fileBasenameNoExtension}"
            ],
            "group": "build",

            //컴파일시 에러를 편집기에 반영
            //참고:   https://code.visualstudio.com/docs/editor/tasks#_defining-a-problem-matcher

            "problemMatcher": {
                "fileLocation": [
                    "relative",
                    "${workspaceRoot}"
                ],
                "pattern": {
                    // The regular expression. 
                   //Example to match: helloWorld.c:5:3: warning: implicit declaration of function 'prinft'
                    "regexp": "^(.*):(\\d+):(\\d+):\\s+(warning error):\\s+(.*)$",
                    "file": 1,
                    "line": 2,
                    "column": 3,
                    "severity": 4,
                    "message": 5
                }
            }
        },
        // 바이너리 실행(Ubuntu)

        {

            "label": "execute",

            "command": "cd ${fileDirname} && ./${fileBasenameNoExtension}",

            "group": "test"

        }
        // // 바이너리 실행(Windows)
        // {
        //     "label": "execute",
        //     "command": "cmd",
        //     "group": "test",
        //     "args": [
        //         "/C", "${fileDirname}\\${fileBasenameNoExtension}"
        //     ]
    
        // }
    ]
}
```

5. 컴파일과 실행을 간편하게 할 수 있도록 단축키 수정 '기본설정 - 바로 가기 키' 선택
6. 다음 두개를 각각 검색하여 단축키를 수정해준다.
  - 컴파일 : workbench.action.tasks.build -> alt + c
  - 실행 : workbench.action.tasks.test   -> alt + r
7. 코드가 보이는 화면에서 컴파일 단축키 alt + c 를 눌러 사용하고싶은 컴파일러를 선택하면 컴파일된다.
8. 이후 실행 단축키 alt + r 을 클릭한 뒤 'execute'를 선택하면 실행이 된다.

---

참조 : [VSCode C/C++ 코딩 초기세팅(Mac)](https://ldgeao99.tistory.com/203)