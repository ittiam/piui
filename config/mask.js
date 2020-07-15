export default {
  animationShow: 'pi-ani-fade-show', // 显示的时候执行的动画
  animationHide: 'pi-ani-fade-hide', // 隐藏的时候执行的动画
  duration: 300, // 遮罩的过渡时间，单位为ms
  maskClosable: true, // 是否可以通过点击遮罩进行关闭
  hideTabBar: false, // 是否隐藏TabBar
  appendToBody: false, // 是否挂载到body下，防止嵌套层级无法遮罩的问题（仅H5环境生效）
  zIndex: 1000, // 元素 z-index
  background: 'rgba(0, 0, 0, .5)' // 背景颜色（默认'#000000'）
}
