<template>
  <div class="setting-item">
    <div class="tit" :key="title">{{ title }}</div>
    <div class="val">
      <div class="data-str cursor" :title="JSON.stringify(props.dataObject[props.params], null, 2)">
        {{ props.dataObject[props.params] }}
      </div>
      <div class="control">
        <a-button size="small" type="default" @click="copyText">
          <template #icon>
            <CopyOutlined />
          </template>

          复制</a-button>
        <a-button size="small" type="primary" @click="editorData">
          <template #icon>
            <EditOutlined />
          </template>
          编辑</a-button>
      </div>
    </div>

    <EditorModel v-if="open" :value="props.dataObject[props.params]" :title="codeEditorTitle"
      @submit="changeCodeData($event, code)" @cancel="cancel" />
  </div>

</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { CopyOutlined, EditOutlined } from '@ant-design/icons-vue'
import { notification } from 'ant-design-vue';
import EditorModel from './Editor-Model.vue'


interface Props {
  title: string
  dataObject: any
  params: string
}

const props = defineProps<Props>();
const open = ref(false)
const codeEditorTitle = ref('编辑静态数据源')


const copyText = async () => {
  try {
    notification.success({
      message: '复制成功'
    });
  } catch (err) {
    notification.error({
      message: '复制失败'
    });
  }
};

const editorData = () => {
  open.value = true
}

const cancel = () => {
  open.value = false
}

const changeCodeData = (event) => {
  open.value = false
  props.dataObject[props.params] = event
}

</script>

<style lang="scss" scoped>
.data-str {
  display: -webkit-box;
  /* 将元素设置为弹性盒子 */
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;
  /* 超出部分隐藏 */
  text-overflow: ellipsis;
  /* 超出部分显示省略号 */
}

.cursor {
  cursor: pointer;
}

.control {
  margin-top: 10px;

  button {
    margin-right: 10px;
  }
}
</style>
