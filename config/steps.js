export default {
  customClass: '', // 自定义样式类，字符串形式（''）
  customStyle: {}, // 自定义样式，对象形式（默认值：{}）
  list: [], // 选项列表，默认（[]）
  mode: 'dot', // 步骤条的类型，默认（'dot'）
  current: 0, // 当前处于第几步，默认（0）
  activeColor: '#2979ff', // 激活步骤的颜色
  color: '#909399', // 未激活的颜色
  currentColor: '#000000', // 当前步骤的颜色
  icon: 'check', // 选中图标
  direction: 'row', // 排列方向
  size: '24', // 图标大小
  itemStyle: {}, // 行样式（默认：'{}'）
  itemClass: '' // 行样式（默认：''）
}
