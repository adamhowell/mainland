export const defaultConfig = {
  blocks: [
    {
      label: "Div",
      attributes: { class: "mld-div" },
      content: `<div></div>`,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64"><path d="M58,2c2.2,0,4,1.8,4,4v52c0,2.2-1.8,4-4,4H6c-2.2,0-4-1.8-4-4V6c0-2.2,1.8-4,4-4H58 M58,0H6C2.7,0,0,2.7,0,6v52c0,3.3,2.7,6,6,6h52c3.3,0,6-2.7,6-6V6C64,2.7,61.3,0,58,0L58,0z"/></svg>',
    },
    {
      label: "Columns 3",
      attributes: { class: "grid gap-x-4 gap-y-4 grid-cols-3" },
      content: `<div><div class="p-3"></div><div class="p-3"></div><div class="p-3"></div></div>`,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64"><path d="M13.3,2c1.6,0,2.8,1.3,2.8,2.8v54.4c0,1.6-1.3,2.8-2.8,2.8H4.8C3.3,62,2,60.7,2,59.2V4.8C2,3.3,3.3,2,4.8,2H13.3 M13.3,0H4.8C2.2,0,0,2.2,0,4.8v54.4C0,61.8,2.2,64,4.8,64h8.5c2.7,0,4.8-2.2,4.8-4.8V4.8C18.2,2.2,16,0,13.3,0L13.3,0z"/><path d="M59.2,2C60.7,2,62,3.3,62,4.8v54.4c0,1.6-1.3,2.8-2.8,2.8h-8.5c-1.6,0-2.8-1.3-2.8-2.8V4.8c0-1.6,1.3-2.8,2.8-2.8H59.2M59.2,0h-8.5c-2.7,0-4.8,2.2-4.8,4.8v54.4c0,2.7,2.2,4.8,4.8,4.8h8.5c2.7,0,4.8-2.2,4.8-4.8V4.8C64,2.2,61.8,0,59.2,0L59.2,0z"/><path d="M36.3,2c1.6,0,2.8,1.3,2.8,2.8v54.4c0,1.6-1.3,2.8-2.8,2.8h-8.5c-1.6,0-2.8-1.3-2.8-2.8V4.8c0-1.6,1.3-2.8,2.8-2.8H36.3M36.3,0h-8.5c-2.7,0-4.8,2.2-4.8,4.8v54.4c0,2.7,2.2,4.8,4.8,4.8h8.5c2.7,0,4.8-2.2,4.8-4.8V4.8C41.1,2.2,38.9,0,36.3,0L36.3,0z"/></svg>',
    },
    {
      label: "Text",
      attributes: { class: "mld-span" },
      content: `<span>Text</span>`,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="64px" height="64px" viewBox="0 0 64 64"><path d="M12,21.9c0-1,0.9-1.8,2-1.8h36c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,23.7,12,22.9,12,21.9z M12,31.9c0-1,0.9-1.8,2-1.8h36c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,33.7,12,32.9,12,31.9z M12,41.9c0-1,0.9-1.8,2-1.8h24c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,43.7,12,42.9,12,41.9z"/><path d="M58.5,11.2c1.4,0,2.5,1.1,2.5,2.5v37c0,1.4-1.1,2.5-2.5,2.5h-53C4.1,53.2,3,52,3,50.7v-37c0-1.4,1.1-2.5,2.5-2.5H58.5M58.5,8.2h-53c-3,0-5.5,2.5-5.5,5.5v37c0,3,2.5,5.5,5.5,5.5h53c3,0,5.5-2.5,5.5-5.5v-37C64,10.6,61.5,8.2,58.5,8.2L58.5,8.2z"/></svg>',
    },
    {
      label: "Paragraph",
      content: `<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>`,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="64px" height="64px" viewBox="0 0 64 64"><path d="M12,21.9c0-1,0.9-1.8,2-1.8h36c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,23.7,12,22.9,12,21.9z M12,31.9c0-1,0.9-1.8,2-1.8h36c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,33.7,12,32.9,12,31.9z M12,41.9c0-1,0.9-1.8,2-1.8h24c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,43.7,12,42.9,12,41.9z"/><path d="M58.5,11.2c1.4,0,2.5,1.1,2.5,2.5v37c0,1.4-1.1,2.5-2.5,2.5h-53C4.1,53.2,3,52,3,50.7v-37c0-1.4,1.1-2.5,2.5-2.5H58.5M58.5,8.2h-53c-3,0-5.5,2.5-5.5,5.5v37c0,3,2.5,5.5,5.5,5.5h53c3,0,5.5-2.5,5.5-5.5v-37C64,10.6,61.5,8.2,58.5,8.2L58.5,8.2z"/></svg>',
    },
    {
      label: "Container",
      attributes: { class: "container mx-auto" },
      content: `<div></div>`,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64"><path d="M58,2c2.2,0,4,1.8,4,4v52c0,2.2-1.8,4-4,4H6c-2.2,0-4-1.8-4-4V6c0-2.2,1.8-4,4-4H58 M58,0H6C2.7,0,0,2.7,0,6v52c0,3.3,2.7,6,6,6h52c3.3,0,6-2.7,6-6V6C64,2.7,61.3,0,58,0L58,0z"/></svg>',
    },
    {
      label: "Card",
      attributes: { class: "container mx-auto" },
      content: `  <div class="flex justify-center items-center">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Card Title</div>
          <p class="text-white text-base">This is the description of the card.</p>
        </div>
        <div class="px-6 py-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Button
          </button>
        </div>
      </div>
    </div>`,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="64px" height="64px" viewBox="0 0 64 64"><path d="M12,21.9c0-1,0.9-1.8,2-1.8h36c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,23.7,12,22.9,12,21.9z M12,31.9c0-1,0.9-1.8,2-1.8h36c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,33.7,12,32.9,12,31.9z M12,41.9c0-1,0.9-1.8,2-1.8h24c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,43.7,12,42.9,12,41.9z"/><path d="M58.5,11.2c1.4,0,2.5,1.1,2.5,2.5v37c0,1.4-1.1,2.5-2.5,2.5h-53C4.1,53.2,3,52,3,50.7v-37c0-1.4,1.1-2.5,2.5-2.5H58.5M58.5,8.2h-53c-3,0-5.5,2.5-5.5,5.5v37c0,3,2.5,5.5,5.5,5.5h53c3,0,5.5-2.5,5.5-5.5v-37C64,10.6,61.5,8.2,58.5,8.2L58.5,8.2z"/></svg>',
    },
    {
      label: "Button",
      attributes: { class: "inline-flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" },
      content: `<button>Button</button>`,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64"><path d="M0,28c0-3.3,2.7-6,6-6h52c3.3,0,6,2.7,6,6v8c0,3.3-2.7,6-6,6H6c-3.3,0-6-2.7-6-6V28z M6,26c-1.1,0-2,0.9-2,2v8c0,1.1,0.9,2,2,2h52c1.1,0,2-0.9,2-2v-8c0-1.1-0.9-2-2-2H6z"/><path d="M54,30H42h-8h-4h-8H10c-1.1,0-2,0.9-2,2s0.9,2,2,2h12h8h4h8h12c1.1,0,2-0.9,2-2S55.1,30,54,30z"/></svg>',
    },
    {
      label: "Divider",
      attributes: { class: "mt-4 mb-4" },
      content: `<hr/>`,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64"><path d="M62,30H50h-4h-4h-4h-4h-4h-4h-4h-4h-4H2c-1.1,0-2,0.9-2,2s0.9,2,2,2h12h4h4h4h4h4h4h4h4h4h12c1.1,0,2-0.9,2-2S63.1,30,62,30z"/></svg>'
    },
    {
      label: "Headline",
      content: `<h1>Headline</h1>`,
      attributes: { class: "text-5xl font-bold leading-snug" },
      icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64"><g><path d="M57.1,10.3c-6,0.6-6.6,0.9-6.6,7v28.9c0,6,0.6,6.3,6.6,6.9v2H37.8v-2c6-0.7,6.6-0.9,6.6-6.9V31.8H19.7v14.4c0,6,0.6,6.2,6.5,6.9v2H7v-2c5.8-0.6,6.5-0.9,6.5-6.9V17.3c0-6-0.6-6.4-6.5-7v-2h19.2v2c-5.8,0.5-6.5,1-6.5,7v11.4h24.6V17.3c0-6-0.8-6.5-6.6-7v-2h19.3V10.3z"/></g></svg>'
    },
    {
      label: "Link",
      content: `<a href="example.com">Link</a>`,
      attributes: { class: "font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" },
      icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64"><g><path d="M24.5,18.3H13.7C6.1,18.3,0,24.4,0,32s6.1,13.7,13.7,13.7h13.7c7.6,0,13.7-6.1,13.7-13.7c0-1.6-0.3-3.1-0.8-4.6h-3.8c-0.4,0-0.8,0-1.1,0.1c2.4,4.4,0.8,10-3.6,12.4c-1.4,0.8-2.9,1.1-4.4,1.1H13.7c-5,0-9.1-4.1-9.1-9.1s4.1-9.1,9.1-9.1h7C21.7,21.1,23,19.6,24.5,18.3L24.5,18.3z"/><path d="M36.6,18.3c-7.6,0-13.7,6.1-13.7,13.7c0,1.6,0.3,3.1,0.8,4.6h5c-2.5-4.4-1-10,3.3-12.5c1.4-0.8,3-1.2,4.6-1.2h13.7c5,0,9.1,4.1,9.1,9.1s-4.1,9.1-9.1,9.1h-7c-1,1.7-2.3,3.3-3.7,4.6h10.8C57.9,45.7,64,39.6,64,32s-6.1-13.7-13.7-13.7H36.6z"/></g></svg>'
    },
    {
      label: "Image",
      content: `<img src="data:image/webp;base64,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bPgnEvY7bliCVg6/ULDjbuxWg14uf6/TloHyXrFRTMR/jS123fNOeWjm669d2HfT9ylDN+e/lbD1eZc6KSf0v1Sw+Z73yEI72z/Uafdg2g5F6OfwZ9jiAKb9qdDQ9a94HMGLN4dJRRn+GxmH0LS9uaCj/Z9oOId5ZxK0dP4DbA4CPG9LhZqm8e88jqLtm8JGT8H9s4TDSGVPLmjq9I8azmPckQRd3f8JmwMBN7ajQllb/hcXjiTVzWCjrRD/QcKpTHvhoK/rf9ZwLj1vRITCNvxfmYMBO7ahQGX7/wpHk+omDNJZKAcGSFvAFkqbxomB5w0IUNvXkYEdy5ehuPORAdXFa1Dd/cgAeenY6C53aBBWzkF5p0MDx8sWoL77oYHpi5ahv+2pAZUla9Dg8dQAacEGqTC0YwPPq8UWOtzwsYHjxfLQ4uHcwPSlStDj9dyAykIVKHLD5wZIy9Sgyv3JQVikQboM5eTA8QqxhTInPjkwfYEuqHN/dEB1eSIUejk6QF6cBI1OfHaQliZDp/vDA78wFVo9Hx44XpVOao348MD0NRkGev06PaC2Imyh2fPpAcp6sINqp3F8kFaDHZT7dX4QFuOCes/nBxevhId+p3F+YMc6BGj46wDB9FUI0PE5gUB1DSKUPGUQkFcg4lsxPV/E12J4uojvRcePFvDFaMeDBXwzmv5YAV+NVB/K48MxPxE7fDrG52GLj8fwNN3g89HxozTCB6QdD1IIn5CmPUbCVySVh/D4kMxPwA6fkmF+zeBj8uLJZXxP2jEzDviiNH1e3eKbksqsMr4r05TY48vS83yKwbelHZNhj89L06ZSCF+YeR7s8ZHpeQ6cCJ+Zts+gGHxq5p9rDl+bbvxU8/jgpPQ79cJHpym/USw+PE0cf20kg69PV/jvcL7wCUqh8F/gEggfoi61f1OTw/coXTE3/n/jmqPDl6lxPoSUck4xBu8I/9///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M//ExMA"/>`,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64"><g><path d="M37.2,23.4c0,2.9-2.3,5.2-5.2,5.2s-5.2-2.3-5.2-5.2s2.3-5.2,5.2-5.2S37.2,20.5,37.2,23.4z"/><path d="M9.6,11.3c-2.9,0-5.2,2.3-5.2,5.2v31c0,2.9,2.3,5.2,5.2,5.2h44.8c2.9,0,5.2-2.3,5.2-5.2v-31c0-2.9-2.3-5.2-5.2-5.2H9.6zM54.4,14.8c1,0,1.7,0.8,1.7,1.7v20.7l-13-6.7c-0.7-0.3-1.5-0.2-2,0.3L28.3,43.6l-9.2-6.1c-0.7-0.5-1.6-0.4-2.2,0.2l-9.1,8.1v1.9c0,0,0-0.1,0-0.1v-31c0-1,0.8-1.7,1.7-1.7H54.4z"/></g></svg>'
    },
    {
      label: "List",
      attributes: { class: "list-disc pl-5" },
      content: `<ul><li>List item 1</li><li>List item 2</li><li>List item 3</li></ul>`,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="64px" height="64px" viewBox="0 0 64 64"><path d="M12,21.9c0-1,0.9-1.8,2-1.8h36c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,23.7,12,22.9,12,21.9z M12,31.9c0-1,0.9-1.8,2-1.8h36c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,33.7,12,32.9,12,31.9z M12,41.9c0-1,0.9-1.8,2-1.8h24c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,43.7,12,42.9,12,41.9z"/><path d="M58.5,11.2c1.4,0,2.5,1.1,2.5,2.5v37c0,1.4-1.1,2.5-2.5,2.5h-53C4.1,53.2,3,52,3,50.7v-37c0-1.4,1.1-2.5,2.5-2.5H58.5M58.5,8.2h-53c-3,0-5.5,2.5-5.5,5.5v37c0,3,2.5,5.5,5.5,5.5h53c3,0,5.5-2.5,5.5-5.5v-37C64,10.6,61.5,8.2,58.5,8.2L58.5,8.2z"/></svg>',
    },
    {
      label: "Quote",
      attributes: { class: "p-4 my-4 border-l-4 border-zinc-300 bg-slate-600 dark:border-slate-500 dark:bg-slate-800 italic rounded" },
      content: `<blockquote>Quote</blockquote>`,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="64px" height="64px" viewBox="0 0 64 64"><path d="M12,21.9c0-1,0.9-1.8,2-1.8h36c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,23.7,12,22.9,12,21.9z M12,31.9c0-1,0.9-1.8,2-1.8h36c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,33.7,12,32.9,12,31.9z M12,41.9c0-1,0.9-1.8,2-1.8h24c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,43.7,12,42.9,12,41.9z"/><path d="M58.5,11.2c1.4,0,2.5,1.1,2.5,2.5v37c0,1.4-1.1,2.5-2.5,2.5h-53C4.1,53.2,3,52,3,50.7v-37c0-1.4,1.1-2.5,2.5-2.5H58.5M58.5,8.2h-53c-3,0-5.5,2.5-5.5,5.5v37c0,3,2.5,5.5,5.5,5.5h53c3,0,5.5-2.5,5.5-5.5v-37C64,10.6,61.5,8.2,58.5,8.2L58.5,8.2z"/></svg>',
    },
    
    // {
    //   label: "Form",
    //   attributes: { class: "container mx-auto" },
    //   content: `<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    //   <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    //     <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
    //     <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    //   </div>
    
    //   <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    //     <form class="space-y-6" action="#" method="POST">
    //       <div>
    //         <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
    //         <div class="mt-2">
    //           <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
    //         </div>
    //       </div>
    
    //       <div>
    //         <div class="flex items-center justify-between">
    //           <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
    //           <div class="text-sm">
    //             <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
    //           </div>
    //         </div>
    //         <div class="mt-2">
    //           <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
    //         </div>
    //       </div>
    
    //       <div>
    //         <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
    //       </div>
    //     </form>
    
    //     <p class="mt-10 text-center text-sm text-gray-500">
    //       Not a member?
    //       <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    //     </p>
    //   </div>
    // </div>`,
    // icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="64px" height="64px" viewBox="0 0 64 64"><path d="M12,21.9c0-1,0.9-1.8,2-1.8h36c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,23.7,12,22.9,12,21.9z M12,31.9c0-1,0.9-1.8,2-1.8h36c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,33.7,12,32.9,12,31.9z M12,41.9c0-1,0.9-1.8,2-1.8h24c1.1,0,2,0.8,2,1.8s-0.9,1.8-2,1.8H14C12.9,43.7,12,42.9,12,41.9z"/><path d="M58.5,11.2c1.4,0,2.5,1.1,2.5,2.5v37c0,1.4-1.1,2.5-2.5,2.5h-53C4.1,53.2,3,52,3,50.7v-37c0-1.4,1.1-2.5,2.5-2.5H58.5M58.5,8.2h-53c-3,0-5.5,2.5-5.5,5.5v37c0,3,2.5,5.5,5.5,5.5h53c3,0,5.5-2.5,5.5-5.5v-37C64,10.6,61.5,8.2,58.5,8.2L58.5,8.2z"/></svg>',
    // }
  ],
};
