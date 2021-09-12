/// <reference types="svelte" />
/// <reference types="vite/client" />

type RenderProps = {};

type Root = HTMLElement | string;

declare type RenderWidgetFunction = (root: Root, props?: RenderProps) => void;
