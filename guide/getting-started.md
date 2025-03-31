# 快速开始

本指南将帮助你快速上手VLineLang编程语言。

## 安装

### 下载

访问[VLineLang官方仓库](https://github.com/VLineLang/VLineLang/)下载最新版本的VLineLang解释器。

### 安装步骤

1. 下载对应操作系统的可执行文件（暂时只提供 Windows 版本）
2. 将所在目录添加到系统环境变量中
3. 打开终端，输入`vlc -v`，如果输出版本号，则安装成功

## 第一个程序

### Hello World

创建一个名为`hello.vl`的文件，输入以下代码：

```vline
print("Hello, VLineLang!")
```

### 运行程序

打开终端，进入文件所在目录，执行：

```bash
vlc hello.vl
```

你应该能看到输出：

```
Hello, VLineLang!
```

## 基本语法示例

### 变量和运算

```vline
// 数字运算
x = 10
y = 20
sum = x + y
print(sum)  // 输出: 30

// 字符串操作
name = "VLine"
greeting = "Hello, " + name + "!"
print(greeting)  // 输出: Hello, VLine!
```

### 条件语句

```vline
age = 18

if age >= 18
    print("成年人")
else
    print("未成年人")
end
```

### 循环

```vline
// while循环
i = 0
while i < 5
    print(i)
    i = i + 1
end

// for循环
for i in range(0, 5)
    print(i)
end
```

### 函数

```vline
fn add(a, b)
    return a + b
end

result = add(3, 4)
print(result)  // 输出: 7
```

## 常见问题

### Q: 如何更新VLineLang？

访问官方仓库下载最新版本，替换原有安装文件即可。

### Q: 在哪里可以获取帮助？

- 查看[官方文档](/guide/)
- 访问[GitHub Issues](https://github.com/VLineLang/VLineLang/issues)

### Q: 如何报告问题？

在GitHub仓库提交issue，请包含以下信息：

- VLineLang版本
- 操作系统信息
- 问题描述
- 复现步骤
- 错误信息（如果有）