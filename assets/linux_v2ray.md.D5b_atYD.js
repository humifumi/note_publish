import{_ as s,c as a,o as n,a2 as p}from"./chunks/framework.fUIGTZnq.js";const g=JSON.parse('{"title":"配置ubuntu 20.04","description":"","frontmatter":{},"headers":[],"relativePath":"linux/v2ray.md","filePath":"linux/v2ray.md","lastUpdated":null}'),e={name:"linux/v2ray.md"},l=p(`<h1 id="配置ubuntu-20-04" tabindex="-1">配置ubuntu 20.04 <a class="header-anchor" href="#配置ubuntu-20-04" aria-label="Permalink to &quot;配置ubuntu 20.04&quot;">​</a></h1><h2 id="使用root用户" tabindex="-1">使用root用户 <a class="header-anchor" href="#使用root用户" aria-label="Permalink to &quot;使用root用户&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo -i</span></span></code></pre></div><h2 id="环境配置-安装依赖-开启bbr" tabindex="-1">环境配置(安装依赖/开启BBR) <a class="header-anchor" href="#环境配置-安装依赖-开启bbr" aria-label="Permalink to &quot;环境配置(安装依赖/开启BBR)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#依赖</span></span>
<span class="line"><span>apt update</span></span>
<span class="line"><span>apt install curl wget unzip</span></span>
<span class="line"><span></span></span>
<span class="line"><span># bbr</span></span>
<span class="line"><span>echo net.core.default_qdisc=fq &gt;&gt; /etc/sysctl.conf</span></span>
<span class="line"><span>echo net.ipv4.tcp_congestion_control=bbr &gt;&gt; /etc/sysctl.conf</span></span>
<span class="line"><span>sysctl -p</span></span></code></pre></div><h2 id="安装-升级" tabindex="-1">安装/升级 <a class="header-anchor" href="#安装-升级" aria-label="Permalink to &quot;安装/升级&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>bash &lt;(curl -s https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#使用域名</span></span>
<span class="line"><span>h2_domain=&quot;demo.example.com&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#生成uuid</span></span>
<span class="line"><span>uuid=$(v2ray uuid)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>tee /usr/local/etc/v2ray/config.json&lt;&lt;-&quot;EOF&quot;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;log&quot;: {</span></span>
<span class="line"><span>    &quot;loglevel&quot;: &quot;warning&quot;,</span></span>
<span class="line"><span>    &quot;access&quot;: &quot;/var/log/v2ray/access&quot;,</span></span>
<span class="line"><span>    &quot;error&quot;: &quot;/var/log/v2ray/error&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;inbounds&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;protocol&quot;: &quot;vmess&quot;,</span></span>
<span class="line"><span>      &quot;listen&quot;: &quot;127.0.0.1&quot;,</span></span>
<span class="line"><span>      &quot;port&quot;: 40001,</span></span>
<span class="line"><span>      &quot;settings&quot;: {</span></span>
<span class="line"><span>        &quot;clients&quot;: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;id&quot;: &quot;\${uuid}&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;streamSettings&quot;: {</span></span>
<span class="line"><span>        &quot;network&quot;: &quot;h2&quot;,</span></span>
<span class="line"><span>        &quot;httpSettings&quot;: {</span></span>
<span class="line"><span>          &quot;host&quot;: [&quot;\${h2_domain}&quot;],</span></span>
<span class="line"><span>          &quot;path&quot;: &quot;/h2&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;outbounds&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;protocol&quot;: &quot;freedom&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sed -i &quot;s/&quot;&#39;\${uuid}&#39;&quot;/\${uuid}/g&quot; /usr/local/etc/v2ray/config.json</span></span>
<span class="line"><span>sed -i &quot;s/&quot;&#39;\${h2_domain}&#39;&quot;/\${h2_domain}/g&quot; /usr/local/etc/v2ray/config.json</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#启用并重启服务</span></span>
<span class="line"><span>systemctl enable v2ray</span></span>
<span class="line"><span>systemctl restart v2ray</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#输出uuid</span></span>
<span class="line"><span>echo $uuid</span></span></code></pre></div><h2 id="caddy安装配置" tabindex="-1">Caddy安装配置 <a class="header-anchor" href="#caddy安装配置" aria-label="Permalink to &quot;Caddy安装配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>apt install -y debian-keyring debian-archive-keyring apt-transport-https</span></span>
<span class="line"><span>curl -1sLf &#39;https://dl.cloudsmith.io/public/caddy/stable/gpg.key&#39; | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg</span></span>
<span class="line"><span>curl -1sLf &#39;https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt&#39; | sudo tee /etc/apt/sources.list.d/caddy-stable.list</span></span>
<span class="line"><span>apt update</span></span>
<span class="line"><span>apt install caddy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>h2_domain=&quot;demo.example.com&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tee /etc/caddy/Caddyfile&lt;&lt;-&quot;EOF&quot;</span></span>
<span class="line"><span>\${h2_domain} {</span></span>
<span class="line"><span>    root * /var/www/caddy</span></span>
<span class="line"><span>    file_server</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @v2ray_ws {</span></span>
<span class="line"><span>        path /ws</span></span>
<span class="line"><span>        header Connection *Upgrade*</span></span>
<span class="line"><span>        header Upgrade websocket</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #reverse_proxy @v2ray_ws 127.0.0.1:40002</span></span>
<span class="line"><span>    @v2ray_h2 {</span></span>
<span class="line"><span>        path /h2</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    reverse_proxy @v2ray_h2 127.0.0.1:40001 {</span></span>
<span class="line"><span>          transport http {</span></span>
<span class="line"><span>            versions h2c</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sed -i &quot;s/&quot;&#39;\${h2_domain}&#39;&quot;/\${h2_domain}/g&quot; /etc/caddy/Caddyfile</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir -p /var/www/caddy/test</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service caddy restart</span></span>
<span class="line"><span>service v2ray restart</span></span></code></pre></div><h2 id="创建测速文件" tabindex="-1">创建测速文件 <a class="header-anchor" href="#创建测速文件" aria-label="Permalink to &quot;创建测速文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd /var/www/caddy/test</span></span>
<span class="line"><span>dd if=/dev/zero of=256M count=4 bs=64M</span></span></code></pre></div><h2 id="防火墙" tabindex="-1">防火墙 <a class="header-anchor" href="#防火墙" aria-label="Permalink to &quot;防火墙&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>apt install ufw</span></span>
<span class="line"><span>ufw allow ssh</span></span>
<span class="line"><span>ufw allow http</span></span>
<span class="line"><span>ufw allow https</span></span>
<span class="line"><span>ufw enable</span></span></code></pre></div>`,14),t=[l];function i(o,c,u,d,r,h){return n(),a("div",null,t)}const b=s(e,[["render",i]]);export{g as __pageData,b as default};
