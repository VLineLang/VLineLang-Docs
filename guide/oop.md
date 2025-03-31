# 面向对象编程

本章节介绍VLineLang中的面向对象编程特性，包括类、对象、继承等概念。

## 类和对象

### 类的定义

使用`class`关键字定义类：

```vline
// 基本类定义
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

// 创建对象
p1 = new Point(0, 0)
p2 = new Point(3, 4)
print(p1.distance(p2))  // 输出: 5
```

### 构造函数

`__init__`方法作为构造函数：

```vline
class Person
    fn __init__(name, age)
        self.name = name
        self.age = age
    end
    
    fn introduce()
        print("我是" + self.name + "，今年" + str(self.age) + "岁")
    end
end

person = new Person("VLine", 1)
person.introduce()
```

## 继承

### 基本继承

```vline
// 基类
class Animal
    fn __init__(name)
        self.name = name
    end
    
    fn speak()
        print("动物发出声音")
    end
end

// 派生类
class Dog : Animal
    fn __init__(name, breed)
        self.name = name
        self.breed = breed
    end
    
    fn speak()
        print(self.name + "汪汪叫")
    end
end

dog = new Dog("旺财", "柴犬")
dog.speak()  // 输出: 旺财汪汪叫
```

### 方法重写

```vline
class Shape
    fn area()
        return 0
    end
end

class Circle : Shape
    fn __init__(radius)
        self.radius = radius
    end
    
    fn area()
        return 3.14159 * self.radius * self.radius
    end
end

class Rectangle : Shape
    fn __init__(width, height)
        self.width = width
        self.height = height
    end
    
    fn area()
        return self.width * self.height
    end
end
```

## 多态

### 多态性示例

```vline
class Animal
    fn speak()
        print("动物发出声音")
    end
end

class Dog : Animal
    fn speak()
        print("汪汪")
    end
end

class Cat : Animal
    fn speak()
        print("喵喵")
    end
end

// 多态使用
fn make_sound(animal)
    animal.speak()
end

dog = new Dog()
cat = new Cat()

make_sound(dog)  // 输出: 汪汪
make_sound(cat)  // 输出: 喵喵
```

## 类方法和属性

### 实例方法

```vline
class Calculator
    fn __init__()
        self.result = 0
    end
    
    fn add(value)
        self.result = self.result + value
    end
    
    fn subtract(value)
        self.result = self.result - value
    end
    
    fn get_result()
        return self.result
    end
end
```

## 最佳实践

1. **类设计**
   - 类名使用大写字母开头
   - 一个类应该只有一个主要职责
   - 保持类的接口简单明了

2. **继承使用**
   - 避免过深的继承层次
   - 优先使用组合而不是继承
   - 正确重写父类方法

3. **多态性**
   - 避免过度使用多态
   - 保持方法签名一致

4. **代码组织**
   - 相关的类放在一起
   - 使用适当的注释
   - 保持代码格式的一致性
