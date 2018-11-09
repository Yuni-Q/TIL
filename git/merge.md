
## Merge
1. Merge (a, b, c 를 refer 하는 m 커밋 노드 생성, m은 parent로 Init, c 를 가짐)
1. Squash and Merge (a, b, c 를 합쳐서 새로운 커밋으로 만들고, 머지 대상 브렌치에 추가, 'a,b,c' 커밋은 parent를 Init 하나만 가짐.)
1. Rebase and Merge (a, b, c 를 심리스하게 머지 대상 브렌치로 추가, 각 커밋들은 모두 parent를 하나씩만 가짐.)

### 설명
Merge
> 커밋 m에서부터 뒤로 되돌아가면서 부모를 모두 찾아 브렌치를 구성. 커밋 m은 부모로 c, Init을 가지고 있으며, c는 b, b는 a, a는 Init을 다시 부모로 가짐. 이 형상을 모두 backtrace 하여, Init -> a -> b -> c -> m이라는 구조를 만들고 이 구조가 모두 히스토리에 남음.<br>

Squash and Merge
> 커밋 'a,b,c' 는 Init만을 부모로 가진 단일 커밋. 작업했던 브렌치의 a, b, c 커밋들은 머지 후의 메인 브렌치 커밋 Init, 'a,b,c' 와 아무런 연관을 가지지 않음.<br>

Rebase and Merge
> 커밋 a, b, c 의 관계를 그대로 유지한 채, 메인 브렌치에 그대로 추가. 커밋 a는 부모로 커밋 e를 가짐. Rebase and Merge 작업 후에는, 작업했던 브렌치의 a, b, c 커밋들은 머지 후의 메인 브렌치의 Init, d, e, a, b, c 커밋들과 연관 관계를 가지지 않음.<br>

### 사용 예시
develop - feature 브렌치간 머지
> Squash and Merge가 유용합니다. feature의 복잡하고 지저분한 커밋 히스토리를 모두 묶어 완전 새로운 커밋으로 develop 브렌치에 추가하여, develop 브렌치에서 독자적으로 관리할 수 있기 때문입니다. 일반적으로 머지 후에 feature 브렌치를 삭제해버리는 점을 떠올려 보면, feature 브렌치의 커밋 히스토리를 모두 develop 브렌치에 직접 연관 지어 남길 필요가 없습니다.

master - develop 브렌치간 머지
> Rebase and Merge가 유용합니다. develop의 내용을 master에 추가할 때에는 별도의 새로운 커밋을 생성할 이유가 없기 때문입니다.

hotfix - develop, hotfix - master 브렌치간 머지
> Merge 또는 Squash and Merge 모두 유용합니다. 때에 따라 골라 사용하면 좋을 것 같습니다. hotfix 브렌치 작업의 각 커밋 히스토리가 모두 남아야 하는 경우 Merge, 필요 없는 경우 Squash and Merge를 사용하면 됩니다.