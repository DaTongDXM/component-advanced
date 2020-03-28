<template>
<div>
  <section>

      <!--Css盒模型。标准模型box-sizing:content-box;
                    IE模型box-sizing:border-box
        js如何获取盒模型的宽高
                   dom上的内联属性 dom.style.height/width
                   IE上获取渲染后的宽高：dom.currentStyle.height/width
                   所有浏览器都支持的：window.getComputesStyle(dom).width/height
        BFC(解决边距重叠)，块及格式化上下文。原理：1.BFC元素垂直方向发生重叠
                                                2.BFC区域不会与浮动元素的box发生重叠
                                                3.BFC在页面上是一个独立的元素，外面的元素不会影响里面的元素
                                                4.计算BFC高度是浮动元素不会影响高度（清除浮动）
                    怎么创建BFC：1.flot值不为NULL
                                2.position值不是relative和static
                                3.display是inline-block和table
                                4.overflow不为visible
                    使用场景有哪些：
                    -->
      <article>

      </article>
  </section>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  components: {},
  mounted () {},
  created () {},
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
