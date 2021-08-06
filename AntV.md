# AntV

[AntV 数据可视化]: https://antv.vision/zh	"本文摘录了AntV文档并进行了阅读精简，配以个人理解"

## 设计原则

> 四条核心原则：准确、清晰、有效、美，这四条原则按重要等级先后排序，相辅相成且呈递进关系

### **准确**

可视表达时不歪曲，不误导，不遗漏，精准如实反应数据的特征信息。例：某基金收益率趋势图，合理的值域区间可以反映真实的数据波动趋势。

<img src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*txR0T5hk6PYAAAAAAAAAAAAAARQnAQ" alt="image.png" style="zoom:120%;" /> 

### **清晰**

清晰包括两个层面，**结构清晰**与**内容清晰。**

1. 清晰的平面布局以及清晰的数据纵深路径
2. 不让用户带着疑惑看图,适当的位置给予说明

![img](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*ZoGhS5Xwr4UAAAAAAAAAAAAAARQnAQ)![结构清晰-1.jpg](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*Y2hXRJTNkZYAAAAAAAAAAAAAARQnAQ)

### **有效**

信息传达有重点，克制不冗余，避免信息过载，表达对用户最有用的信息。

### **美**

美是一种克制，合理利用视觉元素进行映射，运用格式塔原理对数据进行分组，既能帮助用户更快的获取信息，也能在一定程度上建立一种秩序美、规律美。



## 设计语言

### 视觉

> 我们的大脑每天都要处理海量信息，眼睛会倾向于通过扫视来获取重要信息，扫视的视线流一般是从左至右、从上往下，我们要让内容为“扫视”而生。

<img src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*zJ1BT51MwAEAAAAAAAAAAAAAARQnAQ" alt="image.png" style="zoom:200%;" /> 

### 色板

> 在可视化设计中，色板的运用原则上优先保障准确性，考虑在操作指引、交互反馈上起到强化或凸显的作用。其次需兼顾色障碍群体，帮助有色盲色弱的人群也能在数据可视化中获取洞见。

#### 颜色映射原理

> 颜色有三个视觉通道，分别是色调（H）、饱和度（S）、明度（B），不同的视觉通道可以与不同的数据类型建议关联。

**色调（H）**：通常使用颜色中的不同色调来描述==不同的分类数据==，如水果品类中苹果映射为红色、香蕉映射为黄色、梨映射为绿色，将品类与色调（H）建立了关联。

**饱和度（S）/明度（B）：**颜色通过明暗和饱和度的共同变化来描述有序或数值型的连续数据，比如==身高由低到高==或由 160cm 到 180 cm 的颜色映射为由浅到深，将连续变化与颜色的明暗饱和变化建立关联。

#### 大色板类型

下图举出了我们常用的色板类型以及应用场景

<img src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*ob0rTbJccqgAAAAAAAAAAAAAARQnAQ" style="zoom:150%;" /> 











