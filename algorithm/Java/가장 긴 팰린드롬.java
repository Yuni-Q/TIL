// 문제 설명
// 앞뒤를 뒤집어도 똑같은 문자열을 팰린드롬(palindrome)이라고 합니다.
// 문자열 s가 주어질 때, s의 부분문자열(Substring)중 가장 긴 팰린드롬의 길이를 return 하는 solution 함수를 완성해 주세요.

// 예를들면, 문자열 s가 abcdcba이면 7을 return하고 abacde이면 3을 return합니다.

// 제한사항
// 문자열 s의 길이 : 2500 이하의 자연수
// 문자열 s는 알파벳 소문자로만 구성
// 입출력 예
// s	answer
// abcdcba	7
// abacde	3
// 입출력 예 설명
// 입출력 예 #1
// 4번째자리 'd'를 기준으로 문자열 s 전체가 팰린드롬이 되므로 7을 return합니다.

// 입출력 예 #2
// 2번째자리 'b'를 기준으로 aba가 팰린드롬이 되므로 3을 return합니다.

import java.util.*;
class Solution
{
    public int solution(String s)
    {
       int left = 0, right = 0;
        int result = 1;

        if(s.length() != 1) {
            for (int center = 1; center < s.length() - 1; center++) {
                left = center - 1;
                right = center + 1;
                while (left >= 0 && right <= s.length() - 1) {
                    if (s.charAt(left) != s.charAt(right))
                        break;

                    result = right - left + 1 > result ? right - left + 1 : result;
                    left--;
                    right++;
                }
            }

            for (int center = 0; center <= s.length() - 2; center++) {
                left = center;
                right = center + 1;
                while (left >= 0 && right <= s.length() - 1) {
                    if (s.charAt(left) != s.charAt(right))
                        break;
                    result = right - left + 1 > result ? right - left + 1 : result;
                    left--;
                    right++;
                }
            }
        }

        return result;
    }
}

// C
#include <string>
using namespace std;

int solution(string s)
{
    int answer = 0;
    int dp[2510][2510] = {0, };

    for(int i = 0 ; i < s.size(); i++){
        for(int j = 0; i + j < s.size(); j++){
            if(s[j] == s[j + i]){
                if(i == 1 || i == 0){
                    answer = i + 1;
                    dp[j][j + i] = answer;
                }
                else if(dp[j + 1][j + i - 1] != 0){
                    answer = i + 1;
                    dp[j][j + i] = answer;
                }
            }
        }
    }
    
    return answer;
}