# 函数

本章节介绍VLineLang中的函数系统，包括函数定义、参数传递和返回值等内容。

## 函数定义

### 基本语法

使用`fn`关键字定义函数：

```vline
// 基本函数定义
fn greet()
    print("Hello, VLineLang!")
end

// 带参数的函数
fn greet_person(name)
    print("Hello, " + name + "!")
end

// 带返回值的函数
fn add(a, b)
    return a + b
end
```

### 函数调用

```vline
// 调用无参数函数
greet()

// 调用带参数的函数
greet_person("VLine")

// 使用函数返回值
result = add(3, 4)
print(result)  // 输出: 7
```

## 参数

### 参数传递

```vline
// 多个参数
fn calculate(a, b, operation)
    if operation == "+"
        return a + b
    elif operation == "-"
        return a - b
    end
end

result = calculate(10, 5, "+")  // 加法
result = calculate(10, 5, "-")  // 减法
```

### 默认参数

```vline
// 带默认参数的函数
fn greet(name, greeting="Hello")
    print(greeting + ", " + name + "!")
end

greet("VLine")           // 使用默认问候语，输出: Hello, VLine!
greet("VLine", "Hi")    // 自定义问候语，输出: Hi, VLine!

// 多个默认参数
fn create_user(name, age=18, role="user")
    print("创建用户：" + name)
    print("年龄：" + str(age))
    print("角色：" + role)
end

create_user("VLine")                    // 使用所有默认值
create_user("VLine", 25)               // 覆盖age参数
create_user("VLine", 30, "admin")      // 覆盖所有默认值
```

## 返回值

### 基本返回值

```vline
// 返回单个值
fn square(x)
    return x * x
end

// 返回多个值（使用列表或对象）
fn divide(a, b)
    quotient = a / b
    remainder = a % b
    return [quotient, remainder]
end

result = divide(17, 5)
print(result[0])  // 商
print(result[1])  // 余数
```

### 提前返回

```vline
// 条件返回
fn is_even(n)
    if n % 2 == 0
        return true
    end
    return false
end

// 错误处理
fn divide_safe(a, b)
    if b == 0
        return "错误：除数不能为0"
    end
    return a / b
end
```

## 作用域

### 变量作用域

```vline
// 全局变量
global_var = 10

fn test_scope()
    // 局部变量
    local_var = 20
    print(global_var)  // 可以访问全局变量
    print(local_var)   // 可以访问局部变量
end

test_scope()
print(global_var)      // 可以访问全局变量
// print(local_var)     // 错误：无法访问局部变量
```

## 递归函数

```vline
// 计算阶乘
fn factorial(n)
    if n <= 1
        return 1
    end
    return n * factorial(n - 1)
end

// 计算斐波那契数列
fn fibonacci(n)
    if n <= 1
        return n
    end
    return fibonacci(n - 1) + fibonacci(n - 2)
end
```

## 最佳实践

1. **函数设计**
   - 函数名应该清晰表达其功能
   - 一个函数应该只做一件事
   - 保持函数简短，易于理解

2. **参数处理**
   - 适当检查参数有效性
   - 提供合理的默认值
   - 明确参数的类型和用途

3. **返回值**
   - 保持返回值类型的一致性
   - 适当处理错误情况
   - 文档说明返回值的含义

4. **代码组织**
   - 相关函数放在一起
   - 使用适当的注释
   - 保持代码格式的一致性
