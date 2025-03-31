import{_ as s,c as a,o as p,ae as l}from"./chunks/framework.Dh1jimFm.js";const u=JSON.parse('{"title":"控制结构","description":"","frontmatter":{},"headers":[],"relativePath":"guide/control-flow.md","filePath":"guide/control-flow.md"}'),e={name:"guide/control-flow.md"};function i(t,n,c,o,r,d){return p(),a("div",null,n[0]||(n[0]=[l(`<h1 id="控制结构" tabindex="-1">控制结构 <a class="header-anchor" href="#控制结构" aria-label="Permalink to &quot;控制结构&quot;">​</a></h1><p>本章节介绍VLineLang中的控制结构，包括条件语句和循环语句。</p><h2 id="条件语句" tabindex="-1">条件语句 <a class="header-anchor" href="#条件语句" aria-label="Permalink to &quot;条件语句&quot;">​</a></h2><h3 id="if-else-语句" tabindex="-1">if-else 语句 <a class="header-anchor" href="#if-else-语句" aria-label="Permalink to &quot;if-else 语句&quot;">​</a></h3><p>基本的条件判断结构：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 基本if语句</span></span>
<span class="line"><span>if x &gt; 0</span></span>
<span class="line"><span>    print(&quot;x是正数&quot;)</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// if-else语句</span></span>
<span class="line"><span>if score &gt;= 60</span></span>
<span class="line"><span>    print(&quot;及格&quot;)</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    print(&quot;不及格&quot;)</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 多条件判断</span></span>
<span class="line"><span>if score &gt;= 90</span></span>
<span class="line"><span>    print(&quot;优秀&quot;)</span></span>
<span class="line"><span>elif score &gt;= 80</span></span>
<span class="line"><span>    print(&quot;良好&quot;)</span></span>
<span class="line"><span>elif score &gt;= 60</span></span>
<span class="line"><span>    print(&quot;及格&quot;)</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    print(&quot;不及格&quot;)</span></span>
<span class="line"><span>end</span></span></code></pre></div><h3 id="条件表达式" tabindex="-1">条件表达式 <a class="header-anchor" href="#条件表达式" aria-label="Permalink to &quot;条件表达式&quot;">​</a></h3><p>条件表达式可以包含多个逻辑运算：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 逻辑与</span></span>
<span class="line"><span>if age &gt;= 18 and hasID</span></span>
<span class="line"><span>    print(&quot;可以进入&quot;)</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 逻辑或</span></span>
<span class="line"><span>if isVIP or hasCoupon</span></span>
<span class="line"><span>    print(&quot;享受折扣&quot;)</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 复杂条件</span></span>
<span class="line"><span>if (age &gt;= 18 and hasID) or isVIP</span></span>
<span class="line"><span>    print(&quot;允许访问&quot;)</span></span>
<span class="line"><span>end</span></span></code></pre></div><h2 id="循环语句" tabindex="-1">循环语句 <a class="header-anchor" href="#循环语句" aria-label="Permalink to &quot;循环语句&quot;">​</a></h2><h3 id="while-循环" tabindex="-1">while 循环 <a class="header-anchor" href="#while-循环" aria-label="Permalink to &quot;while 循环&quot;">​</a></h3><p>当条件为真时重复执行代码块：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 基本while循环</span></span>
<span class="line"><span>i = 0</span></span>
<span class="line"><span>while i &lt; 5</span></span>
<span class="line"><span>    print(i)</span></span>
<span class="line"><span>    i = i + 1</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 累加计算</span></span>
<span class="line"><span>sum = 0</span></span>
<span class="line"><span>i = 1</span></span>
<span class="line"><span>while i &lt;= 100</span></span>
<span class="line"><span>    sum = sum + i</span></span>
<span class="line"><span>    i = i + 1</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span>print(&quot;1到100的和是：&quot;, sum)</span></span></code></pre></div><h3 id="for-循环" tabindex="-1">for 循环 <a class="header-anchor" href="#for-循环" aria-label="Permalink to &quot;for 循环&quot;">​</a></h3><p>用于遍历序列或范围：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 遍历范围</span></span>
<span class="line"><span>for i in range(5)</span></span>
<span class="line"><span>    print(i)</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 遍历列表</span></span>
<span class="line"><span>numbers = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>for num in numbers</span></span>
<span class="line"><span>    print(num)</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 遍历字符串</span></span>
<span class="line"><span>for char in list(&quot;VLine&quot;)</span></span>
<span class="line"><span>    print(char)</span></span>
<span class="line"><span>end</span></span></code></pre></div><h2 id="循环控制" tabindex="-1">循环控制 <a class="header-anchor" href="#循环控制" aria-label="Permalink to &quot;循环控制&quot;">​</a></h2><h3 id="break-语句" tabindex="-1">break 语句 <a class="header-anchor" href="#break-语句" aria-label="Permalink to &quot;break 语句&quot;">​</a></h3><p>用于提前退出循环：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 在循环中使用break</span></span>
<span class="line"><span>i = 0</span></span>
<span class="line"><span>while true</span></span>
<span class="line"><span>    if i &gt;= 5</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    print(i)</span></span>
<span class="line"><span>    i = i + 1</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在for循环中使用break</span></span>
<span class="line"><span>for i in range(0, 10)</span></span>
<span class="line"><span>    if i == 5</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    print(i)</span></span>
<span class="line"><span>end</span></span></code></pre></div><h3 id="continue-语句" tabindex="-1">continue 语句 <a class="header-anchor" href="#continue-语句" aria-label="Permalink to &quot;continue 语句&quot;">​</a></h3><p>跳过当前循环的剩余部分，继续下一次循环：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 打印非3的倍数</span></span>
<span class="line"><span>for i in range(0, 10)</span></span>
<span class="line"><span>    if i % 3 == 0</span></span>
<span class="line"><span>        continue</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    print(i)</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在while循环中使用continue</span></span>
<span class="line"><span>i = 0</span></span>
<span class="line"><span>while i &lt; 10</span></span>
<span class="line"><span>    i = i + 1</span></span>
<span class="line"><span>    if i % 2 == 0</span></span>
<span class="line"><span>        continue</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    print(i)  // 只打印奇数</span></span>
<span class="line"><span>end</span></span></code></pre></div><h2 id="嵌套控制结构" tabindex="-1">嵌套控制结构 <a class="header-anchor" href="#嵌套控制结构" aria-label="Permalink to &quot;嵌套控制结构&quot;">​</a></h2><p>控制结构可以相互嵌套：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 嵌套循环</span></span>
<span class="line"><span>for i in range(0, 3)</span></span>
<span class="line"><span>    for j in range(0, 3)</span></span>
<span class="line"><span>        print(i, j)</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 循环中的条件判断</span></span>
<span class="line"><span>for i in range(0, 10)</span></span>
<span class="line"><span>    if i % 2 == 0</span></span>
<span class="line"><span>        print(i, &quot;是偶数&quot;)</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        print(i, &quot;是奇数&quot;)</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span></code></pre></div><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><ol><li><p><strong>循环控制</strong></p><ul><li>避免无限循环</li><li>确保循环条件最终会变为false</li><li>适当使用break和continue</li></ul></li><li><p><strong>条件判断</strong></p><ul><li>使用清晰的条件表达式</li><li>避免过于复杂的嵌套</li><li>考虑所有可能的情况</li></ul></li><li><p><strong>代码结构</strong></p><ul><li>保持代码缩进一致</li><li>适当使用空行分隔代码块</li><li>添加必要的注释说明逻辑</li></ul></li></ol>`,28)]))}const b=s(e,[["render",i]]);export{u as __pageData,b as default};
