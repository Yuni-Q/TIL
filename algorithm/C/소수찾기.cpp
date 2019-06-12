#define ll unsigned long long

#include <string>
#include <vector>
using namespace std;

int decimal[10000000] = {
    0,
};
int cnt[10] = {
    0,
};
int answer = 0;

void find_all(int result)
{
    for (int i = 0; i < 10; i++)
    {
        if (cnt[i] != 0)
        {
            cnt[i] = cnt[i] - 1;
            int a_result = result + i;
            if (!decimal[a_result])
            {
                decimal[a_result] = 1;
                answer++;
            }
            find_all(a_result * 10);
            cnt[i] = cnt[i] + 1;
        }
    }
}

int solution(string numbers)
{

    for (int i = 0; i < numbers.size(); i++)
    {
        cnt[numbers[i] - '0']++;
    }

    decimal[0] = 1;
    decimal[1] = 1;

    for (ll i = 2; i * i < 10000000; i++)
    {
        for (ll j = i; i * j < 10000000; j++)
        {
            decimal[i * j] = 1;
        }
    }

    find_all(0);

    return answer;
}