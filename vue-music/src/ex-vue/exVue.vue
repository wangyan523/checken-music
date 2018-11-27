<template>
  <span class="demo" v-show="isShow">
    this is a span
  </span>
</template>

<script>
function createEmptyVNode () {
  const node = new VNode();
  node.text = '';
  return node;
}
function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val));
}
function cloneVNode (node) {
  const cloneVnode = new VNode(
    node.tag,
    node.data,
    node.children,
    node.text,
    node.elm
  )
  return cloneVnode
}
export default {
  data () {
    return {
      tag: 'span',
      data: {
        // 指令集合数组
        directives: [
          {
            // v-show指令
            rawName: 'v-show',
            expression: 'isShow',
            name: 'show',
            value: true
          }
        ],
        // 静态class
        staticClass: 'demo'
      },
      text: undefined,
      children: [
        // 子节点是一个文本VNode节点
        {
          tag: undefined,
          data: undefined,
          text: 'this is a span',
          children: undefined
        }
      ]
    }
  }
}
</script>

<style>

</style>
