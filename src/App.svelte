<svelte:options tag="servender-microfront-window"/>

<script lang="ts">
  import { getContext, setContext } from 'svelte';
  import { v4 as uuidv4 } from 'uuid';
  import type { Widget } from 'types';

  import './components/Wrapper/Wrapper.svelte';

  const contextId = uuidv4();
  const defaultComponentId = uuidv4();

  const getContextData = (): Widget.ContextData => {
    return {
      props: {
        type: $$props.type || 'component',
        id: $$props.id || defaultComponentId,
        resize: $$props.resize || true, //false
        resizeType: $$props.resizeType || 'size', //size
        move: $$props.move || false, //false
      }
    }
  }

  $: setContext(contextId, getContextData());

  $: context = getContext<Widget.ContextData>(contextId);

  $: console.log('global_context', context);
</script>

<main>
  <servender-microfront-window-wrapper contextid={contextId}>
    <div style="width: 300px; height: 300px">ffff</div>
  </servender-microfront-window-wrapper>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
