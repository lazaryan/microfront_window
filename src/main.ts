import App from './App.svelte';

const renderWidget: RenderWidgetFunction = (root) => {
  const rederRoot = typeof root === 'string' ? document.querySelector(root) : root;

  const app = new App({
    target: rederRoot
  })

  console.log('app', app);
}

renderWidget('#app');

console.log('frames', window.frames);

export default renderWidget;
