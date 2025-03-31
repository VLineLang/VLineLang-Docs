---
layout: home
hero:
  name: VLineLang
  text: 现代化的高级编程语言
  tagline: 简洁、快速、强大
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 在GitHub上查看
      link: https://github.com/VLineLang/VLineLang

features:
  - icon: 🚀
    title: 简洁的语法
    details: VLineLang采用清晰直观的语法设计，让代码编写更加轻松自然。支持现代编程特性，包括类型系统、面向对象和函数式编程范式。
  - icon: ⚡
    title: 高性能
    details: 基于高效的虚拟机实现，确保代码运行性能。支持大数运算，提供丰富的标准库函数。
  - icon: 🛠️
    title: 功能完备
    details: 内置丰富的数据类型和控制结构，提供完整的标准库支持。包括IO操作、数学计算、文件处理等常用功能。
  - icon: 📦
    title: 易于使用
    details: 提供友好的开发体验，包括详细的文档、示例代码和开发工具支持。适合从初学者到专业开发者的各类用户。

---

## 快速了解

VLineLang是一个追求简洁与强大的现代编程语言，它提供了：

- 基础数据类型：数字、字符串、列表
- 完整的控制结构：条件语句、循环语句
- 函数系统：函数声明、返回值、内置函数
- 面向对象特性：类、继承、成员函数
- 丰富的标准库：IO、数学计算、文件操作

## 示例代码

```vline
// 类定义示例
class Point
    fn __init__(x, y)
        self.x = x
        self.y = y
    end
    
    fn distance(other)
        dx = self.x - other.x
        dy = self.y - other.y
        return sqrt(dx * dx + dy * dy)
    end
end

// 使用示例
p1 = new Point(0, 0)
p2 = new Point(3, 4)
print(p1.distance(p2))  // 输出: 5
```

## 参与贡献

VLineLang是一个开源项目，我们欢迎任何形式的贡献，包括但不限于：

- 提交bug报告和功能建议
- 改进文档
- 提交代码修改
- 分享使用经验
