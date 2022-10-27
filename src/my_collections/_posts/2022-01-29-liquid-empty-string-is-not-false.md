---
layout: journal
title: "An empty string is not a falsy value in liquid"
excerpt: "Learn how not to think that false will work as you intended in liquid"

featured: false

categories: [Jekyll]

author: camariana

created_at: 2022-01-29 15:00:00 +00:00

featured_image:
  path: /assets/images/journal/2022-01-29/featured.jpg
  path_large: /assets/images/journals/2022-01-29/featured_large.jpg
  alt:
  caption:
---

We ran into this problem at work, when we were trying to solve a conditional rendering issue we were having with our posting data.

## A bit of context

To put you into context, here is a little background of what we were doing with this data.

At the [Gambia College] [School of Education], every term, thousands of students apply for Teaching Practice (TP) to different schools through out the country. The posting data is in CSV, which we automatically loop through and generate a unique posting memo for each student using Liquid.

And here is an example of the memo with fake data

<figure>
	<img class="ut-figure-border" src="/assets/images/posts/2022-01-29/memo.png" alt="">
	<figcaption>
		Teaching practice memo
	</figcaption>
</figure>

##  The problem at hand

So what's the issue?

What we want is one memo to rule them all.

But the issues is, we have different students, in different programs and majors. The content of the memo is the same for all the students except few places, such as:

- The school the student choose and the region
- The name of the student and GC #
- The name of the programme
- The major of the student
- The prose of the pen ultimate sentence in the first paragraph

Most of the difference is in the first paragraph of the memo, here are three different versions of that paragraph, take note of the insertion marks:

For Diploma in Education and other non advanced diploma programmes

> I write with great pleasure to inform you that [**Jannatta Naim** (GC#:5010987)], is a student of The Gambia College, pursuing [**Diploma in Education Primary**] under the School of Education. [**S/he**] has chosen your school for Teaching Practice (TP). The duration of this exercise shall be only one term, starting from January to April 2022.

For Advanced Diploma in Education Secondary students with one major

> I write with great pleasure to inform you that [**Jannatta Naim** (GC#:5010987)], is a student of The Gambia College, pursuing [**Adv Diploma in Education Secondary**] under the School of Education. As a specialist in [**ISLAMIC STUDIES**], s/he has chosen your school for Teaching Practice (TP). The duration of this exercise shall be only one term, starting from January to April 2022.           

For Advanced Diploma in Education Secondary students with two majors

> I write with great pleasure to inform you that **Jannatta Naim** (GC#:5010987), is a student of The Gambia College, pursuing **Adv Diploma in Education Secondary** under the School of Education. As a specialist in **MATHEMATICS** and **AGRICULTURAL SCIENCE**, [**s/he**] has chosen your school for Teaching Practice (TP). The duration of this exercise shall be only one term, starting from January to April 2022.

<div class="cp-alert cp-alert--info">
  <span class="cp-alert__caption">Note</span>
  <p>
		For Diploma in Education and other non advanced diploma programmes, the "S" in the [S/he] starts with a capital.
  </p>

	<p>
		For Advanced Diploma in Education Secondary students with one major, the "s" in the [s/he] doesn't start with a capital, because in that version, we need to indicate the student's specialization.
	</p>
	
	<p>
		The Advanced Diploma in Education Secondary students with two majors is the same with the above paragraph, except the "and" clause within the two majors.
	</p>
</div>



## Conditional rendering to the rescue

To separate the advanced diploma programmes and the non advanced diploma programmes is straight forward. One way to do it in liquid is like this.

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
{% highlight liquid %}
{% raw %}{% if page.programme contains 'Adv' %}

	// Advanced Diploma stuff here

{% else %}

	// Non Advanced Diploma stuff here

{% endif %}{% endraw %}{% endhighlight %}
</div>



If false, meaning, if the `page.programme` — the programme name — doesn't contain the word `Adv`, then the first paragraph should be like this:

> I write with great pleasure to inform you that [**Adama  Sowe**], is a student of The Gambia College,  pursuing [**Diploma in Education Primary**] under the School of Education. S/he has chosen your school for **Teaching Practice (TP)**. The duration of this exercise shall be only one term, starting from 22nd January 2022 to end of April 2022.

To separate the advance diploma students with a single major and double major requires further conditional logic. 

So, coming from a JavaScript background, we approached to solve this problem via liquid with a JavaScript mindset by comparing the student's major to an empty string. This is simply because in JavaScript an empty string is a false value. This of course is the opposite in liquid.

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
{% highlight liquid %}
{% raw %}{% if page.secondMajor == '' %}
	As a specialist in 
  <strong>{{ page.firstMajor | upcase }},</strong>
  s/he
{% else %} 
	As a specialist in 
  <strong>{{ page.firstMajor | upcase }},</strong> 
  and 
  <strong>{{ page.secondMajor | upcase }}
  s/he
{% endif %}{% endraw %}
{% endhighlight %}
</div>

Guess what? This  does not work.

Why?

In liquid, [strings](https://shopify.github.io/liquid/basics/types/#string), even when empty, are truthy. So to make that [falsy](https://shopify.github.io/liquid/basics/truthy-and-falsy/#falsy) and use it to my advantage in the condition, I have to use `unless`, then  compare `page.secondMajor` with the special value `empty`.

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
{% highlight liquid %}
{% raw %}{% unless page.secondMajor == empty %}
	{% assign singleMajor = nil %}
{% endunless %}{% endraw %}
{% endhighlight %}
</div>

Inside the `unless` block, we assign singleMajor to `nil`, this will set that value to false and now we can use that to compare the two majors then use conditions to render the two different paragraphs.

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
{% highlight liquid %}
{% raw %}{% assign singleMajor = nil %}{% endraw %}
{% endhighlight %}
</div>

And here is the rest of the code that helps us conditionally render the first paragraph of the memo.

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
{% highlight liquid %}
{% raw %}<p>
  I write with great pleasure to inform you that
  <strong>
      {{ page.firstName | capitalize }} 
      {{ page.minit | upcase }} 
      {{ page.lastName | capitalize }}
      (GC#:{{ page.gcNumber }}),
  </strong>
  is a student of The Gambia College,  pursuing
  <strong>
      {{ page.programme }}
  </strong>
  under the School of Education. 

  {% if page.programme contains 'Adv' %}

    {% unless page.secondMajor == empty %}
      {% assign singleMajor = nil %}
    {% endunless %}

    {% if page.secondMajor == singleMajor %}
      As a specialist in 
      <strong>{{ page.firstMajor | upcase }},</strong> 
      s/he
    {% else %} 
      As a specialist in 
      <strong>{{ page.firstMajor | upcase }},</strong> 
      and 
      <strong>{{ page.secondMajor | upcase }} 
      s/he
    {% endif %}

  {% else %}
  S/he 
  {% endif %}
  has chosen your school for <strong>Teaching Practice (TP)</strong>. The duration of this exercise shall be only one term, starting from January to April 2022.
</p>{% endraw %}
{% endhighlight %}
</div>