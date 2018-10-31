// 줄 서는 방법 Level 5
// N명의 사람이 있을 때, N명의 사람을 서로 다른 방법으로 줄을 세우는 방법은 N!개가 존재합니다.

// 이 때 각각의 사람들에게 번호를 매겨서 줄을 서는 방법을 표시합니다. 예를들어 [1,2,3,4]는 1번 사람이 제일 앞에, 2번 사람이 2두번째에... 서 있는 상태를 나타냅니다.

// 이러한 각각의 방법을 사전순으로 정렬했을때 K번째 방법으로 줄을 세우는 방법을 찾아 보려고 합니다.

// 예를 들어 3명의 사람이 있다면 총 6개의 방법은 다음과 같이 정렬할 수 있습니다.

// 1번째 방법은 [1,2,3]
// 2번째 방법은 [1,3,2]
// 3번째 방법은 [2,1,3]
// 4번째 방법은 [2,3,1]
// 5번째 방법은 [3,1,2]
// 6번째 방법은 [3,2,1]
// 이 때 K가 5이면 [3,1,2]가 그 방법입니다.

// 사람의 수 N과 순서 K를 입력받아 K번째 방법으로 줄을 세우는 setAlign 함수를 완성해 보세요. 예를 들어 setAlign(3,5)를 입력받는다면 [3,1,2]를 리턴해주면 됩니다.

import java.util.Arrays;
import java.util.*;
class LineCombination {
	public int[] setAlign(int n, long k) {
		            int[] answer = new int[n];
        long temp = k - 1;
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            list.add(i);
        }
        for (int i = 0; i < n; i++) {
            if (temp == 0) {
                answer[i] = list.get(0);
                list.remove(0);
                continue;
            }
            long num = temp / factorial(n - i - 1);
            answer[i] = list.get((int)num);
            list.remove((int)num);
            temp = temp % factorial(n - i - 1);
        }

        return answer;
    }

    public long factorial(int n) {
        long result = 1;
        for (int i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
	// 아래는 테스트로 출력해 보기 위한 코드입니다.
	public static void main(String[] args) {
		LineCombination lc = new LineCombination();
		System.out.println(Arrays.toString(lc.setAlign(3, 5)));
	}
}

