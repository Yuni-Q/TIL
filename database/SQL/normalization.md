
# Normalization

1NF, 2NF, 3NF, BCNF, 4NF, 5NF, 6NF 가 있으며<br>
보통 3NF 가 되었으면 ‘정규화 되었다’ 라고 합니다.<br>

## 1NF(First Normal Form)
중복되는 항목이 없어야 합니다. ( 도메인이 원자값만으로 되어 있어야 합니다. )

## 2NF(Second Normal Form)
부분 함수적 종속 관계를 제거해야 합니다.

## 3NF(Third Normal Form)
이행 함수적 종속 (x -> y ->z) 제거 합니다.

## BC(Boyce-codd) 정규형 (BCNF)
결정자이면서 후보키가 아닌 것 제거 합니다.

## 제4정규형
다치 종속 제거 합니다

## 제5정규형
조인 종속성 이용 합니다.
