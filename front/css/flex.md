
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

### 참조 (이전자료)
CSS 모던 레이아웃
플렉스박스(Flexbox)
```html
<style>
.flex-container{
  /* 부모를 flex로 만들면 자식(자손x)이 flex-item이 된다. */
  display: flex;
  /* row가 기본 값 */
  /* 주축의 방향 */
  /* row / row-reverse / column / column-reverse */
  flex-direction: column;
  /* 기본값  flex-start */
  /* 완전 균등 배분 */
  /* flex-start / center / flex-end */
  /* space-between / space-around / space-evenly */
  justify-content: space-evenly;
  /* flex-wrap */
  /* nowrap / wrap / wrap-reverse */
  flex-wrap: nowrap;
  /* flex-shirnk 값이 1 이기 때문에 width를 설정해도 변하지 않는다. */
  /* flex-shirnk 값을 0으로 변경한다. */
  /* flex-grow는 기본값이 1 */
  /* flex-basis가 width와 같이 사용 할 수 있다. */
  /* flex: grow shink basis */
  /* align-cotent 교차축 정렬 */
  /* flex-flow: row nowrap */
  /* 자식들을 order로 컨트롤 가능 */
  /* align-self 아이템 자기 자신만 컨트롤 */
}
</style> 
```