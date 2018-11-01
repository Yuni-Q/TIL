
# Issue

## Issue

모든것이 이슈라고 볼 수 있습니다. 새로운 추가될 가능, 개선 해야할 가능, 버그 등등 모든것이 이슈라고 볼 수 있습니다. 모든 활동 내역에 대해서 이슈를 등록하고 그 이슈기반으로 작업을 진행하게 됩니다.
> 이슈를 등록할 때 자주 사용하는 템플릿을 등록해서 사용하는 방법이 효율적입니다. 이슈 템플릿을 등록하는 방법을 소개해드리겠습니다.<br>

Assignees : 해당 작업의 담당자<br>
Labels: 해당 작업의 성격<br>
Milestone: 해당 작업이 속한 파트<br>

Github에서 생성된 Issue 기반으로 Branch를 생성하는 것이 핵심입니다.<br>
> #[해당 Issue Number]

```bash
git commit -m "#[해당 Issue Number] 해결"
```

Issue Number 기반으로 Branch를 생성(Issue Number Branch 네이밍에 추가)하면 아주 명확해집니다.<br>

## Pull Request[Code Review]

resolved: #1(해당 Issue Number) 풀리퀘스트 요청하는 이유 즉 무슨 이슈에 대한 작업인지 명시합니다.<br>
resolved 키워드를 입력하면 해당 풀리퀘스트가 master Branch에 반영되면 자동으로 close 됩니다. 자동으로 close 되는 것이 싫으시다면 issue: #[해당 Issue Number]를 작성해주세요.<br>
이렇게 Pull Request가 생성되면 새로운 Issue Number가 부여됩니다. 즉 Pull Request도 Issue입니다.<br>

### Code Review
소스코드에 대한 질문 등 다양한 comment를 남기는 방식으로 pull reqeust가 진행합니다.<br>
Approve: 코드에 대한 의문점이 없다면 승인 .<br>
Comment: 간단한 피드백 제출<br>
Request changes: 해당 코드에 문제가 있다고 판단되며 코드를 반드시 수정 요구<br>