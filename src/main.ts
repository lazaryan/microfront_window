import { v4 as uuidv4 } from 'uuid';

import App from './App.svelte';
import type { Global } from './types';

export const renderWidget: Global.RenderWidgetFunction = (root, {
  type = 'component',
  id = uuidv4(),
}) => {
  const rederRoot = typeof root === 'string' ? document.querySelector(root) : root;

  const app = new App({
    target: rederRoot,
    props: {
      type,
      id,
    }
  })

  console.log('app', app);
}

console.log('frames', window.frames);

export default renderWidget;
