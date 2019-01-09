
# borderImage

## 문법
border-image: source [slice / width / outset] repeat
> source만 필수 입니다.<br>

## border-image-source
url() 함수를 사용하여 이미지 경로를 설정합니다.<br>

## border-image-slice
슬라이스는 이미지를 상, 우, 하, 좌 가장자리 오프셋을 설정합니다. (최대 4개)<br>
보더 이미지를 9개 영역으로 나울 수 있습니다.(px 단위 사용 X)<br>

## border-image-width
요소의 상/우/하/좌 테두리 이미지 너비를 설정합니다.(최대 4개)<br>
실제 테두리의 너비는 영향을 받지 않고 이미지는 맨 위에 배치됩니다.<br>
border-image 너비가 border-width 보다 클 경우 채우기 영역 또는 내용 영역을 포함합니다.<br>
단위 없는 값은 요소의 테두리 너비의 배수로 해석됩니다.<br>
테두리 이미지 너비는 기본적으로 테두리 너비와 같습니다.<br>

## border-image-outset
테두리 이미지를 주어진 값만큼 패딩(안쪽) 영역을 설정합니다.(최대 4개)<br>
단위 없는 값을 사용할 경우, 요소의 테두리 너비에 곱하여 오프셋합니다.<br>

## border-image-repeat
stretch(기본값) : 잡아 당김<br>
repeat : 이미지 특정 부분 반복<br>
round : 반복 하다가 stretch<br>
space : 반복하다가 공간을 가짐<br>

# 현재 크롬은 제대로 지원되지 않습니다.