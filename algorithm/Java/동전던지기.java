// https://www.acmicpc.net/problem/2293

package AprilSecond;

import java.util.Scanner;

public class Coin12293 {

    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);

        int n = in.nextInt();
        int k = in.nextInt();

        int[] coins = new int[n];
        int[] dp = new int[k + 1];

        for (int i = 0; i < n; i++) {
            coins[i] = in.nextInt();
        }

        dp[0] = 1;

        for (int i = 0; i < n; i++) {
            for (int j = 1; j <= k; j++) {
                if (j - coins[i] >= 0) dp[j] += dp[j - coins[i]];
            }
        }
        System.out.print(dp[k]);
    }
}