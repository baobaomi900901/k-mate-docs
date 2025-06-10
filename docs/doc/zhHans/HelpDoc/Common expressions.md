---
title: 常用表达式
order: 0
---

## 数值操作类

### 整除

```pascal
print(5 / 2) // 2

```

### 求余

```pascal
print(5 mod 2) // 1

```

### 乘方

```pascal
print(Power(2,3):2) // 8

```

## 数学方法

### 绝对值

```pascal
print(mathAbs(-5)) // 5

```

### 四舍五入

```pascal
print(mathRound(4.5)) // 4

```

### 向上取整

```pascal
print(mathCeil(4.2)) // 5

```

### 向下取整

```pascal
print(mathFloor(4.9)) // 4

```

### 去除小数

```pascal
print(mathTrunc(4.9)) // 4

```

### 最大值

```pascal
print(MathMax([1,3,5,8])) // 8

```

### 最小值

```pascal
print(MathMin([1,3,5,8])) // 1

```

### 求和

```pascal
print(MathSum([1,3,5,8])) // 17

```

### 随机数

```pascal
print(mathRandom()) // 0.123456789...

```

## 逻辑判断

### 或

```pascal
print(or)

```

### 与

```pascal
print(and)

```

### 非

```pascal
print(not)

```

## 字符串查询

### 获取字符串长度

```pascal
print(strLength('hello')) // 5

```

### 包含

```pascal
print(StrInclude('hello', 'llo')) // true

```

### 开头是否为'xx'

```pascal
print(strStartsWith('hello','he')) // true

```

### 结尾是否为'xx'

```pascal
print(strEndsWith('hello','llo')) // true

```

### 正则方法

```pascal
print(Strmatch('hello', '/l/g'))

```

## 字符串截取

### 截取子串

```pascal
print(StrCopy('hello', 1, 3)) // hel
print(StrCopy('hello', -3,2)) // ll

```

## 字符串修改

### 转为小写

```pascal
print(StrToLowerCase('HELLO')) // hello

```

### 转为大写

```pascal
print(StrToUpperCase('hello')) // HELLO

```

### 去除两端空白

```pascal
print(StrTrim('   hello   ')) // hello

```

### 去除开头空白

```pascal
print(StrTrimStart('  hello  ')) // 'hello  '

```

### 去除结尾空白

```pascal
print(StrTrimEnd('  hello  ')) // '  hello'

```

### 重复字符串

```pascal
print(StrRepeat('ha',3)) // hahaha

```

### 插入字符串

```pascal
print(StrInsert('hlo','el',2)) // hello

```

## 字符串替换&分割

### 替换第一个匹配到的子串

```pascal
print(StrReplace('hello','l','x')) // hexlo

```

### 替换全部匹配到的子串

```pascal
print(StrReplaceAll('hello','l','x')) // hexxo

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
print(now())

```

### 某个日期是周几

```pascal
print(DayOfWeeks(2025,6,4)) // 3

```

### 获取某一年的某月有几天

```pascal
print(DaysInMonth(2025,6)) // 30

```

### 获取某一个日期 x 天前后的日期

```pascal
print(addDays(2025, 6, 4, 3)) // 2025-06-07 00:00:00 000

```

### 格式化日期输出

```pascal
print(FormatDateTime('YYYY-MM-DD HH:NN:SS', Now)) // 2025-06-09 16:18:53

```


