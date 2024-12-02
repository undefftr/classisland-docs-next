import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as l,b as s,d as t,w as n,e as h,r,o}from"./app-Clxb9NYX.js";const d={},p=h(`<h1 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识"><span>基础知识</span></a></h1><p>本文将介绍在进行 ClassIsland 相关开发时需要了解的一部分基础概念。</p><p><a id="xml-namespace"></a></p><h2 id="xml-命名空间" tabindex="-1"><a class="header-anchor" href="#xml-命名空间"><span>XML 命名空间</span></a></h2><p>在 XAML 中使用程序集 <code>ClassIsland.Core</code> 下封装的一些控件时，需要引入对应的 XML 命名空间，如下方代码所示：</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ci:MyWindow</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> x:Class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;ClassIsland.Views.FeatureDebugWindow&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">        xmlns</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;</span></span>
<span class="line highlighted"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">        xmlns:ci</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://classisland.tech/schemas/xaml/core&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    &lt;!-- ... --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ci:MyWindow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>http://classisland.tech/schemas/xaml/core</code> 命名空间的前缀默认是 <code>ci</code> ，包含了以下的 CLR 命名空间，在引用这个命名空间时会自动包含以下命名空间中的控件。</p><ul><li>ClassIsland.Core</li><li>ClassIsland.Core.Converters</li><li>ClassIsland.Core.Controls</li><li>ClassIsland.Core.Controls.CommonDialog</li><li>ClassIsland.Core.Controls.LessonsControls</li><li>ClassIsland.Core.Controls.IconControl</li><li>ClassIsland.Core.Controls.NavHyperlink</li><li>ClassIsland.Core.Commands</li><li>ClassIsland.Core.Abstractions.Controls</li></ul><p>如果您要对 ClassIsland 本体进行修改，在 <code>ClassIsland</code> 程序集下的命名空间，需要手动按照 CLR 命名空间进行引用：</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ci:MyWindow</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> x:Class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;ClassIsland.Views.FeatureDebugWindow&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">        xmlns</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">        xmlns:ci</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://classisland.tech/schemas/xaml/core&quot;</span></span>
<span class="line highlighted"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">        xmlns:controls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;clr-namespace:ClassIsland.Controls&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    &lt;!-- ... --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ci:MyWindow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a id="dependency-injection"></a></p><h2 id="依赖注入" tabindex="-1"><a class="header-anchor" href="#依赖注入"><span>依赖注入</span></a></h2><p>ClassIsland 使用了依赖注入设计模式。在定义一个服务时，您可以在服务的构造函数参数中指定要引用的服务依赖项，主机会在构造服务时自动传入依赖项。</p><p>要了解关于依赖注入的更多内容，请参阅<a href="https://learn.microsoft.com/zh-cn/dotnet/core/extensions/dependency-injection" target="_blank" rel="noopener noreferrer">.NET 依赖项注入</a>。这篇文档会更详细地介绍 .NET 中依赖注入的相关信息。</p>`,14);function c(k,m){const i=r("RouteLink");return o(),e("div",null,[p,l("p",null,[s("如果您正在开发 ClassIsland 的插件，您还应该留意文档"),t(i,{to:"/dev/plugins/basics.html#%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5"},{default:n(()=>[s("插件基础知识")]),_:1}),s(" 的依赖注入章节中，与在开发应用本体中不同的操作。")])])}const u=a(d,[["render",c],["__file","basics.html.vue"]]),A=JSON.parse('{"path":"/dev/basics.html","title":"基础知识","lang":"zh-CN","frontmatter":{"description":"基础知识 本文将介绍在进行 ClassIsland 相关开发时需要了解的一部分基础概念。 XML 命名空间 在 XAML 中使用程序集 ClassIsland.Core 下封装的一些控件时，需要引入对应的 XML 命名空间，如下方代码所示： http://classisland.tech/schemas/xaml/core 命名空间的前缀默认是 ci ...","head":[["meta",{"property":"og:url","content":"https://classisland.github.io/classisland-docs-next/dev/basics.html"}],["meta",{"property":"og:site_name","content":"ClassIsland文档"}],["meta",{"property":"og:title","content":"基础知识"}],["meta",{"property":"og:description","content":"基础知识 本文将介绍在进行 ClassIsland 相关开发时需要了解的一部分基础概念。 XML 命名空间 在 XAML 中使用程序集 ClassIsland.Core 下封装的一些控件时，需要引入对应的 XML 命名空间，如下方代码所示： http://classisland.tech/schemas/xaml/core 命名空间的前缀默认是 ci ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-29T08:27:14.000Z"}],["meta",{"property":"article:author","content":"ClassIsland社区"}],["meta",{"property":"article:modified_time","content":"2024-08-29T08:27:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基础知识\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-29T08:27:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ClassIsland社区\\",\\"url\\":\\"https://classisland.tech\\"}]}"]]},"headers":[{"level":2,"title":"XML 命名空间","slug":"xml-命名空间","link":"#xml-命名空间","children":[]},{"level":2,"title":"依赖注入","slug":"依赖注入","link":"#依赖注入","children":[]}],"git":{"createdTime":1719648014000,"updatedTime":1724920034000,"contributors":[{"name":"WRC","email":"hello_wrc@outlook.com","commits":1}]},"readingTime":{"minutes":1.28,"words":385},"filePathRelative":"dev/basics.md","localizedDate":"2024年6月29日","autoDesc":true}');export{u as comp,A as data};
