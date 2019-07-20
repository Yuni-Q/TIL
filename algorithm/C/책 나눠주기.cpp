#include <iostream>
#include <algorithm>
#include <vector>
#include <cstring>
using namespace std;

const int MAX = 1000 + 1;
bool visited[MAX];
bool cmp(pair<int, int> a, pair<int, int> b)
{
  if (!(a.second == b.second))
    return a.second < b.second;
  return a.first < b.first;
}
int main(void)
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  int T;
  cin >> T;
  for (int t = 0; t < T; t++)
  {
    memset(visited, false, sizeof(visited));
    int N, M;
    cin >> N >> M;
    vector<pair<int, int>> v;
    for (int i = 0; i < M; i++)
    {
      int a, b;
      cin >> a >> b;
      v.push_back({a, b});
    }
    //b번을 기준으로 오름차순 정렬
    sort(v.begin(), v.end(), cmp);
    int result = 0;
    for (int i = 0; i < M; i++)
      for (int j = v[i].first; j <= v[i].second; j++)
        if (!visited[j])
        {
          visited[j] = true;
          result++;
          break;
        }
    cout << result << "\n";
  }
  return 0;
}