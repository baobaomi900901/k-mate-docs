---
title: 常用表达式
order: 0
---

## 数值操作类

### 整除

```pascal
 5 / 2   结果为:  2

```

### 求余

```pascal
 5 mod 2   结果为:  1

```

### 乘方

```pascal
 Power(2,3):2   结果为:  8

```

## 数学方法

### 绝对值

```pascal
 mathAbs(-5)   结果为:  5

```

### 四舍五入

```pascal
 mathRound(4.5)   结果为:  4

```

### 向上取整

```pascal
 mathCeil(4.2)   结果为:  5

```

### 向下取整

```pascal
 mathFloor(4.9)   结果为:  4

```

### 去除小数

```pascal
 mathTrunc(4.9)   结果为:  4

```

### 最大值

```pascal
 MathMax([1,3,5,8])   结果为:  8

```

### 最小值

```pascal
 MathMin([1,3,5,8])   结果为:  1

```

### 求和

```pascal
 MathSum([1,3,5,8])   结果为:  17

```

### 随机数

```pascal
 mathRandom()   结果为:  0.123456789...

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
 strLength('hello')   结果为:  5

```

### 包含

```pascal
 StrInclude('hello', 'llo')   结果为:  true

```

### 开头是否为'xx'

```pascal
 strStartsWith('hello','he')   结果为:  true

```

### 结尾是否为'xx'

```pascal
 strEndsWith('hello','llo')   结果为:  true

```

### 正则方法

```pascal
 Strmatch('hello', '/l/g')

```

## 字符串截取

### 截取子串

```pascal
 StrCopy('hello', 1, 3)   结果为:  hel
 StrCopy('hello', -3,2)   结果为:  ll

```

## 字符串修改

### 转为小写

```pascal
 StrToLowerCase('HELLO')   结果为:  hello

```

### 转为大写

```pascal
 StrToUpperCase('hello')   结果为:  HELLO

```

### 去除两端空白

```pascal
 StrTrim('   hello   ')   结果为:  hello

```

### 去除开头空白

```pascal
 StrTrimStart('  hello  ')   结果为:  'hello  '

```

### 去除结尾空白

```pascal
 StrTrimEnd('  hello  ')   结果为:  '  hello'

```

### 重复字符串

```pascal
 StrRepeat('ha',3)   结果为:  hahaha

```

### 插入字符串

```pascal
 StrInsert('hlo','el',2)   结果为:  hello

```

## 字符串替换&分割

### 替换第一个匹配到的子串

```pascal
 StrReplace('hello','l','x')   结果为:  hexlo

```

### 替换全部匹配到的子串

```pascal
 StrReplaceAll('hello','l','x')   结果为:  hexxo

```

### ~~~分割字符串为数组(待实现)~~~

```pascal
print(strSplit('a,b,c', ',')) // ['a', 'b', 'c']
print( strsplit('abc', '')) // ['a', 'b', 'c']

```

## 数组转换

### ~~~数组转字符串(待实现)~~~

```pascal
print(arrJoin(['a', 'b', 'c'], '-')) // "a-b-c"
print(arrJoin(['a', 'b', 'c'], ',')) // "a,b,c"

```

## ~~~本地化数组转字符串(待实现)~~~

```pascal
print(toLocaleString(1990)) // 1,990
print(toLocaleString([1000, 2000])) // 1,000,2,000

```

## ~~~初始化(待实现)~~~

```pascal
print(newDate("2025-06-05")) // ISO 格式
print(newDate("June 5, 2025 14:30:00")) // 英文月份格式

```

## ~~~文件&文件夹操作(待实现)~~~


## 日期时间方法

### 当前时间

```pascal
 now()

```

### 某个日期是周几

```pascal
 DayOfWeeks(2025,6,4)   结果为:  3

```

### 获取某一年的某月有几天

```pascal
 DaysInMonth(2025,6)   结果为:  30

```

### 获取某一个日期 x 天前后的日期

```pascal
 addDays(2025, 6, 4, 3)   结果为:  2025-06-07 00:00:00 000

```

### 格式化日期输出

```pascal
 FormatDateTime('YYYY-MM-DD HH:NN:SS', Now)   结果为:  2025-06-09 16:18:53

```
