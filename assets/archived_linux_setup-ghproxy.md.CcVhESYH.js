import{_ as a,c as n,a2 as i,o as e}from"./chunks/framework.CjSG1vmB.js";const k=JSON.parse('{"title":"Github加速配置","description":"","frontmatter":{},"headers":[],"relativePath":"archived/linux/setup-ghproxy.md","filePath":"archived/linux/setup-ghproxy.md","lastUpdated":null}'),p={name:"archived/linux/setup-ghproxy.md"};function t(l,s,h,r,d,o){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="github加速配置" tabindex="-1">Github加速配置 <a class="header-anchor" href="#github加速配置" aria-label="Permalink to &quot;Github加速配置&quot;">​</a></h1><h2 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gh-proxy-py&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 127.0.0.1:7887:80</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --restart=always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  hunsh/gh-proxy-py:latest</span></span></code></pre></div><h2 id="caddy" tabindex="-1">Caddy <a class="header-anchor" href="#caddy" aria-label="Permalink to &quot;Caddy&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>example.com {</span></span>
<span class="line"><span>    route /gh/* {</span></span>
<span class="line"><span>        uri strip_prefix /gh</span></span>
<span class="line"><span>        @ghproxy {</span></span>
<span class="line"><span>            path *</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        reverse_proxy @ghproxy 127.0.0.1:7887 {</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,5)]))}const u=a(p,[["render",t]]);export{k as __pageData,u as default};