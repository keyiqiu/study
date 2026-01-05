<!-- src/components/BlogPost.vue -->
<template>
  <article class="blog-post">
    <!-- 文章头部 -->
    <header class="post-header">
      <h1 class="post-title">
        10 Advanced CSS Techniques Every Developer Should Know in 2024
      </h1>
      <a href="https://news.wmpvp.com/community-detail.html?id=360686733"></a>
      <div class="post-meta">
        <address class="author">
          By <a rel="author" href="#">Jane Doe</a>
        </address>
        <time datetime="2024-03-15">March 15, 2024</time>
        <span class="category">in <a href="#">Web Development</a></span>
      </div>
    </header>

    <!-- 文章内容 -->
    <main class="post-content">
      <section class="intro">
        <p>
          Cascading Style Sheets (CSS) have evolved significantly over the
          years. What was once a simple language for styling web pages has
          become a powerful tool for creating complex layouts, animations, and
          responsive designs. In this article, we'll explore 10 advanced CSS
          techniques that will elevate your web development skills.
        </p>
      </section>

      <section>
        <h2>1. CSS Grid Layout</h2>
        <p>
          CSS Grid is a two-dimensional layout system that allows you to create
          complex grid-based designs with ease. Unlike Flexbox, which is
          one-dimensional, Grid can handle both rows and columns simultaneously.
        </p>

        <!-- 图片示例 -->
        <figure class="post-image">
          <img
            src="https://picsum.photos/id/0/800/400"
            alt="CSS Grid Layout Example"
          />
          <figcaption>An example of a responsive CSS Grid layout.</figcaption>
        </figure>
      </section>

      <section>
        <h2>2. Custom Properties (CSS Variables)</h2>
        <p>
          CSS variables allow you to define reusable values in your stylesheets.
          They are especially useful for themes, consistent spacing, and dynamic
          changes via JavaScript.
        </p>
        <pre><code>:root {
  --primary-color: #3498db;
  --spacing-unit: 8px;
}

.button {
  background-color: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
}</code></pre>
      </section>

      <!-- 引用块 -->
      <blockquote class="pull-quote">
        "The future of web development is not just about writing code, but
        writing <em>semantic</em> and <em>accessible</em> code."
      </blockquote>
    </main>

    <!-- 文章页脚 -->
    <footer class="post-footer">
      <div class="tags">
        <span>Tags:</span>
        <ul class="tag-list">
          <li><a href="#">CSS</a></li>
          <li><a href="#">Web Development</a></li>
          <li><a href="#">Frontend</a></li>
        </ul>
      </div>
    </footer>
  </article>
</template>

<script setup lang="ts">
// 暂时不需要脚本
</script>

<style scoped>
/* 组件样式将写在这里 */
</style>
