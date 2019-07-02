#include <iostream>
#include <algorithm>
#include <cstring> //memset
using namespace std;
const int MAX = 40000;
int N;
int connect[MAX + 1];
int cache[MAX + 1];
int portLIS(void)

{
  //초기 값
  cache[1] = connect[1];
  int length = 1;
  for (int i = 2; i <= N; i++)
  {
    if (cache[length] < connect[i]) //선이 안 꼬일 경우 추가하고 continue
    {
      cache[++length] = connect[i];
      continue;
    }
    //i번째 왼쪽 포트에 연결되어있는 오른쪽 포트의 번호보다 작지 않은 최초의 위치 탐지
    int idx = lower_bound(cache + 1, cache + length + 1, connect[i]) - cache;
    cache[idx] = connect[i];
  }
  return length;
}

int main(void)
{
  cin >> N;
  for (int i = 1; i <= N; i++)
    cin >> connect[i];
  cout << portLIS() << endl;
  return 0;
}