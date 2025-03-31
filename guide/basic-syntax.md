# 基础语法

本章节将详细介绍VLineLang的基本语法规则。

## 变量和常量

### 变量声明

VLineLang使用动态类型系统，变量无需显式声明类型：

```vline
// 数字
x = 10        /* 整数 */
y = 3.14      /* 浮点数 */

// 字符串
name = "VLine"

// 列表
numbers = [1, 2, 3, 4, 5]
```

### 常量声明

使用`const`关键字声明常量：

```vline
const PI = 3.14159
const MAX_VALUE = 100
```

## 数据类型

### 数字

VLineLang支持整数和浮点数：

```vline
// 整数运算
x = 10 + 20   /* 加法 */
y = 20 - 10   /* 减法 */
z = 10 * 20   /* 乘法 */
w = 20 / 10   /* 除法 */

// 浮点数运算
a = 3.14 * 2  /* 浮点数乘法 */
b = 5.0 / 2   /* 浮点数除法 */

// 数学函数
floor_result = floor(-3.7)  /* 输出-3 */
ceil_result = ceil(-3.7)    /* 输出-2 */
```

### 字符串

字符串支持基本操作和转义序列：

```vline
// 字符串连接
first = "Hello"
second = "World"
greeting = "first" + ","  + "second"

// 转义序列
text = "这是第一行\n这是第二行"  /* \n表示换行 */
path = "C:\\Program Files"      /* \\表示反斜杠 */
```

### 列表

列表是动态数组，支持多种操作：

```vline
// 创建列表
numbers = [1, 2, 3]

// 访问元素
first = numbers[0]      /* 获取第一个元素 */
last = numbers[len(numbers)-1]  /* 获取最后一个元素 */

// 修改元素
numbers[0] = 10         /* 修改第一个元素 */

// 列表操作
numbers.append(4)       /* 添加元素 */
numbers.erase(0, 1)        /* 删除指定位置的元素 */
numbers.insert(0, 1)    /* 在指定位置插入元素 */
```

## 运算符

### 算术运算符

```vline
a = 10
b = 3

sum = a + b      /* 加法 */
diff = a - b     /* 减法 */
prod = a * b     /* 乘法 */
quot = a / b     /* 除法 */
rem = a % b      /* 取余 */
pow = a ^ b      /* 幂运算 */
```

### 比较运算符

```vline
x = 10
y = 20

less = x < y           /* 小于 */
greater = x > y        /* 大于 */
equal = x == y         /* 等于 */
not_equal = x != y     /* 不等于 */
less_eq = x <= y       /* 小于等于 */
greater_eq = x >= y    /* 大于等于 */
```

### 逻辑运算符

```vline
a = true
b = false

and_result = a and b   /* 逻辑与 */
or_result = a or b     /* 逻辑或 */
not_result = not a     /* 逻辑非 */
```

## 注释

VLineLang支持两种注释方式：

```vline
// 这是一个单行注释

x = 10  // 这是行末注释

/* 这是一个多行注释
   可以跨越多行 */
```

## 类型转换

VLineLang提供了基本的类型转换函数：

```vline
// 字符串转数字
x = number(10)

// 数字转字符串
s = str(42)

// 创建列表
l = list("hello")
```

## 程序退出

使用`exit`函数退出程序，必须指定返回值：

```vline
exit(0)    // 正常退出，返回值为0
exit(1)    // 异常退出，返回值为1
```

## 编译和运行

VLineLang使用vlc.exe作为编译器，基于CMake/GCC/ISO C++17构建，具有良好的跨平台特性：

```bash
vlc source.vl
```

## 最佳实践

1. **命名规范**
   - 使用有意义的变量名
   - 常量使用大写字母
   - 函数名使用小写字母

2. **代码格式**
   - 使用适当的缩进（推荐4个空格）
   - 在运算符前后添加空格
   - 适当使用空行分隔代码块

3. **注释**
   - 为复杂的代码添加注释
   - 保持注释的简洁和准确
   - 及时更新注释以反映代码变化
