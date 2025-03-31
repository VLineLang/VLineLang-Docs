import{_ as s,c as n,o as p,ae as e}from"./chunks/framework.Dh1jimFm.js";const u=JSON.parse('{"title":"基础语法","description":"","frontmatter":{},"headers":[],"relativePath":"guide/basic-syntax.md","filePath":"guide/basic-syntax.md"}'),l={name:"guide/basic-syntax.md"};function i(t,a,c,o,d,r){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="基础语法" tabindex="-1">基础语法 <a class="header-anchor" href="#基础语法" aria-label="Permalink to &quot;基础语法&quot;">​</a></h1><p>本章节将详细介绍VLineLang的基本语法规则。</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>你可以使用 <code>import package</code> 来导入自定义模块 <code>package.vl</code>，<em>package</em> 中的目录分隔符应为斜杠（<code>/</code>）。</p></div><h2 id="变量和常量" tabindex="-1">变量和常量 <a class="header-anchor" href="#变量和常量" aria-label="Permalink to &quot;变量和常量&quot;">​</a></h2><h3 id="变量声明" tabindex="-1">变量声明 <a class="header-anchor" href="#变量声明" aria-label="Permalink to &quot;变量声明&quot;">​</a></h3><p>VLineLang使用动态类型系统，变量无需显式声明类型：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 数字</span></span>
<span class="line"><span>x = 10        /* 整数 */</span></span>
<span class="line"><span>y = 3.14      /* 浮点数 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 字符串</span></span>
<span class="line"><span>name = &quot;VLine&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 列表</span></span>
<span class="line"><span>numbers = [1, 2, 3, 4, 5]</span></span></code></pre></div><h3 id="常量声明" tabindex="-1">常量声明 <a class="header-anchor" href="#常量声明" aria-label="Permalink to &quot;常量声明&quot;">​</a></h3><p>使用<code>const</code>关键字声明常量：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const PI = 3.14159</span></span>
<span class="line"><span>const MAX_VALUE = 100</span></span></code></pre></div><h2 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h2><h3 id="数字" tabindex="-1">数字 <a class="header-anchor" href="#数字" aria-label="Permalink to &quot;数字&quot;">​</a></h3><p>VLineLang支持整数和浮点数：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 整数运算</span></span>
<span class="line"><span>x = 10 + 20   /* 加法 */</span></span>
<span class="line"><span>y = 20 - 10   /* 减法 */</span></span>
<span class="line"><span>z = 10 * 20   /* 乘法 */</span></span>
<span class="line"><span>w = 20 / 10   /* 除法 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 浮点数运算</span></span>
<span class="line"><span>a = 3.14 * 2  /* 浮点数乘法 */</span></span>
<span class="line"><span>b = 5.0 / 2   /* 浮点数除法 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 数学函数</span></span>
<span class="line"><span>floor_result = floor(-3.7)  /* 输出-3 */</span></span>
<span class="line"><span>ceil_result = ceil(-3.7)    /* 输出-2 */</span></span></code></pre></div><h3 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to &quot;字符串&quot;">​</a></h3><p>字符串支持基本操作和转义序列：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 字符串连接</span></span>
<span class="line"><span>first = &quot;Hello&quot;</span></span>
<span class="line"><span>second = &quot;World&quot;</span></span>
<span class="line"><span>greeting = &quot;first&quot; + &quot;,&quot;  + &quot;second&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 转义序列</span></span>
<span class="line"><span>text = &quot;这是第一行\\n这是第二行&quot;  /* \\n表示换行 */</span></span>
<span class="line"><span>path = &quot;C:\\\\Program Files&quot;      /* \\\\表示反斜杠 */</span></span></code></pre></div><h3 id="列表" tabindex="-1">列表 <a class="header-anchor" href="#列表" aria-label="Permalink to &quot;列表&quot;">​</a></h3><p>列表是动态数组，支持多种操作：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 创建列表</span></span>
<span class="line"><span>numbers = [1, 2, 3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 访问元素</span></span>
<span class="line"><span>first = numbers[0]      /* 获取第一个元素 */</span></span>
<span class="line"><span>last = numbers[len(numbers)-1]  /* 获取最后一个元素 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 修改元素</span></span>
<span class="line"><span>numbers[0] = 10         /* 修改第一个元素 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 列表操作</span></span>
<span class="line"><span>numbers.append(4)       /* 添加元素 */</span></span>
<span class="line"><span>numbers.erase(0, 1)        /* 删除指定位置的元素 */</span></span>
<span class="line"><span>numbers.insert(0, 1)    /* 在指定位置插入元素 */</span></span></code></pre></div><h2 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-label="Permalink to &quot;运算符&quot;">​</a></h2><h3 id="算术运算符" tabindex="-1">算术运算符 <a class="header-anchor" href="#算术运算符" aria-label="Permalink to &quot;算术运算符&quot;">​</a></h3><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a = 10</span></span>
<span class="line"><span>b = 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sum = a + b      /* 加法 */</span></span>
<span class="line"><span>diff = a - b     /* 减法 */</span></span>
<span class="line"><span>prod = a * b     /* 乘法 */</span></span>
<span class="line"><span>quot = a / b     /* 除法 */</span></span>
<span class="line"><span>rem = a % b      /* 取余 */</span></span>
<span class="line"><span>pow = a ^ b      /* 幂运算 */</span></span></code></pre></div><h3 id="比较运算符" tabindex="-1">比较运算符 <a class="header-anchor" href="#比较运算符" aria-label="Permalink to &quot;比较运算符&quot;">​</a></h3><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>x = 10</span></span>
<span class="line"><span>y = 20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>less = x &lt; y           /* 小于 */</span></span>
<span class="line"><span>greater = x &gt; y        /* 大于 */</span></span>
<span class="line"><span>equal = x == y         /* 等于 */</span></span>
<span class="line"><span>not_equal = x != y     /* 不等于 */</span></span>
<span class="line"><span>less_eq = x &lt;= y       /* 小于等于 */</span></span>
<span class="line"><span>greater_eq = x &gt;= y    /* 大于等于 */</span></span></code></pre></div><h3 id="逻辑运算符" tabindex="-1">逻辑运算符 <a class="header-anchor" href="#逻辑运算符" aria-label="Permalink to &quot;逻辑运算符&quot;">​</a></h3><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a = true</span></span>
<span class="line"><span>b = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>and_result = a and b   /* 逻辑与 */</span></span>
<span class="line"><span>or_result = a or b     /* 逻辑或 */</span></span>
<span class="line"><span>not_result = not a     /* 逻辑非 */</span></span></code></pre></div><h3 id="位运算符" tabindex="-1">位运算符 <a class="header-anchor" href="#位运算符" aria-label="Permalink to &quot;位运算符&quot;">​</a></h3><p>分别支持按位与（&amp;）、按位或（|）、按位取反（~）：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>print(2|1)  // 输出3</span></span>
<span class="line"><span>print(2&amp;1)  // 输出0</span></span>
<span class="line"><span>print(~2)   // 输出-3</span></span></code></pre></div><h2 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h2><p>VLineLang支持两种注释方式：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 这是一个单行注释</span></span>
<span class="line"><span></span></span>
<span class="line"><span>x = 10  // 这是行末注释</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 这是一个多行注释</span></span>
<span class="line"><span>   可以跨越多行 */</span></span></code></pre></div><h2 id="类型转换" tabindex="-1">类型转换 <a class="header-anchor" href="#类型转换" aria-label="Permalink to &quot;类型转换&quot;">​</a></h2><p>VLineLang提供了基本的类型转换函数：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 字符串转数字</span></span>
<span class="line"><span>x = number(10)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 数字转字符串</span></span>
<span class="line"><span>s = str(42)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建列表</span></span>
<span class="line"><span>l = list(&quot;hello&quot;)</span></span></code></pre></div><h2 id="程序退出" tabindex="-1">程序退出 <a class="header-anchor" href="#程序退出" aria-label="Permalink to &quot;程序退出&quot;">​</a></h2><p>使用<code>exit</code>函数退出程序，必须指定返回值：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>exit(0)    // 正常退出，返回值为0</span></span>
<span class="line"><span>exit(1)    // 异常退出，返回值为1</span></span></code></pre></div><h2 id="编译和运行" tabindex="-1">编译和运行 <a class="header-anchor" href="#编译和运行" aria-label="Permalink to &quot;编译和运行&quot;">​</a></h2><p>VLineLang使用vlc.exe作为编译器，基于CMake/GCC/ISO C++17构建，具有良好的跨平台特性：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vlc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> source.vl</span></span></code></pre></div><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><ol><li><p><strong>命名规范</strong></p><ul><li>使用有意义的变量名</li><li>常量使用大写字母</li><li>函数名使用小写字母</li></ul></li><li><p><strong>代码格式</strong></p><ul><li>使用适当的缩进（推荐4个空格）</li><li>在运算符前后添加空格</li><li>适当使用空行分隔代码块</li></ul></li><li><p><strong>注释</strong></p><ul><li>为复杂的代码添加注释</li><li>保持注释的简洁和准确</li><li>及时更新注释以反映代码变化</li></ul></li></ol>`,44)]))}const b=s(l,[["render",i]]);export{u as __pageData,b as default};
