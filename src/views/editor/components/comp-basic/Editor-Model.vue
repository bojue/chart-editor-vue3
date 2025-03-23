<template>
  <div class="setting-item">
    <a-modal :title="title" :width="800" :bodyStyle="bodyStyle" :open="open" :cancelText="'取消'" :okText="'确定'"
      @cancel="cancel" @ok="handleOk">
      <div :id="codeEditorId"></div>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { CopyOutlined, EditOutlined } from '@ant-design/icons-vue'
import CodeFlask from 'codeflask';
import { notification } from 'ant-design-vue';
interface Props {
  title: string
  value: string
}

const props = defineProps<Props>();
const emits = defineEmits(['cancel', 'submit'])
const open = ref(true)
const flask = ref(null)
const codeEditorId = ref('code-editor')
const bodyStyle = {
  minHeight: '500px',
  maxHeight: '700px'
}

const initCode = () => {
  const hasDOM = document.getElementById(codeEditorId.value)
  if (hasDOM) {
    flask.value = new CodeFlask('#' + codeEditorId.value, {
      language: 'json',
      lineNumbers: true,
      defaultCode: JSON.stringify(props.value, null, 2)
    });

    // This will also trigger .onUpdate()
    flask.value.updateCode(JSON.stringify(props.value, null, 2));
  }
}

watch(props.value, value => {
  initCode()
})


onMounted(() => {
  initCode()
})



const handleOk = () => {
  if (flask.value) {
    try {
      const data = flask.value.getCode()
      const str = JSON.parse(data)
      emits('submit', str)
    } catch (e) {
      if (e instanceof SyntaxError) {
        notification.error({
          message: '解析错误，请检查数据是否是正常的json对象:\n\n',
          description: e.message
        })
      } else {
        notification.error({
          message: e.message
        })
      }
    }

  } else {
    // emits('cancel')
  }

}

const cancel = () => {
  emits('cancel')
}


</script>

<style lang="scss" scoped>
:deep(.ant-modal-content) {
  width: 800px;

}

:deep(.codeflask) {
  height: calc(100% - 120px);
  width: calc(100% - 50px);
}

#editor {
  height: 100%;
  position: absolute;
}
</style>
