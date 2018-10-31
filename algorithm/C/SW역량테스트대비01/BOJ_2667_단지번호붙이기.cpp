/*
[����]
<�׸� 1>�� ���� ���簢�� ����� ������ �ִ�. 1�� ���� �ִ� ����, 0�� ���� ���� ����
��Ÿ����. ö���� �� ������ ������ ����� ������ ������ ������ �����ϰ�, ������ ��ȣ��
���̷� �Ѵ�. ���⼭ ����Ǿ��ٴ� ���� � ���� �¿�, Ȥ�� �Ʒ����� �ٸ� ���� �ִ�
��츦 ���Ѵ�. �밢���� ���� �ִ� ���� ����� ���� �ƴϴ�. <�׸� 2>�� <�׸� 1>��
�������� ��ȣ�� ���� ���̴�. ������ �Է��Ͽ� �������� ����ϰ�, �� ������ ���ϴ� ����
���� ������������ �����Ͽ� ����ϴ� ���α׷��� �ۼ��Ͻÿ�.

[�Է�]
ù ��° �ٿ��� ������ ũ�� N(���簢���̹Ƿ� ���ο� ������ ũ��� ������ 5��N��25)��
�Էµǰ�, �� ���� N�ٿ��� ���� N���� �ڷ�(0Ȥ�� 1)�� �Էµȴ�.

[���]
ù ��° �ٿ��� �� �������� ����Ͻÿ�. �׸��� �� ������ ���� ���� ������������
�����Ͽ� �� �ٿ� �ϳ��� ����Ͻÿ�.

[���� �Է�]
7
0110100
0110101
1110101
0000111
0100000
0111110
0111000

[���� ���]
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

// ���� �켱 Ž���� �����ϸ鼭 �ش� �������� �� �� �ִ�
// ������ ���� ��ȯ (�ش� ������ ���� ����)
int dfs(int x, int y, int v) {
	visit[x][y] = true;
	int count = 1;

	for (int i = 0; i < 4; i++) {
		int nx = x + dx[i];
		int ny = y + dy[i];

		// v*v�� �������� Ȯ��
		if (nx < 0 || nx >= v || ny < 0 || ny >= v)
			continue;
		// 0�̸� ���� ���� ��
		if (board[nx][ny] == 0)
			continue;
		// �湮���� ���� ������ �湮
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
	// board�� ���Ǹ鼭 dfs�� �����Ѵ�
	// �ش������� Ž������ �ʾҴٸ� Ž���� �����ϰ� �����
	// answer�� �����Ѵ�.

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
