/*
[����]
�����̴� ������ ���ٲ����� �ϰ� �ִ�.
�����̴� ���� �� N(0 �� N �� 100,000)�� �ְ�,
������ �� K(0 �� K �� 100,000)�� �ִ�. �����̴� �Ȱų� �����̵��� �� �� �ִ�.
����, �������� ��ġ�� X�� �� �ȴ´ٸ� 1�� �Ŀ� X-1 �Ǵ� X+1�� �̵��ϰ� �ȴ�.
�����̵��� �ϴ� ��쿡�� 1�� �Ŀ� 2*X�� ��ġ�� �̵��ϰ� �ȴ�.

�����̿� ������ ��ġ�� �־����� ��,
�����̰� ������ ã�� �� �ִ� ���� ���� �ð��� �� �� ������
���ϴ� ���α׷��� �ۼ��Ͻÿ�.

[�Է�]
ù ��° �ٿ� �����̰� �ִ� ��ġ N�� ������ �ִ� ��ġ K�� �־�����.

[���]
�����̰� ������ ã�� ���� ���� �ð��� ����Ѵ�.

[���� �Է�]
5 17

[���� ���]
4

[��Ʈ]
�����̰� 5-10-9-18-17 ������ ���� 4�ʸ��� ������ ã�� �� �ִ�
*/

#include <iostream>
#include <queue>
using namespace std;

int N, K;			// N: ������ �� K: ������ ��
pair<int, int> now; // <node, time>
queue<pair<int, int>> q;	//q�� pair�� ���𰡴�
bool visit[100005];
int ans;		// 

int main() {
	cin >> N >> K;
	q.push(make_pair(N, 0));

	while (!q.empty()) {
		now = q.front();
		q.pop();

		int position = now.first;
		int time = now.second;
		visit[position] = true;

		if (position == K) {
			ans = time;
			break;
		}

		if (position * 2 <= 100000 && !visit[position * 2])
			q.push(make_pair(position * 2, time + 1));

		if (position - 1 >= 0 && !visit[position - 1])
			q.push(make_pair(position - 1, time + 1));

		if (position + 1 <= 100000 && !visit[position + 1])
			q.push(make_pair(position + 1, time + 1));
	}

	cout << ans << '\n';
}