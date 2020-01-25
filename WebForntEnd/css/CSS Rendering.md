# CSS Rendering

## POST PROCESS(GPU가 하는 일)

- geometry
- fragment
- postprocess

## TRANSFORM 3D

- perspective
- perspective-origin
- transform-style
- transform-origin
- backface-visiblity

## SASS

- 프로그래밍 언어이다.
- css를 많이 따른다.
- 변수는 \$로 선언
- 할당은 :를 사용
- 예약어는 @를 사용
- 스트링안에 변수 사용은 #{} 사용

## CSS ATTRIBUTE SELECTOR

- [attr] - 속성이 존재함
- [attr=val] - 값과 일치
- [attr~=val] - 공백으로 구분된 단어로 포함하면 일치
- [attr|=val] - 일치하거나 뒤에 -가 붙을 때
- [attr*=val] - 값이 포함될 때
- [attr^=val] - 값으로 시작할 때
- [attr$=val] - 값으로 끝날 때
- [(ex) i] - 대소문 구분 안 함

## HTML MICRODATA

- itemscope - 적용범위 설정
- itemtype - 스키마 설정
- itemid - 특정 id 부여
- itemprop - 속성명
- content - 비가시적일 때 값을 설정
- value - 가시적인 값이 원하는 값이 아닐 때
- itemref - scope 계층구조 안에 없을 때

## HTML DATASET

- 케밥케이스로 작성
- 사용시에는 dataset.카멜케이스로 사용

## DISPLAY GROUP

- OUTSIDE
  - BLOCK
  - INLINE
  - RUN-IN
- INSIDE
  - FLOW
  - FLOW-ROOT
  - TABLE
  - FLEX
  - FGID
  - SUBGRID
  - RUBY
- LISTITEM
- INTERNAL
  - TABLE & RUBY
- BOX
  - CONTENTS
  - NONE
- LEGACY
  - INLINE-BLOCK
  - INLINE-TABLE
  - LININE-FLEX
  - INLINE-GRID
