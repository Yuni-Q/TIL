/*
[����]
���� Rĭ, ���� Cĭ���� �� ǥ ����� ���尡 �ִ�. ������ �� ĭ���� �빮�� ���ĺ���
�ϳ��� ���� �ְ�, ���� ��� ĭ (1�� 1��) ���� ���� ���� �ִ�.

���� �����¿�� ������ �� ĭ ���� �� ĭ���� �̵��� �� �ִµ�, ���� �̵��� ĭ��
���� �ִ� ���ĺ��� ���ݱ��� ������ ��� ĭ�� ���� �ִ� ���ĺ����� �޶�� �Ѵ�.
��, ���� ���ĺ��� ���� ĭ�� �� �� ���� �� ����.

���� ��ܿ��� �����ؼ�, ���� �ִ��� �� ĭ�� ���� �� �ִ����� ���ϴ� ���α׷���
�ۼ��Ͻÿ�. ���� ������ ĭ�� ���� ����� ĭ�� ���Եȴ�.

[�Է�]
ù° �ٿ� R�� C�� ��ĭ�� ���̿� �ΰ� �־�����. (1<=R,C<=20) ��° �ٺ��� R���� �ٿ�
���ļ� ���忡 ���� �ִ� C���� �빮�� ���ĺ����� ��ĭ ���� �־�����.

[���]
ù° �ٿ� ���� ���� �� �ִ� �ִ��� ĭ ���� ����Ѵ�.

[���� �Է�]
2 4
CAAB
ADCB

[���� ���]
3
*/

#include <iostream>
#include <algorithm>
using namespace std;

char board[21][21];
int dx[] = { -1, 1, 0, 0 };
int dy[] = { 0, 0, -1, 1 };
int alphabet[26] = { 0, };
int R, C, cnt, answer;

void dfs(int x, int y, int count) {
	answer = max(answer, count);
	if (answer == 26) return;

	alphabet[board[x][y] - 'A'] = 1;

	for (int i = 0; i < 4; i++) {
		int nx = x + dx[i];
		int ny = y + dy[i];

		if (nx < 0 || nx >= R || ny < 0 || ny >= C)
			continue;
		if (alphabet[board[nx][ny] - 'A'] == 1)
			continue;

		dfs(nx, ny, count + 1);
	}

	alphabet[board[x][y] - 'A'] = 0;
}

int main() {
	cin >> R >> C;

	for (int i = 0; i < R; i++) {
		for (int j = 0; j < C; j++) {
			cin >> board[i][j];
		}
	}

	cnt = 1;
	answer = 0;

	dfs(0, 0, cnt);

	cout << answer << '\n';

	return 0;
}