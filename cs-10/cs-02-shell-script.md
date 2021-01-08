# Mission: Shell script 정복기

- Shell Script를 한 번 본 후, 실습을 해보려고하니 너무 불편하고 안예쁨
- 조금만! 예쁘게 만들어보기로 함
- vimrc 수정

  ![cs02_25](https://user-images.githubusercontent.com/70361152/104014969-4321e980-51f7-11eb-86b2-5904ed4c84e2.jpg)

- Shell Script 실습 중

  ![cs02_26](https://user-images.githubusercontent.com/70361152/104014970-43ba8000-51f7-11eb-9b74-bd4faa2f1213.jpg)

- script를 보다보니 [#!/bin/sh](https://storycompiler.tistory.com/101) 가 계속 나오는데 뭔지 궁금해져서 좀 찾아봤다.

  ```
  ls -la /bin/sh
  ```

  ![cs02_27](https://user-images.githubusercontent.com/70361152/104014971-43ba8000-51f7-11eb-821a-d4d397b7c5a4.jpg)

  ```
  lrwxrwxrwx 1 root root 4 Aug  5 06:39 /bin/sh -> dash
  ```

  - dash에 링크가 걸려있다
  - dash와 bash에 대해 짧게 알아본 재미있는 시간이었다.
    - dash: 상대적으로 가벼움(Ubuntu 6.06부터)
    - bash: 기능이 풍부함(로그인 쉘)
    - 세대교체에 따른 세대차이가 좀 있다고 이해하고 넘어감

- 뭔지 알고만 넘어가려고 했던 **#!/bin/sh**가 말썽을 일으킴

  ![q_01](https://user-images.githubusercontent.com/70361152/104015416-f2f75700-51f7-11eb-9341-3846b367af65.JPG)
  ![q_02](https://user-images.githubusercontent.com/70361152/104015419-f38fed80-51f7-11eb-88a4-a2d465635cf4.JPG)
  ![q_03](https://user-images.githubusercontent.com/70361152/104015422-f4288400-51f7-11eb-852b-0f494b290ab2.JPG)

  ```
  #!bin/sh
  ```

  ```
  #!bin/bash
  ```

  - 어떻게 해도 오류가 나고 있음
  - 원인은 자세히 모르겠지만 dash가 아닌 bash를 사용해보라는 해결책이 검색됐음
  - sh의 심볼릭링크가 dash로 돼있으니까 이것만 bash로 바꾸면 되겠다고 생각함
  - **또 하나의 변수가 생김**
    - /bin 도 있고 /usr/bin 도 있음
    - [/bin 과 /usr/bin 의 차이는?](https://wookiist.tistory.com/10)
    - bin 폴더에는 명령어 파일들이 들어있고, 보편적이냐 아니냐에 따라서 usr와 root에 따로 담겨있음
    - custom한건 /usr/local/bin 에 위치시키는게 좋음
    - sbin 들은 항상 root권한이 필요함
  - 다시 /bin/sh -> dash 를 bash로 변경하려고 하는데 'File exists' 오류가 계속 나옴

    ```
    ln -s /bin/sh bash
    ```

    - 지나고보니 반대로 썼음
    - 몇 번의 엉뚱한 테스트 끝에 파일이 존재해서 그렇다고 생각하고, 조금 이상하다는 느낌과 함께 sh파일을 삭제
    - sh 명령어는 불통이 되고, /bin 에서도 /usr/bin 에서도 sh 파일은 삭제가 되어버림
    - 갈 길을 잃음...

  - [심볼릭 링크에 대해서 더 공부함](https://server-talk.tistory.com/140)

    - 일단 원본 파일을 삭제한건 아니니 다시 링크만 잘 연결해주면 될 거라는 생각이 듬

      ```
      ln -s /bin/bash /bin/sh
      ```

      ```
      ln -sf /bin/bash /bin/sh
      ```

      ```
      ln -s /bin/bash /usr/bin/sh
      ```

      ```
      ln -sf /bin/bash /usr/bin/sh
      ```

    - 모든 sh 가 /bin/bash 를 가리키도록 해봄 (오류가 남)

      ```
      Too many levels of symbolic links
      ```

    - 다시 sh 를 삭제한 후에 한 개만 연결해 봤더니 일단 sh 가 작동함

      ```
       /bin/sh -> /bin/bash
      ```

      - sh 가 원래는 dash로 링크가 되어있었는데 /bin/bash 로 되어 있는게 불편해서 원래대로 바꿔봄
      - 작동이 안됨
      - 다시 위와 같이바꿈

    - 그런데 오류가 안나고 정상작동함

      ![cs02_28](https://user-images.githubusercontent.com/70361152/104014972-44531680-51f7-11eb-908e-f008a9e14b34.jpg)

    - 왜 되는지 모르겠지만 일단 Shell script를 공부해야 하므로 다음 단계로 넘어가기로 함

## 1. 폴더 16개 만들기

- 테스트를 자주 하게 될 것 같아서 mkdir(폴더 만들기)과 rmdir(폴더 지우기)파일 생성

  ![cs02_29](https://user-images.githubusercontent.com/70361152/104014973-44531680-51f7-11eb-87b7-5990f6002fc9.jpg)

- mkdir로 폴더 생성

  ![cs02_30](https://user-images.githubusercontent.com/70361152/104014974-44ebad00-51f7-11eb-9e49-204cacd56d88.jpg)

## 2. 각 폴더에 불특정하게 .cs 파일 넣어두기

- random으로 하고 싶었지만 거기까진 시간이 없어서 일단 숙제로 남겨둠
- 수작업으로 넣음(엣지케이스를 위해서 day1과 day16을 포함시키고, test를 위해서 파일명의 숫자를 폴더명과 일치시킴)

## 3. 스크립트로 미션 진행

- 생각보다 쉽지 않다.
- 잘못하면 폴더가 엄청 많이 생기거나 반대로 완전 다 지워질 수도 있을 것 같다.
- 그래서 먼저 echo 정도로 테스트를 하는 중
  ![cs02_31](https://user-images.githubusercontent.com/70361152/104014975-44ebad00-51f7-11eb-9340-8408463e77b6.jpg)

- cs파일들만 불러내는건 성공
  ![cs02_32](https://user-images.githubusercontent.com/70361152/104017070-cb55be00-51fa-11eb-9c72-4fb92b70ba58.jpg)

  - 그런데 파일이 두 개 이상이면 오류가 난다.

- 조건문 안에 띄어쓰기 수정 후 test 정상 작동 확인
  ![cs02_33](https://user-images.githubusercontent.com/70361152/104017699-ed9c0b80-51fb-11eb-9abc-8ce4de13e353.jpg)

- 몇 가지 경우를 고려해서 조금 더 수정했다.
  - 파일이 여러개일 경우
  - 확장자가 다를 경우
  - cs 파일은 없지만 다른 파일이 있을 경우
  - [왜 나만 정규식을 보고있는 것 같지... 이렇게 하는게 아닌가](https://blog.leocat.kr/notes/2017/07/27/shell-count-folders-and-files)
    ![cs02_34](https://user-images.githubusercontent.com/70361152/104030213-61dfaa80-520e-11eb-9ad4-defb1509bbb8.jpg)
- install zip
  ```
  sudo apt-get install zip
  ```
  ![cs02_35](https://user-images.githubusercontent.com/70361152/104031764-8472c300-5210-11eb-8460-cd6d2ce192f4.jpg)
