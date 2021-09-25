export declare namespace Global {
  type DefaultProps = {
    //frame type
    type: string;
    //id for identofy component
    id: string;
    //default width frame
    width?: string | number;
    //default height frame
    height?: string | number;
    //active resize frame
    resize?: boolean;
    // all - resize all curcle, size - change width and height
    resizeType?: 'all' | 'size';
    //move frame in window
    move?: boolean;
  }
  
  export type CustomComponentProps = DefaultProps & {
    type: 'component';
    urls?: string[] | string;
  }
  
  export type FrameComponentProps = DefaultProps & {
    type: 'iframe';
    url: string;
  }
  
  export type RenderProps = CustomComponentProps | FrameComponentProps;
  
  export type Root = HTMLElement | string;
  
  export type RenderWidgetFunction = (root: Root, props?: RenderProps) => void;
}
