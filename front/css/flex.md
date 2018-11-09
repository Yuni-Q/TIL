
## Flexbox

```css
.box{
  width: 300px;
  height: 300px;
  background-color: blue;
  display: inline-block;
}
```
> 마전도 있고 간격 조절이 힘듭니다<br>

```css
.father {
  display: flex;
  /* main axis */
  justify-content: space-between; 
  /* cross axis */
  align-items: center;
  /* npwrap의 경우 내가 준 가로 길이를 무시 wrap는 가로 길이를 지켜줍니다. */
  /* 공간이 부족할 때의 설정 */
  flex-wrap: wrap;
  /* 축 방향 바꾸기 */
  flex-direction: row-reverse;
  
  height: 100vh;
}
```
> flex는 알아서 계산해 준다.<br>
> flex-direction(row, column)을 통해 축을 바꿀 수 있습니다.

```css
.box:first-child {
  align-self: flex-end;
}
```
> flex의 자식이 자신의 위치를 직접 입력 합니다.
