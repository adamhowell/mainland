# TailwindCSS-powered WYSIWYG page builder

<p align="center">
  <img src="https://www.mainlandjs.com/logo.svg" width="500" height="75" alt="MainlandJS logo" style="margin: 20px auto;" />
</p>

MainlandJS is the first open source WYSIWYG page builder built exclusively with TailwindCSS in mind. [Try the live demo here](https://demo.mainlandjs.com).

## News

- **`July 11th, 2023`:** MainlandJS code is released

## What is MainlandJS?

MainlandJS is an open source WYSIWYG landing page builder powered by TailwindCSS & enhanced with AI. 

With MainlandJS you can visually create web pages, landing pages and more using TailwindCSS – the world’s most popular CSS framework – and easily generate images, text and even HTML with AI.

The key features of MainlandJS are:

- **XXX**: XXX.
- **XXX**: XXX.
- **XXX**: XXX.

<p align="center">
  <video controls="true" allowfullscreen="true">
    <source src="https://github.com/Accomplice-AI/mainland_js/assets/26133/f3d4fdb1-00e3-4999-8558-2271f99b4ed0" type="video/mp4">
  </video>
</p>

## Why MainlandJS?

MainlandJS was designed primarily for use inside Content Management Systems to speed up the creation of dynamic templates and replace common WYSIWYG editors, which are good for content editing, but inappropriate for creating HTML structures. It’s especially useful for teams that already use TailwindCSS everywhere else in their dev stack. Using MainlandJS user generated content can have the same class structure as everything else in your webapp and consume fewer resources.

## Usage

Directly in the browser:

```<div id="mainland-widget"></div>

<noscript> You need to enable JavaScript to run this app. </noscript>
<script src="path/to/mainlandJs.js"></script>
<script src="https://cdn.tailwindcss.com"></script>

<script>
  mainlandJs.init({
    target: "#mainland-widget",
    blocks: [
      {
        label: "Section",
        attributes: { class: "mld-section" },
        content: `<section></section>`,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64"><path d="M58,2c2.2,0,4,1.8,4,4v52c0,2.2-1.8,4-4,4H6c-2.2,0-4-1.8-4-4V6c0-2.2,1.8-4,4-4H58 M58,0H6C2.7,0,0,2.7,0,6v52c0,3.3,2.7,6,6,6h52c3.3,0,6-2.7,6-6V6C64,2.7,61.3,0,58,0L58,0z"/></svg>',
      },
    ],
  });
</script>
```

## License

The software is free for use under the MIT License. Please contact [support@mainland.si](mailto:support@mainland.ai?subject=MainlandJS%20License) for questions about other licensing options.

## Authors & Contributors

This library is made by Mainland.ai a hosted version of MainlandJS for teams.
Developed by Yaroslav Luchenko and Adam Howell.
