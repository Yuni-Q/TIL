#include <iostream>
#include <queue>
using namespace std;

int N, K;
pair<int, int> p;
queue<pair<int, int>> q;
bool visit[10005];
int answer;

int main() {
	cin >> N >> K;
	q.push(make_pair(N, 0));

	while (!q.empty()) {
		p = q.front();
		q.pop();

		int time = p.second;
		int pos = p.first;
		visit[pos] = true;

		if (pos == K) {
			answer = time;
			break;
		}

		if (pos * 2 <= 100000 && !visit[pos * 2])
			q.push(make_pair(pos * 2, time + 1));

		if (!visit[pos - 1] && pos - 1 >= 0)
			q.push(make_pair(pos - 1, time + 1));

		if (!visit[pos + 1] && pos + 1 <= 100000)
			q.push(make_pair(pos + 1, time + 1));
	}

	cout << answer << '\n';
}