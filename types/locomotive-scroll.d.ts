declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el?: HTMLElement | string;
    name?: string;
    offset?: number;
    repeat?: boolean;
    smooth?: boolean;
    lerp?: number;
    duration?: number;
    multiplier?: number;
    scrollFromAnywhere?: boolean;
    smartphone?: {
      smooth?: boolean;
      lerp?: number;
      duration?: number;
      multiplier?: number;
    };
    tablet?: {
      smooth?: boolean;
      lerp?: number;
      duration?: number;
      multiplier?: number;
    };
  }

  interface LocomotiveScrollInstance {
    destroy(): void;
    start(): void;
    stop(): void;
    scrollTo(target: string | HTMLElement | number, options?: {
      offset?: number;
      callback?: () => void;
      duration?: number;
      easing?: number[];
      disableLerp?: boolean;
    }): void;
    on(event: string, callback: (args: any) => void): void;
    off(event: string, callback: (args: any) => void): void;
  }

  class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions);
    destroy(): void;
    start(): void;
    stop(): void;
    scrollTo(target: string | HTMLElement | number, options?: {
      offset?: number;
      callback?: () => void;
      duration?: number;
      easing?: number[];
      disableLerp?: boolean;
    }): void;
    on(event: string, callback: (args: any) => void): void;
    off(event: string, callback: (args: any) => void): void;
  }

  export default LocomotiveScroll;
} 