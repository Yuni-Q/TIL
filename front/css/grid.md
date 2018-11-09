
## Grid
flex는 좋은 옵션이지만 완벽하지 못했습니다.<br>

```css
.father {
    display: grid;
    /* 그리드 크기 */
    /* 모자란 갯수는 보이지 않는다 */
    grid-template-columns: 300px 150px;
    grid-template-rows: 300px 120px;
    /* 그리드 사이 간격 */
    grid-gap: 5px;
    /* 모자란 갯수를 설정  */
    grid-auto-rows: 60px;
  }
```
> grid-auto-columns을 쓰려면 grid-auto-flow를 column으로 변경해 주어야 합니다.<br>
```css
.father {
  display: grid;
  /* 그리드 크기 */
  /* 모자란 갯수는 보이지 않는다 */
  grid-template-columns: 300px 150px;
  grid-template-rows: 300px 120px;
  /* 그리드 사이 간격 */
  grid-gap: 5px;
  grid-auto-columns: 60px;<br>
  grid-auto-flow: column<br>
}
```

### template
```css
.father {
    display: grid;
    grid-auto-rows: 200px;
    grid-gap: 5px;
    grid-template-areas: "header header header" "content content sidebar" "content content sidebar" "footer footer footer"; 

  }
  .first {
    grid-area: header;
    background-color: #f1c40f;
  }
  .second {
    grid-area: sidebar;
    background-color: #27ae60;
  }
  .third {
    grid-area: footer;
    background-color: #3498db;
  }
  .fourth {
    grid-area: content;
    background-color: #d35400;
  }
```

### tr
```css
.father {
    display: grid;
    grid-auto-rows: 200px;
    grid-gap: 5px;
    grid-template-columns: 2fr 1fr 2fr 1fr;
}
```
> 33.3% / 16.2% / 33.3% / 16.2%<br>
> 3fr 3fr 3fr 3fr = 1fr 1fr 1fr 1fr<br>

#### repet
grid-template-columns: repeat(3 , 1tr) 4fr<br>

#### minmax
grid-template-columns: minmax(400px, 2tr) repeat(3 , 1tr)<br>

#### max-content
grid-template-columns: max-content repeat(3 , 1tr)<br>
> 커질 수 있는만큼 커지게 합니다.<br>
> 반대로 min-content도 있습니다.<br>

#### autofit
grid-template-columns: repeat(autofit , 50px)<br>
> 넣을 수 있는 가장 많은 data르 넣을 수 있습니다.<br>
> ghost grid를 만들지 않습니다.

#### autofill
grid-template-columns: repeat(autofit , 50px)<br>
> 남는 공간도 채워져 있습니다.<br
> 가능한 많은 cell로 container를 꽉 채웁니다. (content 유무와 관계 없이)

 ### place-content
 첫번째 : justify-content
 두번째 : align-content

 ### justify-content
 cell이나 column을 움직이는 아니라 content를 움직입니다.<br>
 > align-item은 세로<br>
 > place-item도 있습니다.<br>

 ### grid 여러개 차지하기
 자식 css에 grid-column: 1 / 3<br>
 > 1의 시작점에서 3의 시작점 까지<br>
 > grid-column-start: 1; grid-column: 3;으로도 할 수 있습니다.<br>
 > -1은 마지막 줄<br>
 > grid-column: span 2;로도 할 수 있습니다.<br>
 > grid-area: 2 / 1 / 4 / -1;처럼 row-start / column-start / row-end / column-end 를 설정 할 수 있습니다.<br>
 > grid-area: span 4 / span 4; 도 가능합니다.<br>
 > grid-template-column에 [name-line]으로 설정해서 사용 할 수도 있습니다.<br>
 > 라인 네이밍으로 인해 빈곳 채우기 grid-auto-flow: row dense;<br>

 ### 하나의 box만 조정
 justify-self: center; align-self:center;
