# 控制结构

本章节介绍VLineLang中的控制结构，包括条件语句和循环语句。

## 条件语句

### if-else 语句

基本的条件判断结构：

```vline
// 基本if语句
if x > 0
    print("x是正数")
end

// if-else语句
if score >= 60
    print("及格")
else
    print("不及格")
end

// 多条件判断
if score >= 90
    print("优秀")
elif score >= 80
    print("良好")
elif score >= 60
    print("及格")
else
    print("不及格")
end
```

### 条件表达式

条件表达式可以包含多个逻辑运算：

```vline
// 逻辑与
if age >= 18 and hasID
    print("可以进入")
end

// 逻辑或
if isVIP or hasCoupon
    print("享受折扣")
end

// 复杂条件
if (age >= 18 and hasID) or isVIP
    print("允许访问")
end
```

## 循环语句

### while 循环

当条件为真时重复执行代码块：

```vline
// 基本while循环
i = 0
while i < 5
    print(i)
    i = i + 1
end

// 累加计算
sum = 0
i = 1
while i <= 100
    sum = sum + i
    i = i + 1
end
print("1到100的和是：", sum)
```

### for 循环

用于遍历序列或范围：

```vline
// 遍历范围
for i in range(5)
    print(i)
end

// 遍历列表
numbers = [1, 2, 3, 4, 5]
for num in numbers
    print(num)
end

// 遍历字符串
for char in list("VLine")
    print(char)
end
```

## 循环控制

### break 语句

用于提前退出循环：

```vline
// 在循环中使用break
i = 0
while true
    if i >= 5
        break
    end
    print(i)
    i = i + 1
end

// 在for循环中使用break
for i in range(0, 10)
    if i == 5
        break
    end
    print(i)
end
```

### continue 语句

跳过当前循环的剩余部分，继续下一次循环：

```vline
// 打印非3的倍数
for i in range(0, 10)
    if i % 3 == 0
        continue
    end
    print(i)
end

// 在while循环中使用continue
i = 0
while i < 10
    i = i + 1
    if i % 2 == 0
        continue
    end
    print(i)  // 只打印奇数
end
```

## 嵌套控制结构

控制结构可以相互嵌套：

```vline
// 嵌套循环
for i in range(0, 3)
    for j in range(0, 3)
        print(i, j)
    end
end

// 循环中的条件判断
for i in range(0, 10)
    if i % 2 == 0
        print(i, "是偶数")
    else
        print(i, "是奇数")
    end
end
```

## 最佳实践

1. **循环控制**
   - 避免无限循环
   - 确保循环条件最终会变为false
   - 适当使用break和continue

2. **条件判断**
   - 使用清晰的条件表达式
   - 避免过于复杂的嵌套
   - 考虑所有可能的情况

3. **代码结构**
   - 保持代码缩进一致
   - 适当使用空行分隔代码块
   - 添加必要的注释说明逻辑
