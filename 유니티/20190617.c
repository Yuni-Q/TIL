//
//  main.c
//  20190617
//
//  Created by YunHee Lee on 17/06/2019.
//  Copyright © 2019 YunHee Lee. All rights reserved.
//

#include <stdio.h>

void fn1(int num1, int num2)
{
  int result = 0;
  for (int i = num1; i <= num2; i++)
  {
    result += -i;
  }
  printf("%d\n", result);
}
void factorial(int num3)
{
  int result = 1;
  for (int i = num3; i > 1; i--)
  {
    result *= i;
  }
  printf("%d\n", result);
}

void gugudan()
{
  for (int i = 0; i < 10; i++)
  {
    int result = 9 * i;
    printf("9 x %d = %d\n", i, result);
  }
}
void gugudan2()
{
  int i = 0;
  while (i < 10)
  {
    int result = 9 * i;
    printf("9 x %d = %d\n", i, result);
    i++;
  }
}

void gugudan3(int num)
{
  int i = 9;
  while (i >= 1)
  {
    int result = num * i;
    printf("%d x %d = %d\n", num, i, result);
    i--;
  }
}

void dogugudan4(int num)
{
  int i = 9;
  do
  {
    int result = num * i;
    printf("%d x %d = %d\n", num, i, result);
    i--;
  } while (i >= 1);
}

void dogugudan5()
{
  int i = 0;
  do
  {
    int result = 9 * i;
    printf("9 x %d = %d\n", i, result);
    i++;
  } while (i < 10);
}

void star(int num)
{
  char st[2] = "*";
  for (int i = 0; i < num; i++)
  {
    for (int j = 0; j <= i; j++)
    {
      printf("%s", st);
    }
    printf("\n");
  }
}
void odd(int num)
{
  int result = 0;
  for (int i = 0; i <= num; i++)
  {
    if (i % 2 == 1)
      result += i;
  }
  printf("%d\n", result);
}

int main(int argc, const char *argv[])
{
  //    int num1 = 0, num2 = 0, num3=0;
  //    printf("두 수를 입력 하시오.\n");
  //    scanf("%d %d",&num1,&num2);
  //    fn1(num1,num2);
  //    printf("숫자 하나 더를 입력 하시오.\n");
  //    scanf("%d",&num3);
  //    factorial(num3);
  //    gugudan();
  //    gugudan2();
  //    int num = 0;
  //    printf("숫자 하나 입력\n");
  //    scanf("%d", &num);
  //    gugudan3(num);
  //    int num = 0;
  //    printf("숫자 하나 입력\n");
  //    scanf("%d", &num);

  //    dogugudan4(num);
  //    dogugudan5();
  printf("숫자 하나 입력\n");
  int num = 0;
  scanf("%d", &num);
  //    star(num);
  odd(num);
  return 0;
}
