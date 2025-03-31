import{_ as s,c as a,o as p,ae as l}from"./chunks/framework.Dh1jimFm.js";const u=JSON.parse('{"title":"面向对象编程","description":"","frontmatter":{},"headers":[],"relativePath":"guide/oop.md","filePath":"guide/oop.md"}'),e={name:"guide/oop.md"};function i(t,n,c,o,d,r){return p(),a("div",null,n[0]||(n[0]=[l(`<h1 id="面向对象编程" tabindex="-1">面向对象编程 <a class="header-anchor" href="#面向对象编程" aria-label="Permalink to &quot;面向对象编程&quot;">​</a></h1><p>本章节介绍VLineLang中的面向对象编程特性，包括类、对象、继承等概念。</p><h2 id="类和对象" tabindex="-1">类和对象 <a class="header-anchor" href="#类和对象" aria-label="Permalink to &quot;类和对象&quot;">​</a></h2><h3 id="类的定义" tabindex="-1">类的定义 <a class="header-anchor" href="#类的定义" aria-label="Permalink to &quot;类的定义&quot;">​</a></h3><p>使用<code>class</code>关键字定义类：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 基本类定义</span></span>
<span class="line"><span>class Point</span></span>
<span class="line"><span>    fn __init__(x, y)</span></span>
<span class="line"><span>        self.x = x</span></span>
<span class="line"><span>        self.y = y</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    fn distance(other)</span></span>
<span class="line"><span>        dx = self.x - other.x</span></span>
<span class="line"><span>        dy = self.y - other.y</span></span>
<span class="line"><span>        return sqrt(dx * dx + dy * dy)</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建对象</span></span>
<span class="line"><span>p1 = new Point(0, 0)</span></span>
<span class="line"><span>p2 = new Point(3, 4)</span></span>
<span class="line"><span>print(p1.distance(p2))  // 输出: 5</span></span></code></pre></div><h3 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h3><p><code>__init__</code>方法作为构造函数：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Person</span></span>
<span class="line"><span>    fn __init__(name, age)</span></span>
<span class="line"><span>        self.name = name</span></span>
<span class="line"><span>        self.age = age</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    fn introduce()</span></span>
<span class="line"><span>        print(&quot;我是&quot; + self.name + &quot;，今年&quot; + str(self.age) + &quot;岁&quot;)</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>person = new Person(&quot;VLine&quot;, 1)</span></span>
<span class="line"><span>person.introduce()</span></span></code></pre></div><h2 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;继承&quot;">​</a></h2><h3 id="基本继承" tabindex="-1">基本继承 <a class="header-anchor" href="#基本继承" aria-label="Permalink to &quot;基本继承&quot;">​</a></h3><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 基类</span></span>
<span class="line"><span>class Animal</span></span>
<span class="line"><span>    fn __init__(name)</span></span>
<span class="line"><span>        self.name = name</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    fn speak()</span></span>
<span class="line"><span>        print(&quot;动物发出声音&quot;)</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 派生类</span></span>
<span class="line"><span>class Dog : Animal</span></span>
<span class="line"><span>    fn __init__(name, breed)</span></span>
<span class="line"><span>        self.name = name</span></span>
<span class="line"><span>        self.breed = breed</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    fn speak()</span></span>
<span class="line"><span>        print(self.name + &quot;汪汪叫&quot;)</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dog = new Dog(&quot;旺财&quot;, &quot;柴犬&quot;)</span></span>
<span class="line"><span>dog.speak()  // 输出: 旺财汪汪叫</span></span></code></pre></div><h3 id="方法重写" tabindex="-1">方法重写 <a class="header-anchor" href="#方法重写" aria-label="Permalink to &quot;方法重写&quot;">​</a></h3><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Shape</span></span>
<span class="line"><span>    fn area()</span></span>
<span class="line"><span>        return 0</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Circle : Shape</span></span>
<span class="line"><span>    fn __init__(radius)</span></span>
<span class="line"><span>        self.radius = radius</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    fn area()</span></span>
<span class="line"><span>        return 3.14159 * self.radius * self.radius</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Rectangle : Shape</span></span>
<span class="line"><span>    fn __init__(width, height)</span></span>
<span class="line"><span>        self.width = width</span></span>
<span class="line"><span>        self.height = height</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    fn area()</span></span>
<span class="line"><span>        return self.width * self.height</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span></code></pre></div><h2 id="多态" tabindex="-1">多态 <a class="header-anchor" href="#多态" aria-label="Permalink to &quot;多态&quot;">​</a></h2><h3 id="多态性示例" tabindex="-1">多态性示例 <a class="header-anchor" href="#多态性示例" aria-label="Permalink to &quot;多态性示例&quot;">​</a></h3><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Animal</span></span>
<span class="line"><span>    fn speak()</span></span>
<span class="line"><span>        print(&quot;动物发出声音&quot;)</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Dog : Animal</span></span>
<span class="line"><span>    fn speak()</span></span>
<span class="line"><span>        print(&quot;汪汪&quot;)</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Cat : Animal</span></span>
<span class="line"><span>    fn speak()</span></span>
<span class="line"><span>        print(&quot;喵喵&quot;)</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 多态使用</span></span>
<span class="line"><span>fn make_sound(animal)</span></span>
<span class="line"><span>    animal.speak()</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dog = new Dog()</span></span>
<span class="line"><span>cat = new Cat()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>make_sound(dog)  // 输出: 汪汪</span></span>
<span class="line"><span>make_sound(cat)  // 输出: 喵喵</span></span></code></pre></div><h2 id="类方法和属性" tabindex="-1">类方法和属性 <a class="header-anchor" href="#类方法和属性" aria-label="Permalink to &quot;类方法和属性&quot;">​</a></h2><h3 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h3><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Calculator</span></span>
<span class="line"><span>    fn __init__()</span></span>
<span class="line"><span>        self.result = 0</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    fn add(value)</span></span>
<span class="line"><span>        self.result = self.result + value</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    fn subtract(value)</span></span>
<span class="line"><span>        self.result = self.result - value</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    fn get_result()</span></span>
<span class="line"><span>        return self.result</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span></code></pre></div><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><ol><li><p><strong>类设计</strong></p><ul><li>类名使用大写字母开头</li><li>一个类应该只有一个主要职责</li><li>保持类的接口简单明了</li></ul></li><li><p><strong>继承使用</strong></p><ul><li>避免过深的继承层次</li><li>优先使用组合而不是继承</li><li>正确重写父类方法</li></ul></li><li><p><strong>多态性</strong></p><ul><li>避免过度使用多态</li><li>保持方法签名一致</li></ul></li><li><p><strong>代码组织</strong></p><ul><li>相关的类放在一起</li><li>使用适当的注释</li><li>保持代码格式的一致性</li></ul></li></ol>`,22)]))}const g=s(e,[["render",i]]);export{u as __pageData,g as default};
