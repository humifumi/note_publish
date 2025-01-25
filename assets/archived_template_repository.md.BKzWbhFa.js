import{_ as s,c as n,ag as e,o as t}from"./chunks/framework.BkxfIEIK.js";const m=JSON.parse('{"title":"常用的镜像源修改","description":"","frontmatter":{},"headers":[],"relativePath":"archived/template/repository.md","filePath":"archived/template/repository.md","lastUpdated":null}'),p={name:"archived/template/repository.md"};function l(i,a,o,r,c,d){return t(),n("div",null,a[0]||(a[0]=[e(`<h1 id="常用的镜像源修改" tabindex="-1">常用的镜像源修改 <a class="header-anchor" href="#常用的镜像源修改" aria-label="Permalink to &quot;常用的镜像源修改&quot;">​</a></h1><h2 id="gradle" tabindex="-1">Gradle <a class="header-anchor" href="#gradle" aria-label="Permalink to &quot;Gradle&quot;">​</a></h2><h3 id="kotlin-dsl" tabindex="-1">Kotlin DSL <a class="header-anchor" href="#kotlin-dsl" aria-label="Permalink to &quot;Kotlin DSL&quot;">​</a></h3><p>依赖会从这些源从上到下查找</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>repositories {</span></span>
<span class="line"><span>    // 依赖使用阿里云 maven 源</span></span>
<span class="line"><span>    maven {</span></span>
<span class="line"><span>        setUrl(&quot;https://maven.aliyun.com/repository/public/&quot;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    maven {</span></span>
<span class="line"><span>        setUrl(&quot;https://maven.aliyun.com/repository/spring/&quot;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    mavenLocal()</span></span>
<span class="line"><span>    mavenCentral()</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,5)]))}const u=s(p,[["render",l]]);export{m as __pageData,u as default};
