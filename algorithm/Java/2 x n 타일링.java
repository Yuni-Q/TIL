// 2 x n 타일링 Level 5
// 1x1 정사각형 2개가 붙어 있는 타일이 있습니다. 이 타일을 이용하여 총 2xN 의 보드판을 채우려고 합니다. 타일은 가로, 세로 두 가지 방향으로 배치할 수 있습니다.

// 보드판의 길이 N이 주어질 때, 2xN을 타일로 채울 수 있는 경우의 수를 반환하는 tiling 함수를 완성하세요.

// 예를들어 N이 7일 경우 아래 그림이 타일을 배치할 수 있는 한 경우입니다.
// tiles

// 단, 리턴하는 숫자가 매우 커질 수도 있으므로 숫자가 5자리를 넘어간다면 맨 끝자리 5자리만 리턴하세요.예를 들어 N = 2일 경우 가로로 배치하는 경우와 세로로 배치하는 경우가 있을 수 있으므로 2를 반환해 주면 됩니다. 하지만 만약 답이 123456789라면 56789만 반환해주면 됩니다. 리턴하는 숫자의 앞자리가 0일 경우 0을 제외한 숫자를 리턴하세요. 리턴타입은 정수형이어야 합니다.

class TryHelloWorld {
	public int tiling(int n) {
		int answer = 0;
    int a = 1;
    int b = 1;
    int c = 0;
    for (int i = 1; i<n ; i++ ) {
    	c =	a+b;
      a	= b % 100000;
      b = c % 100000;  
    }   
		answer = c%100000;
		return answer;
	}

	public static void main(String args[]) {
		TryHelloWorld tryHelloWorld = new TryHelloWorld();
		// 아래는 테스트로 출력해 보기 위한 코드입니다.
		System.out.print(tryHelloWorld.tiling(3));
	}
}