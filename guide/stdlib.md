# 标准库

本章节介绍VLineLang的标准库，包含了语言内置的函数和工具。

## 输入输出

### print 函数

用于输出内容到控制台：

```vline
// 基本输出
print("Hello, VLineLang!")  // 输出字符串
print(42)                   // 输出数字

// 多值输出
name = "VLine"
age = 1
print("名字：", name, "年龄：", age)
```

### input 函数

从控制台读取用户输入：

```vline
// 读取字符串
name = input("请输入你的名字：")
print("你好，" + name)

// 读取数字（需要类型转换）
age_str = input("请输入你的年龄：")
age = number(age_str)
print("明年你" + str(age + 1) + "岁")
```

## 列表操作

> [!TIP]
> 可以使用 `import "StdList"` 导入列表标准库（确保其文件存在并且在当前文件夹下），并使用 `l = new List()` 来初始化一个列表，在以下例子中，使用 `numbers = new List()` 来初始化。

### len 函数

获取列表长度：

```vline
numbers = [1, 2, 3, 4, 5]
size = len(numbers)  // StdList 等价方法：size = numbers.size()
print(size)  // 输出: 5
```

### append 函数

在列表末尾添加元素：

```vline
numbers = [1, 2, 3]
numbers = append(numbers, 4)  // StdList 等价方法：numbers.append(4)
print(numbers)  // 输出: [1, 2, 3, 4]
```

### erase 函数

删除指定位置 `[begin, end)` 的元素：

```vline
numbers = [1, 2, 3, 4, 5]
numbers = erase(numbers, 2, 3)  // 删除索引2的元素，StdList 等价方法：numbers.erase(2, 3)
print(numbers)    // 输出: [1, 2, 4, 5]
```

### insert 函数

在指定位置插入元素：

```vline
numbers = [1, 2, 4, 5]
numbers = insert(numbers, 2, 3)  // 在索引2处插入3，StdList 等价方法：numbers.insert(2, 3)
print(numbers)       // 输出: [1, 2, 3, 4, 5]
```

### empty 函数（仅 StdList 支持）

检查列表是否为空：

```vline
numbers = new List()
is_empty = numbers.empty()
print(is_empty)  // 输出: 1
```

## 类型操作

### type 函数

获取值的类型：

```vline
print(type(42))        // 输出: number
print(type("VLine"))   // 输出: string
print(type([1, 2, 3])) // 输出: list
```

### str 函数

将值转换为字符串：

```vline
x = 42
s = str(x)
print(type(s))  // 输出: string
```

### number 函数

将字符串转换为数字：

```vline
s = "42"
n = number(s)
print(type(n))  // 输出: number
```

### list 函数

创建列表：

```vline
// 字符串转列表
s = "VLine"
chars = list(s)
print(chars)  // 输出: [V, L, i, n, e]
```

## 数学函数

### floor 函数

向下取整：

```vline
print(floor(3.7))  // 输出: 3
print(floor(-3.7)) // 输出: -3
```

### ceil 函数

向上取整：

```vline
print(ceil(3.7))  // 输出: 4
print(ceil(-3.7)) // 输出: -2
```

### abs 函数

计算绝对值：

```vline
print(abs(42))   // 输出: 42
print(abs(-42))  // 输出: 42
```

### pow 函数

计算幂：

```vline
print(pow(2, 3))  // 输出: 8
print(pow(3, 2))  // 输出: 9
```

### round 函数

四舍五入：

```vline
print(round(3.4))  // 输出: 3
print(round(3.6))  // 输出: 4
```

### sqrt 函数

计算平方根：

```vline
print(sqrt(16))  // 输出: 4
print(sqrt(2))   // 输出: 1.4142135623730950488
```

## 系统函数

### sleep 函数

暂停执行指定的毫秒数：

```vline
print("开始")
sleep(2000)  // 暂停2000毫秒/2秒
print("结束")
```

### system 函数

执行系统命令：

```vline
system("ls")  // 在类Unix系统中列出文件
system("dir") // 在Windows中列出文件
```

### exit 函数

退出程序：

```vline
print("程序开始")
exit(0)  // 程序结束，返回0
print("这行不会执行")
```

### time 函数

获取当前时间戳：

```vline
t = time()
print(t)  // 输出当前时间戳
```

## 文件操作

### read 函数

读取文件内容：

```vline
// 读取整个文件
content = read("test.txt")
print(content)
```

### write 函数

写入文件内容：

```vline
// 写入文件
write("test.txt", "Hello, VLineLang!")
```

## 最佳实践

1. **错误处理**
   - 检查函数返回值
   - 适当处理异常情况
   - 提供用户友好的错误信息

2. **资源管理**
   - 及时关闭打开的文件
   - 合理使用系统资源
   - 避免资源泄漏

3. **性能优化**
   - 选择合适的函数
   - 避免不必要的类型转换
   - 合理使用系统函数
