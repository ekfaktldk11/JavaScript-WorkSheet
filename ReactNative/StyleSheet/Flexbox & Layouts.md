# Flexbox & Layouts
- flexDirection : 아이템들의 배치를 열(column) 또는 행(row)으로 배치

- justifyContent : 
-> how to organize elements along the main axis(flexDirection)
-> 아이템들 사이의 간격을 어찌할 것인지

- alignItems : 
-> 이 특징이 있는 View 내의 Child elements 들을 현재 View의 flexDirection에 /*수직인 방향*/으로 어떻게 배치할 것인지
-> how to organize elements along the cross axis(to main axis)

* the default value is 'stretch' (both of them)

ex) alignItems 가 center일 경우, View 내부의 Child elements가 두개이며, flexDirection이 row 라면 - | - 처럼 가운데(row의 수직인 column)를 중심으로 양쪽의 센터에 위치하게 됨
