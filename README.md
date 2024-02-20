# TailwindCSS-powered WYSIWYG page builder

Mainland is an open source WYSIWYG page builder built exclusively with TailwindCSS in mind.

## What is Mainland?

Mainland is an open source WYSIWYG landing page builder powered by TailwindCSS & enhanced with AI. 

With Mainland you can visually create web pages, landing pages and more using TailwindCSS – the world’s most popular CSS framework – and easily generate images, text and even HTML with AI.

The key features of Mainland are:

- **Powered by Tailwind CSS**: The world’s most popular CSS framework, Tailwind CSS makes it easy for hundreds of thousands of developers and teams to build quickly and uniformly. Mainland’s support for Tailwind makes it easy for you and your team to integrate Mainland using the CSS framework you already know and love and run in production.
- **Open Source WYSIWYG**: Mainland is the world’s first open source, WYSIWYG page builder that fully supports Tailwind by default.
- **AI enhanced**: Securely use your Open AI API token to seemlessly add HTML templates, headers, paragraphs and images to your pages.

https://github.com/Accomplice-AI/mainland/assets/26133/f3d4fdb1-00e3-4999-8558-2271f99b4ed0

## Why Mainland?

Mainland was designed primarily for use inside Content Management Systems to speed up the creation of dynamic templates and replace common WYSIWYG editors, which are good for content editing, but inappropriate for creating HTML structures. It’s especially useful for teams that already use TailwindCSS everywhere else in their dev stack. Using Mainland user generated content can have the same class structure as everything else in your webapp and consume fewer resources.

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

The software is free for use under the MIT License.

## Authors & Contributors

Developed by Yaroslav Luchenko and Adam Howell.
