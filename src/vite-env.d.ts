/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


declare module 'echarts-gl/components' {
  import  { Grid3DComponent } from 'echarts-gl/components';
  declare function Grid3DComponent(registers: EChartsExtensionInstallRegisters): void;
  export { Grid3DComponent };
}