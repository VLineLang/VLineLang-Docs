import{_ as s,c as n,o as e,ae as p}from"./chunks/framework.Dh1jimFm.js";const u=JSON.parse('{"title":"错误处理","description":"","frontmatter":{},"headers":[],"relativePath":"guide/error-handling.md","filePath":"guide/error-handling.md"}'),l={name:"guide/error-handling.md"};function i(t,a,r,o,c,d){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="错误处理" tabindex="-1">错误处理 <a class="header-anchor" href="#错误处理" aria-label="Permalink to &quot;错误处理&quot;">​</a></h1><p>本章节介绍VLineLang中的错误处理机制，包括如何抛出和处理错误。</p><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>目前VLineLang仅支持使用<code>raise</code>语句抛出错误，尚未实现完整的try-catch机制。</p></div><h2 id="抛出错误" tabindex="-1">抛出错误 <a class="header-anchor" href="#抛出错误" aria-label="Permalink to &quot;抛出错误&quot;">​</a></h2><h3 id="基本语法" tabindex="-1">基本语法 <a class="header-anchor" href="#基本语法" aria-label="Permalink to &quot;基本语法&quot;">​</a></h3><p>使用<code>raise</code>关键字抛出错误：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 基本错误抛出</span></span>
<span class="line"><span>fn divide(a, b)</span></span>
<span class="line"><span>    if b == 0</span></span>
<span class="line"><span>        raise &quot;Error: 除数不能为零&quot;</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    return a / b</span></span>
<span class="line"><span>end</span></span></code></pre></div><h3 id="错误信息格式" tabindex="-1">错误信息格式 <a class="header-anchor" href="#错误信息格式" aria-label="Permalink to &quot;错误信息格式&quot;">​</a></h3><p>错误信息通常以字符串形式提供，建议使用清晰的前缀标识错误类型：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 使用前缀标识错误类型</span></span>
<span class="line"><span>raise &quot;Error: 输入参数无效&quot;</span></span>
<span class="line"><span>raise &quot;ValueError: 预期数字但收到字符串&quot;</span></span>
<span class="line"><span>raise &quot;TypeError: 不支持的操作类型&quot;</span></span></code></pre></div><h2 id="错误处理最佳实践" tabindex="-1">错误处理最佳实践 <a class="header-anchor" href="#错误处理最佳实践" aria-label="Permalink to &quot;错误处理最佳实践&quot;">​</a></h2><h3 id="提前验证" tabindex="-1">提前验证 <a class="header-anchor" href="#提前验证" aria-label="Permalink to &quot;提前验证&quot;">​</a></h3><p>在操作前验证参数和状态，避免运行时错误：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn process_data(data)</span></span>
<span class="line"><span>    // 提前验证参数</span></span>
<span class="line"><span>    if data == null</span></span>
<span class="line"><span>        raise &quot;Error: 数据不能为空&quot;</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    // 验证数据类型</span></span>
<span class="line"><span>    if type(data) != &quot;list&quot;</span></span>
<span class="line"><span>        raise &quot;TypeError: 数据必须是列表类型&quot;</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    if len(data) == 0</span></span>
<span class="line"><span>        raise &quot;Error: 数据列表不能为空&quot;</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 处理有效数据</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>end</span></span></code></pre></div><p><em>提供足够详细的错误信息，帮助调试.</em></p><h3 id="函数错误处理" tabindex="-1">函数错误处理 <a class="header-anchor" href="#函数错误处理" aria-label="Permalink to &quot;函数错误处理&quot;">​</a></h3><p>在函数中合理使用错误处理来保证代码健壮性：</p><div class="language-vline vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vline</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn safe_get_element(list, index)</span></span>
<span class="line"><span>    if index &lt; 0 or index &gt;= len(list)</span></span>
<span class="line"><span>        raise &quot;IndexError: 索引超出范围 (0-&quot; + str(len(list) - 1) + &quot;): &quot; + str(index)</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    return list[index]</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用示例</span></span>
<span class="line"><span>safe_get_element([1, 2, 3], 2)  // 输出: 3</span></span>
<span class="line"><span>safe_get_element([1, 2, 3], 5)  // 抛出错误: IndexError: 索引超出范围 (0-2): 5</span></span></code></pre></div><p>可以请使用<code>raise</code>语句和条件检查来实现基本的错误处理。</p>`,19)]))}const b=s(l,[["render",i]]);export{u as __pageData,b as default};
