/*
[����]
�׷����� DFS�� Ž���� ����� BFS�� Ž���� ����� ����ϴ� ���α׷��� �ۼ��Ͻÿ�.
��, �湮�� �� �ִ� ������ ���� ���� ��쿡�� ���� ��ȣ�� ���� ���� ���� �湮�ϰ�,
�� �̻� �湮�� �� �ִ� ���� ���� ��� �����Ѵ�.

[�Է�]
ù° �ٿ� ������ ���� N(1��N��1,000), ������ ���� M(1��M��10,000), Ž���� ������
������ ��ȣ V�� �־�����. ���� M���� �ٿ��� ������ �����ϴ� �� ������ ��ȣ�� �־�����.
�� ������ ���� �� �־��� ���� �ִµ�, ������ �ϳ��� �ִ� ������ �����ϸ� �ȴ�.
�Է����� �־����� ������ ������̴�.

[���]
ù° �ٿ� DFS�� ������ �����, �� ���� �ٿ��� BFS�� ������ ����� ����Ѵ�.
V���� �湮�� ���� ������� ����ϸ� �ȴ�.

[���� �Է�]
4 5 1
1 2
1 3
1 4
2 4
3 4

[���� ���]
1 2 4 3
1 2 3 4
*/

#include <iostream>
#include <queue>
#include <vector>
#include <string>
using namespace std;

int N, M, V;
bool visit[1001];
int board[1001][1001];
queue<int> q;

void dfs(int x) {
	visit[x] = true;
	cout << x << ' ';

	for (int i = 1; i <= N; i++) {
		if (board[x][i] == 1 && !(visit[i]))
			dfs(i);
	}
}

void bfs(int x) {
	visit[x] = true;
	q.push(x);

	while (!q.empty()) {
		int nx = q.front();
		cout << nx << ' ';
		q.pop();

		for (int i = 1; i <= N; i++) {
			if (board[nx][i] == 1 && !(visit[i])) {
				visit[i] = true;
				q.push(i);
			}
		}
	}
}

int main() {
	int x, y;

	cin >> N >> M >> V;

	for (int i = 1; i <= M; i++) {
		cin >> x >> y;
		board[x][y] = board[y][x] = 1;
	}

	memset(visit, false, sizeof(visit));

	dfs(V);
	memset(visit, false, sizeof(visit));
	cout << '\n';

	bfs(V);
	cout << '\n';

	return 0;
}
