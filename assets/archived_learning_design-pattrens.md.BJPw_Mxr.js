import{_ as t,c as e,a2 as r,o as n}from"./chunks/framework.CjSG1vmB.js";const P=JSON.parse('{"title":"设计模式","description":"","frontmatter":{},"headers":[],"relativePath":"archived/learning/design-pattrens.md","filePath":"archived/learning/design-pattrens.md","lastUpdated":null}'),o={name:"archived/learning/design-pattrens.md"};function i(h,a,l,d,s,c){return n(),e("div",null,a[0]||(a[0]=[r('<h1 id="设计模式" tabindex="-1">设计模式 <a class="header-anchor" href="#设计模式" aria-label="Permalink to &quot;设计模式&quot;">​</a></h1><h2 id="创建型模式-creational-patterns" tabindex="-1">创建型模式 Creational Patterns <a class="header-anchor" href="#创建型模式-creational-patterns" aria-label="Permalink to &quot;创建型模式 Creational Patterns&quot;">​</a></h2><h3 id="单例模式" tabindex="-1">单例模式 <a class="header-anchor" href="#单例模式" aria-label="Permalink to &quot;单例模式&quot;">​</a></h3><h3 id="工厂模式" tabindex="-1">工厂模式 <a class="header-anchor" href="#工厂模式" aria-label="Permalink to &quot;工厂模式&quot;">​</a></h3><h3 id="抽象工厂模式" tabindex="-1">抽象工厂模式 <a class="header-anchor" href="#抽象工厂模式" aria-label="Permalink to &quot;抽象工厂模式&quot;">​</a></h3><h3 id="建造者模式-builder-pattern" tabindex="-1">建造者模式 Builder Pattern <a class="header-anchor" href="#建造者模式-builder-pattern" aria-label="Permalink to &quot;建造者模式 Builder Pattern&quot;">​</a></h3><h3 id="原型模式-prototype-pattern" tabindex="-1">原型模式 Prototype Pattern <a class="header-anchor" href="#原型模式-prototype-pattern" aria-label="Permalink to &quot;原型模式 Prototype Pattern&quot;">​</a></h3><h2 id="结构型模式" tabindex="-1">结构型模式 <a class="header-anchor" href="#结构型模式" aria-label="Permalink to &quot;结构型模式&quot;">​</a></h2><h3 id="适配器模式" tabindex="-1">适配器模式 <a class="header-anchor" href="#适配器模式" aria-label="Permalink to &quot;适配器模式&quot;">​</a></h3><h3 id="桥接模式-bridge-pattern" tabindex="-1">桥接模式 Bridge Pattern <a class="header-anchor" href="#桥接模式-bridge-pattern" aria-label="Permalink to &quot;桥接模式 Bridge Pattern&quot;">​</a></h3><h3 id="组合模式-composite-pattern" tabindex="-1">组合模式 Composite Pattern <a class="header-anchor" href="#组合模式-composite-pattern" aria-label="Permalink to &quot;组合模式 Composite Pattern&quot;">​</a></h3><h3 id="装饰器模式-decorator-pattern" tabindex="-1">装饰器模式 Decorator Pattern <a class="header-anchor" href="#装饰器模式-decorator-pattern" aria-label="Permalink to &quot;装饰器模式 Decorator Pattern&quot;">​</a></h3><h3 id="外观模式-facade-pattern" tabindex="-1">外观模式 Facade Pattern <a class="header-anchor" href="#外观模式-facade-pattern" aria-label="Permalink to &quot;外观模式 Facade Pattern&quot;">​</a></h3><h3 id="享元模式-flyweight-pattern" tabindex="-1">享元模式 Flyweight Pattern <a class="header-anchor" href="#享元模式-flyweight-pattern" aria-label="Permalink to &quot;享元模式 Flyweight Pattern&quot;">​</a></h3><h3 id="代理模式" tabindex="-1">代理模式 <a class="header-anchor" href="#代理模式" aria-label="Permalink to &quot;代理模式&quot;">​</a></h3><h2 id="行为型模式-behavioral-patterns" tabindex="-1">行为型模式 Behavioral Patterns <a class="header-anchor" href="#行为型模式-behavioral-patterns" aria-label="Permalink to &quot;行为型模式 Behavioral Patterns&quot;">​</a></h2><h3 id="责任链模式-chain-of-responsibility-pattern" tabindex="-1">责任链模式 Chain of Responsibility Pattern <a class="header-anchor" href="#责任链模式-chain-of-responsibility-pattern" aria-label="Permalink to &quot;责任链模式 Chain of Responsibility Pattern&quot;">​</a></h3><h3 id="命令模式-command-pattern" tabindex="-1">命令模式 Command Pattern <a class="header-anchor" href="#命令模式-command-pattern" aria-label="Permalink to &quot;命令模式 Command Pattern&quot;">​</a></h3><h3 id="解释器模式-interpreter-pattern" tabindex="-1">解释器模式 Interpreter Pattern <a class="header-anchor" href="#解释器模式-interpreter-pattern" aria-label="Permalink to &quot;解释器模式 Interpreter Pattern&quot;">​</a></h3><h3 id="迭代器模式-iterator-pattern" tabindex="-1">迭代器模式 Iterator Pattern <a class="header-anchor" href="#迭代器模式-iterator-pattern" aria-label="Permalink to &quot;迭代器模式 Iterator Pattern&quot;">​</a></h3><h3 id="中介者模式-mediator-pattern" tabindex="-1">中介者模式 Mediator Pattern <a class="header-anchor" href="#中介者模式-mediator-pattern" aria-label="Permalink to &quot;中介者模式 Mediator Pattern&quot;">​</a></h3><h3 id="备忘录模式-memento-pattern" tabindex="-1">备忘录模式 Memento Pattern <a class="header-anchor" href="#备忘录模式-memento-pattern" aria-label="Permalink to &quot;备忘录模式 Memento Pattern&quot;">​</a></h3><h3 id="观察模式-observer-pattern" tabindex="-1">观察模式 Observer Pattern <a class="header-anchor" href="#观察模式-observer-pattern" aria-label="Permalink to &quot;观察模式 Observer Pattern&quot;">​</a></h3><h3 id="状态模式-state-pattern" tabindex="-1">状态模式 State Pattern <a class="header-anchor" href="#状态模式-state-pattern" aria-label="Permalink to &quot;状态模式 State Pattern&quot;">​</a></h3><h3 id="策略模式-strategy-pattern" tabindex="-1">策略模式 Strategy Pattern <a class="header-anchor" href="#策略模式-strategy-pattern" aria-label="Permalink to &quot;策略模式 Strategy Pattern&quot;">​</a></h3><h3 id="模板方法模式-template-method-pattern" tabindex="-1">模板方法模式 Template Method Pattern <a class="header-anchor" href="#模板方法模式-template-method-pattern" aria-label="Permalink to &quot;模板方法模式 Template Method Pattern&quot;">​</a></h3><h3 id="访问者模式-visitor-pattern" tabindex="-1">访问者模式 Visitor Pattern <a class="header-anchor" href="#访问者模式-visitor-pattern" aria-label="Permalink to &quot;访问者模式 Visitor Pattern&quot;">​</a></h3>',27)]))}const b=t(o,[["render",i]]);export{P as __pageData,b as default};