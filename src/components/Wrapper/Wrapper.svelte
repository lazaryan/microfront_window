<svelte:options tag="servender-microfront-window-wrapper"/>

<script lang="ts">
  import { getContext, onMount } from 'svelte';
  import { changeSize, resizeAll } from './utils/resize';
  import type { Widget } from 'types';

  export let contextid: string;

  let ref: HTMLDivElement;

  $: context = getContext<Widget.ContextData | undefined>(contextid);

  onMount(() => {
    if (ref && context?.props?.resize) {
      if (context?.props.resizeType === 'all') {
        resizeAll(ref);
      } else if (context?.props.resizeType === 'size') {
        changeSize(ref);
      }
    }
  });
</script>

<div bind:this={ref} class="wrapper">
  {#if context?.props?.resize}
    {#if context?.props.resizeType === 'all'}
      <div class='resizer nw top-left'></div>
      <div class='resizer ne top-right'></div>
      <div class='resizer sw bottom-left'></div>
      <div class='resizer se bottom-right'></div>
    {:else if context?.props.resizeType === 'size'}
      <div class='resizer se bottom-right'></div>
    {/if}
  {/if}
  <slot></slot>
</div>

<style lang="less">
  .wrapper {
    border: 2px solid red;
    position: relative;
    width: 500px;
    height: 500px;

    .resizer {
      position: absolute;
      width: 10px;
      height: 10px;
      background: #222;
      border: 3px solid #4286f4;

      &.top-left {
        left: -5px;
        top: -5px;
        cursor: nwse-resize; /*resizer cursor*/
      }

      &.top-right {
        right: -5px;
        top: -5px;
        cursor: nesw-resize;
      }

      &.bottom-left {
        left: -5px;
        bottom: -5px;
        cursor: nesw-resize;
      }

      &.bottom-right {
        right: -5px;
        bottom: -5px;
        cursor: nwse-resize;
      }
    }
  }
</style>
