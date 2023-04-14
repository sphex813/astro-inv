export const formKitTheme = {
  global: {
    fieldset:
      "max-w-md border border-gray-400 dark:border-gray-200 rounded px-2 pb-1",
    help: "text-xs text-gray-500 dark:text-gray-300",
    inner:
      "formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none",
    input:
      "appearance-none bg-transparent focus:outline-none focus:ring-0 focus:shadow-none",
    label: "block mb-1 font-bold text-sm dark:text-white",
    legend: "font-bold text-sm",
    loaderIcon:
      "inline-flex items-center w-4 text-gray-600 dark:text-gray-400 animate-spin",
    message: "text-red-500 dark:text-red-300 mb-1 text-xs",
    messages: "list-none p-0 mt-1 mb-0",
    outer: "mb-4 formkit-disabled:opacity-50",
    prefixIcon:
      "w-10 flex self-stretch grow-0 shrink-0 rounded-tl rounded-bl border-r border-gray-400 bg-white bg-gradient-to-b from-transparent to-gray-200 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto",
    suffixIcon:
      "w-7 pr-3 flex self-stretch grow-0 shrink-0 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto",
  },

  "family:box": {
    decorator:
      "block relative h-5 w-5 mr-2 rounded bg-white dark:bg-black bg-gradient-to-b from-transparent to-gray-200 dark:to-gray-600 ring-1 ring-gray-400 peer-checked:ring-primary text-transparent peer-checked:text-primary",
    decoratorIcon:
      "flex p-[3px] w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
    help: "mb-2 mt-1.5",
    input:
      "absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none peer",
    label:
      "$reset text-sm dark:text-gray-100 text-gray-700 dark:text-white mt-1 select-none",
    wrapper: "flex items-center mb-1",
  },
  "family:text": {
    inner:
      "flex items-center max-w-md ring-1 ring-gray-400 dark:ring-gray-600 dark:focus-within:ring-primary focus-within:ring-primary focus-within:ring-2 [&>label:first-child]:focus-within:text-primary rounded mb-1",
    input:
      "w-full px-3 py-2 border-none text-base dark:text-gray-100 text-gray-700 placeholder-gray-400",
  },

  "family:button": {
    input:
      "$reset inline-flex items-center bg-primary-dark text-white text-sm font-normal py-3 px-6 rounded focus-visible:outline-2 focus-visible:outline-primary-dark focus-visible:outline-offset-2 formkit-disabled:bg-gray-400 formkit-loading:before:w-4 formkit-loading:before:h-4 formkit-loading:before:mr-2 formkit-loading:before:border formkit-loading:before:border-2 formkit-loading:before:border-r-transparent formkit-loading:before:rounded-3xl formkit-loading:before:border-white formkit-loading:before:animate-spin",
    wrapper: "mb-1",
    prefixIcon: "$reset block w-4 -ml-2 mr-2 stretch",
    suffixIcon: "$reset block w-4 ml-2 stretch",
  },
  radio: {
    decorator: "rounded-full",
    decoratorIcon: "w-5 p-[5px]",
  },
  select: {
    inner:
      "flex relative max-w-md items-center rounded mb-1 ring-1 ring-gray-400 dark:ring-gray-600 focus-within:ring-primary dark:focus-within:ring-primary focus-within:ring-2 [&>span:first-child]:focus-within:text-primary",
    input:
      'w-full pl-3 pr-8 py-2 border-none text-base text-gray-700 dark:text-gray-100 placeholder-gray-400 formkit-multiple:p-0 data-[placeholder="true"]:text-gray-400 formkit-multiple:data-[placeholder="true"]:text-inherit',
    selectIcon:
      "flex p-[3px] shrink-0 w-5 mr-2 -ml-[1.5em] h-full pointer-events-none",
    option:
      "formkit-multiple:p-3 formkit-multiple:text-sm text-gray-700 dark:text-gray-100",
  },
  textarea: {
    inner:
      "flex max-w-md rounded mb-1 ring-1 ring-gray-400 dark:ring-gray-600 focus-within:ring-primary dark:focus-within:ring-primary [&>label:first-child]:focus-within:text-primary",
    input:
      "block w-full h-32 px-3 py-3 border-none text-base dark:text-gray-100 text-gray-700 placeholder-gray-400 focus:shadow-outline",
  },
};
