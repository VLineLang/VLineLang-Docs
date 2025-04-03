import{_ as a,c as s,o as p,ae as e}from"./chunks/framework.Dh1jimFm.js";const h=JSON.parse('{"title":"函数","description":"","frontmatter":{},"headers":[],"relativePath":"guide/functions.md","filePath":"guide/functions.md"}'),l={name:"guide/functions.md"};function i(t,n,c,o,r,u){return p(),s("div",null,n[0]||(n[0]=[e(`<h1 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h1><p>本章节介绍VLineLang中的函数系统，包括函数定义、参数传递和返回值等内容。</p><h2 id="函数定义" tabindex="-1">函数定义 <a class="header-anchor" href="#函数定义" aria-label="Permalink to &quot;函数定义&quot;">​</a></h2><h3 id="基本语法" tabindex="-1">基本语法 <a class="header-anchor" href="#基本语法" aria-label="Permalink to &quot;基本语法&quot;">​</a></h3><p>使用<code>fn</code>关键字定义函数：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 基本函数定义</span></span>
<span class="line"><span>fn greet()</span></span>
<span class="line"><span>    print(&quot;Hello, VLineLang!&quot;)</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 带参数的函数</span></span>
<span class="line"><span>fn greet_person(name)</span></span>
<span class="line"><span>    print(&quot;Hello, &quot; + name + &quot;!&quot;)</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 带返回值的函数</span></span>
<span class="line"><span>fn add(a, b)</span></span>
<span class="line"><span>    return a + b</span></span>
<span class="line"><span>end</span></span></code></pre></div><h3 id="函数调用" tabindex="-1">函数调用 <a class="header-anchor" href="#函数调用" aria-label="Permalink to &quot;函数调用&quot;">​</a></h3><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 调用无参数函数</span></span>
<span class="line"><span>greet()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 调用带参数的函数</span></span>
<span class="line"><span>greet_person(&quot;VLine&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用函数返回值</span></span>
<span class="line"><span>result = add(3, 4)</span></span>
<span class="line"><span>print(result)  // 输出: 7</span></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><h3 id="参数传递" tabindex="-1">参数传递 <a class="header-anchor" href="#参数传递" aria-label="Permalink to &quot;参数传递&quot;">​</a></h3><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 多个参数</span></span>
<span class="line"><span>fn calculate(a, b, operation)</span></span>
<span class="line"><span>    if operation == &quot;+&quot;</span></span>
<span class="line"><span>        return a + b</span></span>
<span class="line"><span>    elif operation == &quot;-&quot;</span></span>
<span class="line"><span>        return a - b</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>result = calculate(10, 5, &quot;+&quot;)  // 加法</span></span>
<span class="line"><span>result = calculate(10, 5, &quot;-&quot;)  // 减法</span></span></code></pre></div><h3 id="默认参数" tabindex="-1">默认参数 <a class="header-anchor" href="#默认参数" aria-label="Permalink to &quot;默认参数&quot;">​</a></h3><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 带默认参数的函数</span></span>
<span class="line"><span>fn greet(name, greeting=&quot;Hello&quot;)</span></span>
<span class="line"><span>    print(greeting + &quot;, &quot; + name + &quot;!&quot;)</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>greet(&quot;VLine&quot;)           // 使用默认问候语，输出: Hello, VLine!</span></span>
<span class="line"><span>greet(&quot;VLine&quot;, &quot;Hi&quot;)    // 自定义问候语，输出: Hi, VLine!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 多个默认参数</span></span>
<span class="line"><span>fn create_user(name, age=18, role=&quot;user&quot;)</span></span>
<span class="line"><span>    print(&quot;创建用户：&quot; + name)</span></span>
<span class="line"><span>    print(&quot;年龄：&quot; + str(age))</span></span>
<span class="line"><span>    print(&quot;角色：&quot; + role)</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>create_user(&quot;VLine&quot;)                    // 使用所有默认值</span></span>
<span class="line"><span>create_user(&quot;VLine&quot;, 25)               // 覆盖age参数</span></span>
<span class="line"><span>create_user(&quot;VLine&quot;, 30, &quot;admin&quot;)      // 覆盖所有默认值</span></span></code></pre></div><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h2><h3 id="基本返回值" tabindex="-1">基本返回值 <a class="header-anchor" href="#基本返回值" aria-label="Permalink to &quot;基本返回值&quot;">​</a></h3><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 返回单个值</span></span>
<span class="line"><span>fn square(x)</span></span>
<span class="line"><span>    return x * x</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 返回多个值（使用列表或对象）</span></span>
<span class="line"><span>fn divide(a, b)</span></span>
<span class="line"><span>    quotient = a / b</span></span>
<span class="line"><span>    remainder = a % b</span></span>
<span class="line"><span>    return [quotient, remainder]</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>result = divide(17, 5)</span></span>
<span class="line"><span>print(result[0])  // 商</span></span>
<span class="line"><span>print(result[1])  // 余数</span></span></code></pre></div><h3 id="提前返回" tabindex="-1">提前返回 <a class="header-anchor" href="#提前返回" aria-label="Permalink to &quot;提前返回&quot;">​</a></h3><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 条件返回</span></span>
<span class="line"><span>fn is_even(n)</span></span>
<span class="line"><span>    if n % 2 == 0</span></span>
<span class="line"><span>        return true</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    return false</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 错误处理</span></span>
<span class="line"><span>fn divide_safe(a, b)</span></span>
<span class="line"><span>    if b == 0</span></span>
<span class="line"><span>        return &quot;错误：除数不能为0&quot;</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    return a / b</span></span>
<span class="line"><span>end</span></span></code></pre></div><h2 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;作用域&quot;">​</a></h2><h3 id="变量作用域" tabindex="-1">变量作用域 <a class="header-anchor" href="#变量作用域" aria-label="Permalink to &quot;变量作用域&quot;">​</a></h3><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 全局变量</span></span>
<span class="line"><span>global_var = 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn test_scope()</span></span>
<span class="line"><span>    // 局部变量</span></span>
<span class="line"><span>    local_var = 20</span></span>
<span class="line"><span>    print(global_var)  // 可以访问全局变量</span></span>
<span class="line"><span>    print(local_var)   // 可以访问局部变量</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>test_scope()</span></span>
<span class="line"><span>print(global_var)      // 可以访问全局变量</span></span>
<span class="line"><span>// print(local_var)</span><span>     // 错误：无法访问局部变量</span></span></code></pre></div><h2 id="递归函数" tabindex="-1">递归函数 <a class="header-anchor" href="#递归函数" aria-label="Permalink to &quot;递归函数&quot;">​</a></h2><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 计算阶乘</span></span>
<span class="line"><span>fn factorial(n)</span></span>
<span class="line"><span>    if n &lt;= 1</span></span>
<span class="line"><span>        return 1</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    return n * factorial(n - 1)</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 计算斐波那契数列</span></span>
<span class="line"><span>fn fibonacci(n)</span></span>
<span class="line"><span>    if n &lt;= 1</span></span>
<span class="line"><span>        return n</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    return fibonacci(n - 1) + fibonacci(n - 2)</span></span>
<span class="line"><span>end</span></span></code></pre></div><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><ol><li><p><strong>函数设计</strong></p><ul><li>函数名应该清晰表达其功能</li><li>一个函数应该只做一件事</li><li>保持函数简短，易于理解</li></ul></li><li><p><strong>参数处理</strong></p><ul><li>适当检查参数有效性</li><li>提供合理的默认值</li><li>明确参数的类型和用途</li></ul></li><li><p><strong>返回值</strong></p><ul><li>保持返回值类型的一致性</li><li>适当处理错误情况</li><li>文档说明返回值的含义</li></ul></li><li><p><strong>代码组织</strong></p><ul><li>相关函数放在一起</li><li>使用适当的注释</li><li>保持代码格式的一致性</li></ul></li></ol>`,25)]))}const b=a(l,[["render",i]]);export{h as __pageData,b as default};
