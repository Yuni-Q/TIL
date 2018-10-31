#include <iostream>

using namespace std;

int dx[4] = { -1, 0, 1, 0 };	// ��
int dy[4] = { 0, 1, 0, -1 };	// ��
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
		a[x][y] = 2;	// ���� ��ġ�� û��
		for (int k = 0; k < 4; k++) {	// ���ʹ������ Ž��
			dir = (dir + 3) % 4;	// ���� ����
			int nx = x + dx[dir];
			int ny = y + dy[dir];

			if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
				if (a[nx][ny] == 0) {	// û������ ���� ����
					clean = false;
					x = nx;
					y = ny;
					cnt++;
					break;
				}
			}
		}
		if (clean) {	// �� ���� ��� û�Ұ� �Ǿ��ְų� ��
			x = x - dx[dir];
			y = y - dy[dir];
			if (a[x][y] == 1) break;	// �����ߴµ� ��

		}
	}
	cout << cnt << '\n';

	return 0;
}
