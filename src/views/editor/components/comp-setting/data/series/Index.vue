<template>
  <div class="setting-content-item">
    <ShowTitle :state="state"></ShowTitle>
    <div class="setting-body" v-show="state.showState">
      <E2Editor :title="'数据'" :params="'series'" :data-object="options" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, h } from 'vue';
import ShowTitle from '@/views/editor/components/comp-basic/ShowTitle.vue'
import E2Switch from '@/views/editor/components/comp-basic/Switch.vue'
import E2Input from '@/views/editor/components/comp-basic/Input.vue'
import E2Number from '@/views/editor/components/comp-basic/Number.vue'
import E2Select from '@/views/editor/components/comp-basic/Select.vue'
import E2Color from '@/views/editor/components/comp-basic/Color.vue'
import E2Slider from '@/views/editor/components/comp-basic/Slider.vue'
import E2Editor from '@/views/editor/components/comp-basic/Editor.vue'



interface Props {
  options: any
}

const state = ref({
  title: '标题',
  showState: true
})

const props = defineProps<Props>();


</script>

<style lang="scss" scoped></style>