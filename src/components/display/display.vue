<template>
  <div ref="display"></div>
</template>

<script>
import Vue from 'vue'
import randowStr from '../../utils/random_str.js'
export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      html: '',
      js: '',
      css: '',
      component: null,
      id: randowStr()
    }
  },
  watch: {
    code () {
      this.destryCode()
      this.renderCode()
    }
  },
  methods: {
    getSource (source, type) {
      const regex = new RegExp(`<${type}[^>]*>`)
      let openingTag = source.match(regex)

      if (!openingTag) return ''
      else openingTag = openingTag[0]

      return source.slice(source.indexOf(openingTag) + openingTag.length, source.lastIndexOf(`</${type}>`))
    },
    splitCode () {
      const script = this.getSource(this.code, 'script').replace(/export default/, 'return ')
      const style = this.getSource(this.code, 'style')
      const template = '<div id="app">' + this.getSource(this.code, 'template') + '</div>'

      this.js = script
      this.css = style
      this.html = template
    },
    renderCode () {
      this.splitCode()

      if (this.html !== '' && this.js !== '') {
        const parseStrToFunc = new Function(this.js)()

        parseStrToFunc.template = this.html
        const Component = Vue.extend(parseStrToFunc)
        this.component = new Component().$mount()

        this.$refs.display.appendChild(this.component.$el)

        if (this.css !== '') {
          const style = document.createElement('style')
          style.tyle = 'text/css'
          style.id = this.id
          style.innerHTML = this.css
          document.getElementsByTagName('head')[0].appendChild(style)
        }
      }
    },
    destryCode () {
      const $target = document.getElementById(this.id)
      if ($target)$target.parentNode.removeChild($target)

      if (this.component) {
        this.$ref.display.removeChild(this.component.$el)
        this.component.$destory()
        this.component = null
      }
    }
  },
  mounted () {
    this.renderCode()
  },
  beforeDestroy () {
    this.destryCode()
  }
}
</script>

<style lang='scss' scoped>
</style>
