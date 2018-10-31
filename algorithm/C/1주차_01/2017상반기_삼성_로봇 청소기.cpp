#include <iostream>

using namespace std;

int dx[4] = { -1, 0, 1, 0 };	// 행
int dy[4] = { 0, 1, 0, -1 };	// 열
int n, m, d;
int a[50][50];
int cnt = 1;

int main() {
	cin >> n >> m;
	int x, y, dir;
	cin >> x >> y >> dir;

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			cin >> a[i][j];
		}
	}

	while (1) {
		bool clean = true;
		a[x][y] = 2;	// 현재 위치를 청소
		for (int k = 0; k < 4; k++) {	// 왼쪽방향부터 탐색
			dir = (dir + 3) % 4;	// 왼쪽 방향
			int nx = x + dx[dir];
			int ny = y + dy[dir];

			if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
				if (a[nx][ny] == 0) {	// 청소하지 않은 공간
					clean = false;
					x = nx;
					y = ny;
					cnt++;
					break;
				}
			}
		}
		if (clean) {	// 네 방향 모두 청소가 되어있거나 벽
			x = x - dx[dir];
			y = y - dy[dir];
			if (a[x][y] == 1) break;	// 후진했는데 벽

		}
	}
	cout << cnt << '\n';

	return 0;
}
