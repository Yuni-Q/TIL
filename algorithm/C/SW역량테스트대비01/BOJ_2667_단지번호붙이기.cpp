/*
[문제]
<그림 1>과 같이 정사각형 모양의 지도가 있다. 1은 집이 있는 곳을, 0은 집이 없는 곳을
나타낸다. 철수는 이 지도를 가지고 연결된 집들의 모임인 단지를 정의하고, 단지에 번호를
붙이려 한다. 여기서 연결되었다는 것은 어떤 집이 좌우, 혹은 아래위로 다른 집이 있는
경우를 말한다. 대각선상에 집이 있는 경우는 연결된 것이 아니다. <그림 2>는 <그림 1>을
단지별로 번호를 붙인 것이다. 지도를 입력하여 단지수를 출력하고, 각 단지에 속하는 집의
수를 오름차순으로 정렬하여 출력하는 프로그램을 작성하시오.

[입력]
첫 번째 줄에는 지도의 크기 N(정사각형이므로 가로와 세로의 크기는 같으며 5≤N≤25)이
입력되고, 그 다음 N줄에는 각각 N개의 자료(0혹은 1)가 입력된다.

[출력]
첫 번째 줄에는 총 단지수를 출력하시오. 그리고 각 단지내 집의 수를 오름차순으로
정렬하여 한 줄에 하나씩 출력하시오.

[예제 입력]
7
0110100
0110101
1110101
0000111
0100000
0111110
0111000

[예제 출력]
3
7
8
9
*/

#define _CRT_SECURE_NO_WARNINGS

#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

int board[25][25];
bool visit[25][25];
int dx[] = { 1, -1, 0 , 0 };
int dy[] = { 0, 0, -1, 1 };

// 깊이 우선 탐색을 진행하면서 해당 정점에서 갈 수 있는
// 정점의 수를 반환 (해당 정점을 수에 포함)
int dfs(int x, int y, int v) {
	visit[x][y] = true;
	int count = 1;

	for (int i = 0; i < 4; i++) {
		int nx = x + dx[i];
		int ny = y + dy[i];

		// v*v의 범위인지 확인
		if (nx < 0 || nx >= v || ny < 0 || ny >= v)
			continue;
		// 0이면 집이 없는 곳
		if (board[nx][ny] == 0)
			continue;
		// 방문되지 않은 점들을 방문
		if (!visit[nx][ny]) {
			count += dfs(nx, ny, v);
		}
	}
	return count;
}

int main() {
	int v;
	scanf("%d", &v);
	for (int i = 0; i < v; i++) {
		for (int j = 0; j < v; j++) {
			scanf("%1d", &board[i][j]);
		}
	}

	vector<int> answer;
	// board를 살피면서 dfs를 진행한다
	// 해당정점이 탐색되지 않았다면 탐색을 실행하고 결과를
	// answer에 저장한다.

	for(int i = 0; i < v; i++)
		for (int j = 0; j < v; j++) {
			if (board[i][j] && !visit[i][j])
				answer.push_back(dfs(i, j, v));
		}

	printf("%d\n", answer.size());
	sort(answer.begin(), answer.end());

	for (int i = 0; i < answer.size(); i++)
		printf("%d\n", answer[i]);

}
