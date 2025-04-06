# 错误处理

本章节介绍VLineLang中的错误处理机制，包括如何抛出和处理错误。

> [!WARNING]
> 目前VLineLang仅支持使用`raise`语句抛出错误，尚未实现完整的try-catch机制。

## 抛出错误

### 基本语法

使用`raise`关键字抛出错误：

```vline
// 基本错误抛出
fn divide(a, b)
    if b == 0
        raise "Error: 除数不能为零"
    end
    return a / b
end
```

### 错误信息格式

错误信息通常以字符串形式提供，建议使用清晰的前缀标识错误类型：

```vline
// 使用前缀标识错误类型
raise "Error: 输入参数无效"
raise "ValueError: 预期数字但收到字符串"
raise "TypeError: 不支持的操作类型"
```

## 错误处理最佳实践

### 提前验证

在操作前验证参数和状态，避免运行时错误：

```vline
fn process_data(data)
    // 提前验证参数
    if data == null
        raise "Error: 数据不能为空"
    end
    // 验证数据类型
    if type(data) != "list"
        raise "TypeError: 数据必须是列表类型"
    end
    
    if len(data) == 0
        raise "Error: 数据列表不能为空"
    end
    
    // 处理有效数据
    // ...
end
```

*提供足够详细的错误信息，帮助调试.*


### 函数错误处理

在函数中合理使用错误处理来保证代码健壮性：

```vline
fn safe_get_element(list, index)
    if index < 0 or index >= len(list)
        raise "IndexError: 索引超出范围 (0-" + str(len(list) - 1) + "): " + str(index)
    end
    return list[index]
end

// 使用示例
safe_get_element([1, 2, 3], 2)  // 输出: 3
safe_get_element([1, 2, 3], 5)  // 抛出错误: IndexError: 索引超出范围 (0-2): 5
```

可以请使用`raise`语句和条件检查来实现基本的错误处理。