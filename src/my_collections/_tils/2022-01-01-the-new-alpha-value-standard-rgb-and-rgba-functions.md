---
layout: til
title: The new alpha value standard rgb() and rgba() functions

featured: false

categories: [CSS]
created_at: 2022-01-01 10:20:00 +00:00

---


<p>
  The new syntax is to use three values without commas followed by a slash and the alpha channel of the color as a percentage.
</p>

<p>
  Consider the following example of a slightly-transparent blue:
</p>

<figure class="cp-compare-code" data-type="bad">

  <p class="cp-compare-code__label">
      Don't
  </p>

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
          <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
        </svg>
        <span class="cp-code__tooltip" role="tooltip">
          Copy code
        </span>
      </button>
  
{% highlight css linenos %}
{% raw %}background-color: rgba(0, 0, 255, 0.8);
{% endraw %}
{% endhighlight %}
  </div>
</figure>

<figure class="cp-compare-code" data-type="good">
  <p class="cp-compare-code__label">
      Do
  </p>

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
          <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
        </svg>
        <span class="cp-code__tooltip" role="tooltip">
          Copy code
        </span>
      </button>
  
{% highlight css linenos %}
{% raw %}background-color: rgb(0 0 100% / 80%);
{% endraw %}
{% endhighlight %}
  </div>
  
</figure>

<div class="cp-alert cp-alert--warning">
  <span class="cp-alert__caption">Warning</span>
  <p>
		 At the time of writing, in scss (sass), not css, the rgb() will throw a compilation error like this:
  </p>

  <pre><code>Function rgb is missing argument ...</code></pre>
 
</div>