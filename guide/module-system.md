# 模块系统

本章节将详细介绍VLineLang的模块系统，特别是`import`语句的工作机制和模块搜索优先级。

## 基本语法

在VLineLang中，你可以使用`import`语句来导入其他模块：

```vline
// 导入单个模块
import "mymodule"

// 导入子目录中的模块
import "subdir/mymodule"
```

## 模块搜索优先级

VLineLang在导入模块时会按照以下优先级顺序搜索文件：

1. **当前目录下的.vl文件（最高优先级）**
   - 首先搜索与模块名完全匹配的.vl文件
   - 例如：`import "mymodule"` 会首先查找 `./mymodule.vl`

2. **同名目录下的__init__.vl文件**
   - 如果没有找到直接匹配的.vl文件，则查找同名目录下的__init__.vl
   - 例如：`import "mymodule"` 会查找 `./mymodule/__init__.vl`

3. **lib目录下的.vl文件**
   - 如果在当前目录下未找到，则搜索lib目录下的.vl文件
   - 例如：`import "mymodule"` 会查找 `./lib/mymodule.vl`

4. **lib目录下目录的__init__.vl文件（最低优先级）**
   - 最后搜索lib目录下同名目录中的__init__.vl文件
   - 例如：`import "mymodule"` 会查找 `./lib/mymodule/__init__.vl`

## 示例结构

以下是一个典型的项目结构示例：

```
project/
├── main.vl
├── utils.vl
├── config/
│   ├── __init__.vl
│   └── settings.vl
└── lib/
    ├── database.vl
    └── network/
        └── __init__.vl
```

在这个结构中：

```vline
// main.vl

// 直接导入当前目录的utils.vl
import "utils"

// 导入config目录下的__init__.vl
import "config"

// 导入lib目录下的database.vl
import "database"

// 导入lib/network目录下的__init__.vl
import "network"
```

## 最佳实践

1. **模块命名**
   - 使用清晰、描述性的模块名
   - 避免使用与标准库同名的模块名
   - 推荐使用小写字母和下划线

2. **目录结构**
   - 将相关的模块组织在同一目录下
   - 使用__init__.vl来初始化模块包
   - 保持目录结构清晰和合理

3. **导入规范**
   - 将所有导入语句放在文件开头
   - 按照功能对导入进行分组
   - 避免循环导入

## 注意事项

1. **路径分隔符**
   - 在import语句中始终使用正斜杠（`/`）作为路径分隔符
   - 这确保了代码在不同操作系统上的一致性

2. **模块可见性**
   - __init__.vl文件可以控制模块包的公共接口

3. **错误处理**
   - 如果模块未找到，VLineLang将抛出错误
   - 确保所有依赖模块都存在并且路径正确

## 调试技巧

如果遇到模块导入问题，可以：

1. 检查文件扩展名是否为.vl
2. 验证模块名和路径是否正确
3. 确认模块文件在正确的搜索路径中
4. 检查是否有循环导入

通过遵循这些规则和最佳实践，你可以更好地组织和管理VLineLang项目的代码结构。