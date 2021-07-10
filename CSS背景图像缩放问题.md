# CSS背景图像缩放问题

## 背景

在我们开发过程中,总会涉及到处理图像的业务.比如网页的背景图像、广告banner、个人中心头像等.下面将会通过几个属性来解决背景缩放比例的问题

## 实例

> 实例来源：掘金		作者：lemonwater

```css
.bg {
    background-image: url('./bt-home.d2a41ff9.webp');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
```

当屏幕宽高比例改变的时候,会出现图片拉伸的情况

![](https://tva1.sinaimg.cn/large/008i3skNly1gsb41sj8e9j30pl06qq3r.jpg)

## 解决

```css
.bg {
    background-image: url('./bt-home.d2a41ff9.webp');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-size: cover;  // 新加的
    background-position: bottom; // 新加的
}
```

### 再来看看,为什么这两行代码解决了缩放的问题

因为这张图重点内容在于下方的楼群和街道，所以更改了位置在bottom和center，这样可以相比之前默认的background-position可以在视图中保留住这块内容，再根据background-size: cover去缩放，这时候缩放方向会从下往上，结合两者的组合拳可以既保持弹性比例缩放又可以保留关键背景内容。

```css
background-size: cover; 此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。
```

```css
background-position: bottom;  // 规定了背景放置的位置
```

![](https://tva1.sinaimg.cn/large/008i3skNly1gsb45h68qwj30sr0ezq4t.jpg)