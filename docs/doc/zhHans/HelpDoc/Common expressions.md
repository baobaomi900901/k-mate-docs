---
title: 常用表达式
order: 0
---

## 数值操作类

### 整除

```pascal
5 / 2 结果为: 2

```

### 求余

```pascal
5 mod 2 结果为: 1

```

### 乘方

```pascal
Power(2,3):2 结果为: 8

```

## 数学方法

#### 阶乘

```pascal
Factorial(5) 结果为: 120

```

#### 计算任意底数的对数

```pascal
LogN(2,8) 结果为: 3

```

#### 计算以10为底的对数

```pascal
Log10(100) 结果为: 2

```

### 绝对值

```pascal
mathAbs(-5) 结果为: 5

```

### 四舍五入

```pascal
mathRound(4.5) 结果为: 4

```

### 向上取整

```pascal
mathCeil(4.2) 结果为: 5

```

### 向下取整

```pascal
mathFloor(4.9) 结果为: 4

```

### 去除小数

```pascal
mathTrunc(4.9) 结果为: 4

```

### 最大值

```pascal
MathMax([1,3,5,8]) 结果为: 8

```

### 最小值

```pascal
MathMin([1,3,5,8]) 结果为: 1

```

### 求和

```pascal
MathSum([1,3,5,8]) 结果为: 17

```

### 随机数

```pascal
mathRandom() 结果为: 0.123456789...

```

## 逻辑判断

### 或

```pascal
or

```

### 与

```pascal
and

```

### 非

```pascal
not

```

## 字符串查询

### 获取字符串长度

```pascal
strLength('hello') 结果为: 5

```

### 包含

```pascal
StrInclude('hello', 'llo') 结果为: true

```

### 开头是否为'xx'

```pascal
strStartsWith('hello','he') 结果为: true

```

### 结尾是否为'xx'

```pascal
strEndsWith('hello','llo') 结果为: true

```

### 正则方法

```pascal
Strmatch('hello', '/l/g')

```

## 字符串截取

### 截取子串

```pascal
StrCopy('hello', 1, 3) 结果为: hel
StrCopy('hello', -3,2) 结果为: ll

```

## 字符串修改

### 转为小写

```pascal
StrToLowerCase('HELLO') 结果为: hello

```

### 转为大写

```pascal
StrToUpperCase('hello') 结果为: HELLO

```

### 去除两端空白

```pascal
StrTrim('   hello   ') 结果为: hello

```

### 去除开头空白

```pascal
StrTrimStart('  hello  ') 结果为: 'hello  '

```

### 去除结尾空白

```pascal
StrTrimEnd('  hello  ') 结果为: '  hello'

```

### 重复字符串

```pascal
StrRepeat('ha',3) 结果为: hahaha

```

### 插入字符串

```pascal
StrInsert('hlo','el',2) 结果为: hello

```

## 字符串替换&分割

### 替换第一个匹配到的子串

```pascal
StrReplace('hello','l','x') 结果为: hexlo

```

### 替换全部匹配到的子串

```pascal
StrReplaceAll('hello','l','x') 结果为: hexxo

```

### ~~~分割字符串为数组(待实现)~~~

```pascal
strSplit('a,b,c', ',') 结果为: ['a', 'b', 'c']
strsplit('abc', '') 结果为: ['a', 'b', 'c']

```

## 数组转换

### ~~~数组转字符串(待实现)~~~

```pascal
arrJoin(['a', 'b', 'c'], '-') 结果为: "a-b-c"
arrJoin(['a', 'b', 'c'], ',') 结果为: "a,b,c"

```

## ~~~本地化数组转字符串(待实现)~~~

```pascal
toLocaleString(1990) 结果为: 1,990
toLocaleString([1000, 2000]) 结果为: 1,000,2,000

```

## ~~~初始化(待实现)~~~

```pascal
newDate("2025-06-05") 结果为: ISO 格式
newDate("June 5, 2025 14:30:00") 结果为: 英文月份格式

```

## ~~~文件&文件夹操作(待实现)~~~


## 日期时间方法

### 当前日期时间

```pascal
now() 结果为: 2025-06-11 14:50:33

```

### 获取 年 月 日 时 分 秒

```pascal
Year(2025-06-11 14:50:33) 结果为: 2025

Month(2025-06-11 14:50:33) 结果为: 6

Day(2025-06-11 14:50:33) 结果为: 11

Hour(2025-06-11 14:50:33) 结果为: 14

Min(2025-06-11 14:50:33) 结果为: 50

Sec(2025-06-11 14:50:33) 结果为: 33

--参数应为日期时间类型变量

```

### 某个日期是周几

```pascal
DayOfWeeks(2025,6,4) 结果为: 3

```

### 当年第几周

```pascal
TheYear(2025-06-11 14:50:33) 结果为: 24

--参数应为日期时间类型变量

```

### 当年第几天

```pascal
WeekOfs(2025-06-11 14:50:33) 结果为: 162

--参数应为日期时间类型变量

```

### 单月最后一天

```pascal
EndDay(2025-06-11 14:50:33) 结果为: 30

--参数应为日期时间类型变量

```

### 获取某一年的某月有几天

```pascal
DaysInMonth(2025,6) 结果为: 30

```

### 获取某一个日期 x 天前后的日期

```pascal
addDays(2025, 6, 4, 3) 结果为: 2025-06-07 00:00:00 000

```

### 格式化日期输出

```pascal
FormatDateTime('YYYY-MM-DD HH:NN:SS', Now) 结果为: 2025-06-09 16:18:53

```

## 格式化消息

### 消息内容替换

```pascal
Format('您今天有 %d 个消息待处理', [2]) 结果为: 您今天有 2 个消息待处理

格式化参数:
  %d: 格式化整数。
 
  %u: 格式化无符号整数。

  %s: 格式化字符串。

  %f: 格式化浮点数，保留两位小数。

  %g: 格式化浮点数，去掉多余的0。

  %n: 格式化浮点数，使用千位分隔符，保留两位小数。

  %m: 格式化浮点数，加上货币记号。

  %e: 使用科学计数法表示整数或浮点数。

  %p: 表示指针地址，用十六进制表示。

  %x: 用十六进制表示一个整数。

```

## 类型转换

### float → str (浮点转字符串)

```pascal
FloatToStr(2.554) 结果为: '2.554'

```

### str → float (字符串转浮点)

```pascal
StrToFloat('2.554') 结果为: 2.554

```

### int → str (整数转字符串)

```pascal
IntToStr(554) 结果为: '554'

```

### str → int (字符串转整数)

```pascal
StrToInt('554') 结果为: 554

```

### bool → str (布尔值转字符串)

```pascal
_BoolToStr(true) 结果为: 'true'

```

## 网页操作

### 获取网页URL

```pascal
Get_URL(网页对象) 结果为: 'www.XXX.comf'

```

### 获取网页标题

```pascal
Get_Title(网页对象) 结果为: '金智维'

```

### 获取元素的文本内容

```pascal
Get_Text(网页对象) 结果为: 'K-rpa-lite'

```

## 列表

### 获取列表长度

```pascal
Get_StrListLen([1,2,3,4]) 结果为: 4
--表达式参数应为列表变量

```

### 按索引查询

```pascal
Get_StrList(['张三','李四','王五','赵六'],2) 结果为: '李四'
--表达式参数应为列表变量

```

