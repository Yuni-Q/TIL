#include <cstdio>
#include <algorithm>
#include <cstring>

using namespace std;

int n, m, a[9][9], r, visited[9][9], b;
int dx[] = { 0, 0, 1, -1 };
int dy[] = { 1, -1, 0, 0 };

bool chk(int x, int y) {
	return 0 <= x && x < n && 0 <= y && y < m;
}

int dfs(int x, int y) {
	visited[x][y] = 1;
	int ret = 1;

	for (int i = 0; i < 4; i++) {
		int cx = x + dx[i];
		int cy = y + dy[i];

		if (chk(cx, cy) && !visited[cx][cy] && !a[cx][cy])
			ret += dfs(cx, cy);
	}

	return ret;
}

int getmax(int ix, int iy, int jx, int jy, int kx, int ky) {
	a[ix][iy] = 1, a[jx][jy] = 1, a[kx][ky] = 1;
	memset(visited, 0, sizeof(visited));

	int ret = 0;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++)
			if (a[i][j] == 2 && !visited[i][j])
				ret += dfs(i, j);
	}
	a[ix][iy] = 0, a[jx][jy] = 0, a[kx][ky] = 0;
	return ret;
}

int main() {
	scanf("%d %d", &n, &m);
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			scanf("%d", &a[i][j]);
			if (a[i][j] == 1)
				b++;
		}
	}

	r = 987654321;
	for (int ix = 0; ix < n; ix++) {
		for (int iy = 0; iy < m; iy++) {
			for (int jx = 0; jx < n; jx++) {
				for (int jy = 0; jy < m; jy++) {
					for (int kx = 0; kx < n; kx++) {
						for (int ky = 0; ky < m; ky++) {
							if (a[ix][iy] || a[jx][jy] || a[kx][ky])
								continue;

							r = min(r, getmax(ix, iy, jx, jy, kx, ky));
						}
					}
				}
			}
		}
	}

	printf("%d\n", n * m - 3 - b - r);
	return 0;
}