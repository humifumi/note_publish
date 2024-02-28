import{_ as a,c as s,o as n,a2 as e}from"./chunks/framework.fUIGTZnq.js";const u=JSON.parse('{"title":"常用的镜像源修改","description":"","frontmatter":{},"headers":[],"relativePath":"template/repository.md","filePath":"template/repository.md","lastUpdated":null}'),t={name:"template/repository.md"},p=e(`<h1 id="常用的镜像源修改" tabindex="-1">常用的镜像源修改 <a class="header-anchor" href="#常用的镜像源修改" aria-label="Permalink to &quot;常用的镜像源修改&quot;">​</a></h1><h2 id="gradle" tabindex="-1">Gradle <a class="header-anchor" href="#gradle" aria-label="Permalink to &quot;Gradle&quot;">​</a></h2><h3 id="kotlin-dsl" tabindex="-1">Kotlin DSL <a class="header-anchor" href="#kotlin-dsl" aria-label="Permalink to &quot;Kotlin DSL&quot;">​</a></h3><p>依赖会从这些源从上到下查找</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>repositories {</span></span>
<span class="line"><span>    // 依赖使用阿里云 maven 源</span></span>
<span class="line"><span>    maven {</span></span>
<span class="line"><span>        setUrl(&quot;https://maven.aliyun.com/repository/public/&quot;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    maven {</span></span>
<span class="line"><span>        setUrl(&quot;https://maven.aliyun.com/repository/spring/&quot;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    mavenLocal()</span></span>
<span class="line"><span>    mavenCentral()</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,5),l=[p];function o(i,r,c,d,h,_){return n(),s("div",null,l)}const v=a(t,[["render",o]]);export{u as __pageData,v as default};
