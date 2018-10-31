/*
[����]
N��Mũ���� �迭�� ǥ���Ǵ� �̷ΰ� �ִ�.

1	0	1	1	1	1
1	0	1	0	1	0
1	0	1	0	1	1
1	1	1	0	1	1

�̷ο��� 1�� �̵��� �� �ִ� ĭ�� ��Ÿ����, 0�� �̵��� �� ���� ĭ�� ��Ÿ����.
�̷��� �̷ΰ� �־����� ��, (1, 1)���� ����Ͽ� (N, M)�� ��ġ�� �̵��� �� ������ �ϴ� �ּ��� ĭ ����
���ϴ� ���α׷��� �ۼ��Ͻÿ�.

���� �������� 15ĭ�� ������ (N, M)�� ��ġ�� �̵��� �� �ִ�.
ĭ�� �� ������ ���� ��ġ�� ���� ��ġ�� �����Ѵ�.

[�Է�]
ù° �ٿ� �� ���� N, M(2��N, M��100)�� �־�����. ���� N���� �ٿ��� M���� ������ �̷ΰ� �־�����.
������ ������ �پ �Է����� �־�����.

[���]
ù° �ٿ� ������ �ϴ� �ּ��� ĭ ���� ����Ѵ�. �׻� ������ġ�� �̵��� �� �ִ� ��츸 �Է����� �־�����.

[���� �Է�]
4 6
101111
101010
101011
111011

[���� ���]
15

[���� �Է� 2]
4 6
110110
110110
111111
111101

[���� ��� 2]
9
*/

#define _CRT_SECURE_NO_WARNINGS

#include <iostream>
#include <queue>
using namespace std;

int N, M;
int board[101][101];
int dx[] = { -1, 1, 0, 0 };
int dy[] = { 0, 0, -1, 1 };
queue<pair<int, int>> q;

void bfs(int x, int y) {
	q.push(make_pair(x, y));

	while (!q.empty()) {
		x = q.front().first;
		y = q.front().second;
		q.pop();

		for (int k = 0; k < 4; k++) {
			int nx = x + dx[k];
			int ny = y + dy[k];

			if (nx < 0 || nx >= N || ny < 0 || ny >= M)
				continue;

			if (board[nx][ny] == 1) {
				q.push(make_pair(nx, ny));
				board[nx][ny] = board[x][y] + 1;
			}
		}
	}
}

int main() {
	cin >> N >> M;

	for (int i = 0; i < N; i++)
		for (int j = 0; j < M; j++)
			scanf("%1d", &board[i][j]);

	bfs(0, 0);

	cout << board[N - 1][M - 1] << '\n';

	return 0;
}
