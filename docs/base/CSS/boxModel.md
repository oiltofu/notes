# 什么是盒模型

CSS中组成一个块级盒子需要：
* content-box
* padding-box
* border-box
* margin-box
::: tip
完整的CSS盒模型应用于块级盒子，内联盒子只使用盒模型中定义的部分内容。
:::

## 块级盒子和内联盒子

* 块级盒子（padding,margin,border会将其他元素从当前盒子周围“推开”）
* 内联盒子（width和height将不起作用、垂直方向的padding,margin,border会被应用但是不会吧其他处于inline状态的盒子推开、水平方向的padding,margin,border会被应用且会把其他处于inline状态的盒子推开）

## 外边距折叠

两个外边距相接的元素，会合并成一个外边距，即最大的那个外边距的大小。

## inline-block

使用场景：当你不希望一个inline切换到新行，但希望他可以设定宽度和高度，并避免上面看到的重叠。