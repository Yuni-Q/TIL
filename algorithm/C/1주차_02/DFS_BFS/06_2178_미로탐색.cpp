/*
[����]
N��Mũ���� �迭�� ǥ���Ǵ� �̷ΰ� �ִ�.

1	0	1	1	1	1
1	0	1	0	1	0
1	0	1	0	1	1
1	1	1	0	1	1

�̷ο��� 1�� �̵��� �� �ִ� ĭ�� ��Ÿ����, 0�� �̵��� �� ���� ĭ�� ��Ÿ����.
�̷��� �̷ΰ� �־����� ��, (1, 1)���� ����Ͽ�
(N, M)�� ��ġ�� �̵��� �� ������ �ϴ� �ּ��� ĭ ���� ���ϴ� ���α׷��� �ۼ��Ͻÿ�.

���� �������� 15ĭ�� ������ (N, M)�� ��ġ�� �̵��� �� �ִ�.
ĭ�� �� ������ ���� ��ġ�� ���� ��ġ�� �����Ѵ�.

[�Է�]
ù° �ٿ� �� ���� N, M(2��N, M��100)�� �־�����.
���� N���� �ٿ��� M���� ������ �̷ΰ� �־�����.
������ ������ �پ �Է����� �־�����.

[���]
ù° �ٿ� ������ �ϴ� �ּ��� ĭ ���� ����Ѵ�.
�׻� ������ġ�� �̵��� �� �ִ� ��츸 �Է����� �־�����.

[���� �Է�]
4 6
101111
101010
101011
111011

[���� ���]
15
*/

#include <iostream>
#include <queue>
using namespace std;

int N, M;
int map[101][101] = { 0, };
const int dx[] = { 0, 0, 1, -1 };
const int dy[] = { 1, -1, 0, 0 };
queue<pair<int, int>> q;

void bfs(int x, int y) {

	q.push(make_pair(x, y));

	while (!q.empty()) {
		x = q.front().first;
		y = q.front().second;
		q.pop();

		for (int k = 0; k < 4; k++) {
			int next_x = x + dx[k];
			int next_y = y + dy[k];

			if (next_x < 0 || next_x > N - 1 || next_y < 0 || next_y > M - 1)
				continue;

			if (map[next_x][next_y] == 1) {
				q.push(make_pair(next_x, next_y));
				map[next_x][next_y] = map[x][y] + 1;
			}
		}
	}
}

int main() {
	cin >> N >> M;

	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++) {
			scanf_s("%1d", &map[i][j]);
		}
	}

	bfs(0, 0);

	cout << map[N - 1][M - 1] << '\n';

	return 0;
}