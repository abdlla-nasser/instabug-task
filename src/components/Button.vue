<template>
  <button
    @click="onClick"
    :style="{ background: color, color: textColor }"
    :disabled="disabled"
    :class="{ disabled: disabled }"
    :type="type"
  >
    <img class="button-img" v-if="image && image.source" :src="image.source" alt="image.alt"/>
    <span>{{ text }}</span>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
    textColor: String,
    image: { source: String, alt: String },
    disabled: Boolean,
    type:String,
    cb: Function,
  },
  methods: {
    onClick() {
      this.cb && this.cb();
    },
  },
};
</script>
<style lang="scss" scoped>
button{
  outline: none;
  color: #fff;
  width: 100%;
  margin: auto;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(135, 135, 135);
  border-radius: 5px;
  box-shadow: 3px 6px 12px 1px #949494;
  margin: 10px auto;
  cursor: pointer;
}
button span {
  width:100%;
}
.button-img{
  width: 20px;
  height: 20px;
  color:white;
}
.disabled {
  background: rgb(179, 178, 178)!important;
}
</style>
