# background
CSS简写属性（color,image,origin,size,repeat...）
::: tip
当指定background-size时，同时需要提供background-position,并且使用/分隔符，消除歧义
:::

## background-clip
设置元素的背景是否延伸到边框、内边距盒子、内容盒子下面

### 值
* border-box(默认)
* padding-box（使用场景：透明border）
* content-box
* text
::: tip
默认情况下，背景会延伸到边框所在的区域下层。
:::