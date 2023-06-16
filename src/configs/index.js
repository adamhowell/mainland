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
    }
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
