# css部分（https://juejin.im/entry/5ad2d3bff265da237a4d75dd）
## 1.介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？box-sizing属性又是怎么一回事？
答：
1. 标准盒子模型：宽度=内容的宽度（content）+ border + padding + margin【把内容、边框、内边距、外边距分开来算的】
2. 低版本IE盒子模型：宽度=内容宽度（content+border+padding）+ margin【把内容、边框、内边距算一起的、外边距分开来算的】

+ box-sizing属性：用来控制元素的盒子模型的解析模式，默认为content-box
    1. context-box：W3C的标准盒子模型，设置元素的 height/width 属性指的是content部分的高/宽。
    2. border-box：IE传统盒子模型。设置元素的height/width属性指的是border + padding + content部分的高/宽。

## 2.什么是BFC？
答：BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。
1. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
2. 使 BFC 内部的浮动元素不会到处乱跑。
3. 即看即所得，不要深度理解 就是一个外层包裹住的框。
+ href:'https://www.jianshu.com/p/0d713b32cd0d'

## 3.怎么让元素消失？
答：visibility:hidden、display:none、z-index=-1、opacity：0

1. visibility:hidden,该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件。
2. display:none, 把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删掉。
3. z-index=-1置于其他元素下面。
4. opacity：0,该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定了一些事件，如click事件也能触发。

## 4.如何清除浮动？
1. 在浮动元素后面添加 clear:both 的空 div 元素，
```Html
    <div class="container">
        <div class="left"></div>
        <div class="right"></div>
        <div style="clear:both"></div>
    </div>
```
2. 给父元素添加 overflow:hidden 或者 auto 样式，触发BFC。
```html
    <div class="container">
        <div class="left"></div>
        <div class="right"></div>
    </div>
```
```css
    .container{
        width: 300px;
        background-color: #aaa;
        overflow:hidden;
        zoom:1;   /*IE6*/
    }
```
3. 使用伪元素，也是在元素末尾添加一个点并带有 clear: both 属性的元素实现的。
```html
    <div class="container clearfix">
        <div class="left"></div>
        <div class="right"></div>
    </div>
```
```css
    .clearfix{
        zoom: 1; /*IE6*/
    }
    .clearfix:after{
        content: ".";
        height: 0;
        clear: both;
        display: block;
        visibility: hidden;
    }
```
+ 推荐使用第三种方法，不会在页面新增div，文档结构更加清晰。

## 5. 移动端rem
+ rem官方定义『The font size of the root element』，即根元素的字体大小。rem是一个相对的CSS单位，1rem等于html元素上font-size的大小。所以，我们只要设置html上font-size的大小，就可以改变1rem所代表的大小。
```js
    (function () {
        var html = document.documentElement;
        function onWindowResize() {
            html.style.fontSize = html.getBoundingClientRect().width / 20 + 'px';
        }
        window.addEventListener('resize', onWindowResize);
        onWindowResize();
    })();
```

## 6.css一些兼容性问题？
1. 不同浏览器的标签默认的margin和padding不一样。*{margin:0;padding:0;}（所以要进行初始化CSS样式）
2. Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。
3. 超链接访问过后hover样式就不出现了，被点击访问过的超链接样式不再具有hover和active了。解决方法是改变CSS属性的排列顺序:L-V-H-A ( love hate ): a:link {} a:visited {} a:hover {} a:active {}

## 7.display:none与visibility：hidden的区别？
答：
display：none 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）
visibility：hidden 隐藏对应元素，在文档布局中仍保留原来的空间（重绘）

## 8.为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式？
答：浮动元素碰到包含它的边框或者浮动元素的边框停留。由于浮动元素不在文档流中，所以文档流的块框表现得就像浮动框不存在一样。浮动元素会漂浮在文档流的块框上。
浮动带来的问题：
1. 父元素的高度无法被撑开，影响与父元素同级的元素
2. 与浮动元素同级的非浮动元素（内联元素）会跟随其后
3. 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构。
如何清除浮动：
1. 父级div定义height
2. 最后一个浮动元素后加空div标签 并添加样式clear:both。
3. 包含浮动元素的父标签添加样式overflow为hidden或auto。
4. 父级div定义zoom

## 9.移动端的布局用过媒体查询吗？
答：通过媒体查询可以为不同大小和尺寸的媒体定义不同的css，适应相应的设备的显示。
1. head里边
```html
    <link rel=”stylesheet” type=”text/css” href=”xxx.css” media=”only screen and (max-device-width:480px)”>
```
2. CSS : @media only screen and (max-device-width:480px) {/css样式/}

## 10.CSS优化、提高性能的方法有哪些？
1. 避免过度约束
2. 避免后代选择符
3. 避免链式选择符
4. 使用紧凑的语法
5. 避免不必要的命名空间
6. 避免不必要的重复
7. 最好使用表示语义的名字。一个好的类名应该是描述他是什么而不是像什么
8. 避免！important，可以选择其他选择器
9. 尽可能的精简规则，你可以合并不同类里的重复规则

## 11.在网页中的应该使用奇数还是偶数的字体？为什么呢？
答：
使用偶数字体。偶数字号相对更容易和 web 设计的其他部分构成比例关系。Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的点阵，而 13、15、17 px时用的是小一号的点。（即每个字占的空间大了 1 px，但点阵没变），于是略显稀疏。

## 12.margin和padding分别适合什么场景使用？
答：
+ margin:
    1. 需要在border外侧添加空白
    2. 空白处不需要背景色
    3. 上下相连的两个盒子之间的空白，需要相互抵消时。
+ padding:
    1. 需要在border内侧添加空白
    2. 空白处需要背景颜色
    3. 上下相连的两个盒子的空白，希望为两者之和。

## 13.全屏滚动的原理是什么？用到了CSS的哪些属性？
1. 原理：有点类似于轮播，整体的元素一直排列下去，假设有5个需要展示的全屏页面，那么高度是500%，只是展示100%，剩下的可以通过transform进行y轴定位，也可以通过margin-top实现
2. overflow：hidden；transition：all 1000ms ease；

## 14.什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？
答：响应式网站设计(Responsive Web design)是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。
基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。
页面头部必须有meta声明的viewport。
```html
    <meta name="’viewport’" content="”width=device-width," initial-scale="1." maximum-scale="1,user-scalable=no”"/>
```

## 15.视差滚动效果？
答：视差滚动（Parallax Scrolling）通过在网页向下滚动的时候，控制背景的移动速度比前景的移动速度慢来创建出令人惊叹的3D效果。

## 16.::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用
答：
1. 单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。
2. ::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中。
+ :before 和 :after 这两个伪元素，是在CSS2.1里新出现的。起初，伪元素的前缀使用的是单冒号语法，但随着Web的进化，在CSS3的规范里，伪元素的语法被修改成使用双冒号，成为::before ::after

## 17.你对line-height是如何理解的？
答：行高是指一行文字的高度，具体说是两行文字间基线的距离。CSS中起高度作用的是height和line-height，没有定义height属性，最终其表现作用一定是line-height。
单行文本垂直居中：把line-height值设置为height一样大小的值可以实现单行文字的垂直居中，其实也可以把height删除。
多行文本垂直居中：需要设置display属性为inline-block。

## 18.怎么让Chrome支持小于12px 的文字？
```css
    p{
        font-size:10px;
        -webkit-transform:scale(0.8);
    } //0.8是缩放比例
```

## 19.让页面里的字体变清晰，变细用CSS怎么做？
答：-webkit-font-smoothing在window系统下没有起作用，但是在IOS设备上起作用-webkit-font-smoothing：antialiased是最佳的，灰度平滑。

## 20.position:fixed;在android下无效怎么处理？
答:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>

```

## 21.如果需要手动写动画，你认为最小时间间隔是多久，为什么？
答：多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms。

## 22.li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？
答：行框的排列会受到中间空白（回车空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了。
解决方法：
1. 可以将li代码全部写在一排
2. 浮动li中float：left
3. 在ul中用font-size：0（谷歌不支持）；可以使用letter-space：-3px

## 23.display:inline-block 什么时候会显示间隙？
答：
1. 有空格时候会有间隙 解决：移除空格
2. margin正值的时候 解决：margin使用负值
3. 使用font-size时候 解决：font-size:0、letter-spacing、word-spacing

## 24.png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？
答：
1. png是便携式网络图片（Portable Network Graphics）是一种无损数据压缩位图文件格式.优点是：压缩比高，色彩好。 大多数地方都可以用。
2. jpg是一种针对相片使用的一种失真压缩方法，是一种破坏性的压缩，在色调及颜色平滑变化做的不错。在www上，被用来储存和传输照片的格式。
3. gif是一种位图文件格式，以8位色重现真色彩的图像。可以实现动画效果.
4. webp格式是谷歌在2010年推出的图片格式，压缩率只有jpg的2/3，大小比png小了45%。缺点是压缩的时间更久了，兼容性不好，目前谷歌和opera支持。

## 25.