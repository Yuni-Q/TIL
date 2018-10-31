/*
[문제]
N×M크기의 배열로 표현되는 미로가 있다.

1	0	1	1	1	1
1	0	1	0	1	0
1	0	1	0	1	1
1	1	1	0	1	1

미로에서 1은 이동할 수 있는 칸을 나타내고, 0은 이동할 수 없는 칸을 나타낸다.
이러한 미로가 주어졌을 때, (1, 1)에서 출발하여 (N, M)의 위치로 이동할 때 지나야 하는 최소의 칸 수를
구하는 프로그램을 작성하시오.

위의 예에서는 15칸을 지나야 (N, M)의 위치로 이동할 수 있다.
칸을 셀 때에는 시작 위치와 도착 위치도 포함한다.

[입력]
첫째 줄에 두 정수 N, M(2≤N, M≤100)이 주어진다. 다음 N개의 줄에는 M개의 정수로 미로가 주어진다.
각각의 수들은 붙어서 입력으로 주어진다.

[출력]
첫째 줄에 지나야 하는 최소의 칸 수를 출력한다. 항상 도착위치로 이동할 수 있는 경우만 입력으로 주어진다.

[예제 입력]
4 6
101111
101010
101011
111011

[예제 출력]
15

[예제 입력 2]
4 6
110110
110110
111111
111101

[예제 출력 2]
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
