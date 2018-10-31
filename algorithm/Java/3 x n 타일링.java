// 3 x n 타일링 Level 6
// 1x1 정사각형 2개가 붙어 있는 타일이 있습니다. 이 타일을 이용하여 총 3xN 의 보드판을 채우려고 합니다. 타일은 가로, 세로 두 가지 방향으로 배치할 수 있습니다.

// 보드판의 길이 N이 주어질 때, 3xN을 타일로 채울 수 있는 경우의 수를 반환하는 tiling 함수를 완성하세요.

// 단, 리턴하는 숫자가 매우 커질 수도 있으므로 숫자가 5자리를 넘어간다면 맨 끝자리 5자리만 리턴하세요.예를 들어 N = 2일 경우 3을 반환해 주면 됩니다. 하지만 만약 답이 123456789라면 56789만 반환해주면 됩니다. 리턴하는 숫자의 앞자리가 0일 경우 0을 제외한 숫자를 리턴하세요. 리턴타입은 정수형이어야 합니다.

// 참고: 이 문제는 2 x n 타일링 문제와 유사합니다. 문제이해가 어려우면 2 x n 타일링 문제를 먼저 풀어 보세요.

import java.util.ArrayList;
class Tiling {
	public int tiling(int n) {
		int answer = 0;
    int sum = 0;
    int[] list = new int[n+1];
    list[0] = 1;
    for(int i = 2 ; i <= n ; i += 2){
      list[i]=(list[i-2]*3) % 100000+(sum*2) % 100000;
      sum+=list[i-2];
    	
    }
    answer = list[n] % 100000;

		return answer;
	}

	// 아래는 테스트로 출력해 보기 위한 코드입니다.
	public static void main(String[] args) {
		Tiling t = new Tiling();
		System.out.println(t.tiling(6));
	}
}
