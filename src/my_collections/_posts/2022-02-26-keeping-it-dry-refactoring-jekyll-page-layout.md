---
layout: journal
title: "Keeping it Dry: Refactoring Jekyll Page Layouts"
excerpt: "Taming multiple pages layouts to one for greater re-usability"

featured: false

categories: [Jekyll]

author: camariana

created_at: 2022-02-26 15:00:00 +00:00

featured_image:
  path: /assets/images/journal/2022-02-26/featured.jpg
  path_large: /assets/images/journals/2022-02-26/featured_large.jpg
  alt:
  caption:
---

When I was working on this site, I realised that I was repeating my self with the following components

 - The Article Layout
 - The TIL Layout  and
 - The Case Studies layout

I didn't see this early on when I did the article and the TIL layout, the following day when I started working on the case studies layout, then I came to see am doing the same thing but slightly different in all the three pages.

Major take away and lesson learned here is, don't try to be elegant until if there is a need. Secondly don't waste a lot of time thinking how to keep things dry until if it obvious, In another words just move on with what you thing.

At first all the three pages have a separate layout file like the following:

article.html layout

<div class="cp-code">
  <button class="cp-button cp-button--fab  cp-code__button">
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    class="ob-icon" 
    viewBox="0 0 16 16"
    aria-hidden="true"
    >
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
    <span class="cp-code__tooltip" role="tooltip">
      Copy code
    </span>
  </button>
{% highlight html %}
{% raw %}<article class="cp-article">
  <header class="cp-article__header">
    <h1 class="cp-article__title">
      {{ page.title }}
    </h1>

    <p class="cp-article__subtitle">
      {{ page. description }}
    </p>
    
    <ul class="cp-article__categories">
      {% include utilities/categories-link.html %}
    </ul>
    
    <ul class="cp-article__meta">
      <li>
        <span>
          Published:
        </span>
        <time class="js-posted-on" datetime="{{ page.date | date_to_xmlschema }}">
          <span class="js-posted-ago"></span> on 
          {{ page.date | date: "%d %b, %y" }}
        </time>
      </li>
      <li>
        <span>
          <abbr title="Estimated Reading Time">ERT</abbr>
        </span>
        <time datetime="">
          {{ page.ert }}
        </time>
      </li>
    </ul>
    
    <figure class="ob-artwork ob-artwork--at-center" role="banner">
      <picture>
        <source srcset="{{ page.image_sm }}" media="(max-width: 1024px)">
        <source srcset="{{ page.image }}" media="(min-width: 1025px)">
        <img class="cp-article__img" src="{{ page.image_sm }}" alt="{{ page.image_description }}"/>
      </picture>
      <figcaption>
        {{ page.image_caption }}
      </figcaption>
    </figure>
  </header>

  <section class="cp-article__content">
    {{ content }}
  </section>

  <footer class="cp-article__footer">

  </footer>
</article>{% endraw %}{% endhighlight %}
</div>

til.html layout

<div class="cp-code">
  <button class="cp-button cp-button--fab  cp-code__button">
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    class="ob-icon" 
    viewBox="0 0 16 16"
    aria-hidden="true"
    >
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
    <span class="cp-code__tooltip" role="tooltip">
      Copy code
    </span>
  </button>
{% highlight html %}{% raw %}<article class="cp-article">
  <header class="cp-article__header">
    <h1 class="cp-article__title ut-no-mag">
      {{ page.title }}
    </h1>
    <ul class="cp-article__categories">
      {% include utilities/categories-link.html %}
    </ul>

    <ul class="cp-article__meta">
      <li>
        <span>
          Published:
        </span>
        <time class="js-posted-on" datetime="{{ page.date | date_to_xmlschema }}">
          <span class="js-posted-ago"></span> on 
          {{ page.date | date: "%d %b, %y" }}
        </time>
      </li>
    </ul>
  </header>

  <section class="cp-article__content">
    {{ content }}
  </section>

  <footer class="cp-article__footer">
    up next till and similar till should come here
  </footer>
</article>{% endraw %}{% endhighlight %}
</div>

case.html layout

<div class="cp-code">
  <button class="cp-button cp-button--fab  cp-code__button">
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    class="ob-icon" 
    viewBox="0 0 16 16"
    aria-hidden="true"
    >
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
    <span class="cp-code__tooltip" role="tooltip">
      Copy code
    </span>
  </button>
{% highlight html %}{% raw %}<article class="pt-case">

  <header class="pt-case__header">
    <h1 class="pt-case__title">
      {{ page.title }}
    </h1>

    <ul class="pt-case__categories">
      {% include utilities/categories-link.html %}
    </ul>
    
    <ul class="pt-case__meta">
      <li>
        <span>
          Published:
        </span>
        <time class="js-posted-on" datetime="{{ page.meta.date | date_to_xmlschema }}">
          <span class="js-posted-ago"></span> on 
          {{ page.meta.date | date: "%d %b, %y" }}
        </time>
      </li>
    </ul>
    
    <dl class="ob-definition-list ob-definition-list--grid">
      <div>
        <dt>
          Client
        </dt>
        <dd>
          {{ page.client }}
        </dd>
      </div>
      <div>
        <dt>
          Sector
        </dt>
        <dd>
          {{ page.sector }} 
        </dd>
      </div>
      <div>
        <dt>
          What I did
        </dt>
        {% include utilities/case-work.html %}          
      </div>
      <div>
        <dt>
          Duration 
        </dt>
        <dd>
          {{ page.duration }}
        </dd>
      </div>
      <div>
        <dt>
          Tools
        </dt>
        <dd>
          {{ page.tools }}
        </dd>
      </div>
    </dl>

  </header>


  <section class="pt-case__content">
    {{ content }}
  </section>


  <footer class="pt-case__footer">
    up next till and similar till should come here
  </footer>
</article>{% endraw %}{% endhighlight %}
</div>

The `article` and the `til` layout use the same classes, just a minor difference. The `case` layout on the other hand uses a different class. But if you really study the structure of the markup,  they have a lot in common. This is when I realised that, I am repeating my self in both the markup and the style, thus there is a need to come up with one layout to rule them all.

So, I asked my self what do they have in common and what is their difference

The common things for all of them are:

- the title
- meta details such as published date and estimated reading time
- categories (clickable) and
- the content

The TIL layout meet these requirements, so I don't need to do anything on that. 

The Article and the Case Studies layout has extra information such as the:

- subtitle and
- featured image

Although, there is a slight difference in how the featured image is presented, but that difference is handle via CSS with a modifier class.

The Case Studies page has a unique extra information such as the following:

- client
- sector
- what I did
- Duration
- Tools use

This is more or less just meta data about each case studies.

## The DRY layout

And here is the one layout that rule all the three layouts.
<div class="cp-code">
  <button class="cp-button cp-button--fab  cp-code__button">
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    class="ob-icon" 
    viewBox="0 0 16 16"
    aria-hidden="true"
    >
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
    <span class="cp-code__tooltip" role="tooltip">
      Copy code
    </span>
  </button>
{% highlight html %}{% raw %}<article class="cp-article">
  <header class="cp-article__header">

    <div class="cp-article__contain cp-article__header-contain">
    
      <h1 class="cp-article__title">
        {{ page.title }}
      </h1>
    
      <ul class="cp-article__categories">
        {% include utilities/categories-link.html %}
      </ul>
    
      <div class="cp-article__contain cp-article__contain--small cp-article__contain--align-left">
        {% if page.description %}
          <p class="cp-article__subtitle">
            {{ page.description }}
          </p>
        {% endif %}
    
        {% if page.meta %}
          <ul class="cp-article__meta">
            <li>
              <span>
                Published:
              </span>
              <time class="js-posted-on" datetime="{{ page.meta.date | date_to_xmlschema }}">
                <span class="js-posted-ago"></span> on 
                {{ page.meta.date | date: "%d %b, %y" }}
              </time>
            </li>
            <li>
              <span>
                <abbr title="Estimated Reading Time">ERT</abbr>
              </span>
              <time datetime="">
                {{ page.meta.ert }}
              </time>
            </li>
          </ul>
        {% endif %}
    
      </div>
    
      {% if page.case_meta %}
        <dl class="ob-definition-list ob-definition-list--grid">
          {% for meta in page.case_meta %}
            <div>
              <dt>
                {{ meta[0] }}
              </dt>
              <dd>
                {{ meta[1] }}
              </dd>
            </div>
          {% endfor %}
        </dl>
      {% endif %}
    
      {% if page.project_meta %}
        <dl class="ob-definition-list ob-definition-list--grid">
          {% for meta in page.project_meta %}
            <div>
              <dt>
                {{ meta[0] }}
              </dt>
              <dd>
                {{ meta[1] }}
              </dd>
            </div>
          {% endfor %}
        </dl>
      {% endif %}
    
      {% if page.masthead %}
    
        <figure class="ob-artwork ob-artwork--at-center" role="banner">
          <picture>
            <source srcset="{{ page.masthead.path }}" media="(max-width: 1024px)">
            <source srcset="{{ page.masthead.path_large }}" media="(min-width: 1025px)">
            <img class="cp-article__img" src="{{ page.masthead.path }}" alt="{{ page.masthead.alternate }}"/>
          </picture>
          <figcaption>
            {{ page.masthead.caption }}
          </figcaption>
        </figure>
    
      {% endif %}
    </div>
    
    {% if page.case_masthead  %}
    
      <figure class="ob-artwork" role="banner">
        <picture>
          <source srcset="{{ page.case_masthead.path }}" media="(max-width: 1024px)">
          <source srcset="{{ page.case_masthead.path_large }}" media="(min-width: 1025px)">
          <img class="cp-article__img" src="{{ page.case_masthead.path }}" alt="{{ page.case_masthead.alternate }}"/>
        </picture>
        <figcaption>
          {{ page.case_masthead.caption }}
        </figcaption>
      </figure>
    
    {% endif %}

  </header>

  <div class="cp-article__content">
    <div class="cp-article__contain cp-article__contain--small">
      {{ content }}
    </div>
  </div>

  <footer class="cp-article__footer">

  </footer>
</article>{% endraw %}{% endhighlight %}
</div>

Let’s cover some key bits:

I named the layout `article` and use one class  instead of two to structure the layout

<div class="cp-code">
  <button class="cp-button cp-button--fab  cp-code__button">
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    class="ob-icon" 
    viewBox="0 0 16 16"
    aria-hidden="true"
    >
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
    <span class="cp-code__tooltip" role="tooltip">
      Copy code
    </span>
  </button>
{% highlight html %}{% raw %}<article class="cp-article">
  <header class="cp-article__header">
    <div class="cp-article__contain cp-article__header-contain">

    </div>
  </header>

  <div class="cp-article__content">
    <div class="cp-article__contain cp-article__contain--small">
      {{ content }}
    </div>
  </div>

  <footer class="cp-article__footer">

  </footer>
</article>{% endraw %}{% endhighlight %}
</div>

Within the `header`, I used conditionals to render the difference:

Here is the conditional to show if a page has a description or not

<div class="cp-code">
  <button class="cp-button cp-button--fab  cp-code__button">
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    class="ob-icon" 
    viewBox="0 0 16 16"
    aria-hidden="true"
    >
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
    <span class="cp-code__tooltip" role="tooltip">
      Copy code
    </span>
  </button>
{% highlight html %}{% raw %}{% if page.description %}
    <p class="cp-article__subtitle">
        {{ page.description }}
    </p>
{% endif %}{% endraw %}{% endhighlight %}
</div>

Here is another conditional to show if a page has meta details such as published date and estimated reading time.

<div class="cp-code">
  <button class="cp-button cp-button--fab  cp-code__button">
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    class="ob-icon" 
    viewBox="0 0 16 16"
    aria-hidden="true"
    >
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
    <span class="cp-code__tooltip" role="tooltip">
      Copy code
    </span>
  </button>
{% highlight html %}{% raw %}{% if page.meta %}
  <ul class="cp-article__meta">
    <li>
      <span>
          Published:
      </span>
      <time class="js-posted-on" datetime="{{ page.meta.date | date_to_xmlschema }}">
          <span class="js-posted-ago"></span> on 
          {{ page.meta.date | date: "%d %b, %y" }}
      </time>
    </li>
    <li>
      <span>
          <abbr title="Estimated Reading Time">ERT</abbr>
      </span>
      <time datetime="">
          {{ page.meta.ert }}
      </time>
    </li>
  </ul>{% endif %}{% endraw %}{% endhighlight %}
</div>

And similar pattern is done to render the case studies meta and the mastheads.

The condition checks whether a particular key exist within the yml section of each page; if yes, render that code within the condition otherwise don't.

Here is an example of a post with the yml data

<div class="cp-code">
  <button class="cp-button cp-button--fab  cp-code__button">
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    class="ob-icon" 
    viewBox="0 0 16 16"
    aria-hidden="true"
    >
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
    <span class="cp-code__tooltip" role="tooltip">
      Copy code
    </span>
  </button>
{% highlight markdown %}
{% raw %}---
layout: article
title:  "An empty string is not a falsy value in liquid"
description: "Learn how not to think that false will work as you might think from other languages"

meta:
  categories: [Liquid, Jekyll]
  date: 2022-01-29T15:00:00Z
  ert: 5

card_image:
  path: /assets/images/articles/2022-01-29/article.jpg
  alternate:

masthead:
  path: /assets/images/articles/2022-01-29/name-masthead-sm.jpg
  path_large: /assets/images/articles/2022-01-29/name-masthead.jpg
  alternate:
  caption:
---

We ran into this problem at work, when we were trying to solve a conditional rendering issue we were having with our posting data.{% endraw %}{% endhighlight %}
</div>