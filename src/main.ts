import { createApp } from 'vue'
import App from './App.vue'
import 'echarts-gl'
import ECharts from 'vue-echarts'
import { 
  use,
  ComposeOption
} from "echarts/core";
// 手动引入 ECharts 各模块来减小打包体积
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart,
  PieChart,
  BarSeriesOption,
  LineSeriesOption,
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  DataZoomComponent,
  VisualMapComponent,
  TitleComponentOption,
  GridComponentOption
} from 'echarts/components'
// @ts-ignore
import { 
  Grid3DComponent 
} from 'echarts-gl/components';

type ECOption = ComposeOption<
  BarSeriesOption | LineSeriesOption | TitleComponentOption | GridComponentOption
>;

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent,
  PieChart,
  TitleComponent,
  LegendComponent,
  DataZoomComponent,
  VisualMapComponent,
  Grid3DComponent,
]);

const app = createApp(App)
app.component('v-chart', ECharts)
app.mount('#app')
