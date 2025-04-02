<template>
  <div class="editor-component-list border-right">
    <div class="nav">
      <!-- 组件分类 -->
      <div class="comp-classify">
        <div class="item" v-for="item in CompLibClassifyList" @click="selectCompLibClassify(item)" :class="{
          active: currentCompLibClassify.type === item.type
        }">
          <div class="icon">
            <component :is="item.icon" class="icon" />
          </div>
          <div class="title">
            {{ item.label }}
          </div>
        </div>
      </div>
      <!-- 组件子分类 -->
      <div class="sub-nav">
        <div class="item-sub" v-for="subItem in currentCompLibClassify.children"
          :class="{ active: subItem.type === SubClassify?.type }" @click="selectSubClassify(subItem)">
          <div class="title">
            {{ subItem.label }}
          </div>
        </div>
      </div>
      <!-- 组件列表 -->
      <div class="comp-list">
        <div class="sub-header">
          <img class="icon" @click="changeActiveState" :title="'点击切换【' + (towColumnsActive ? 1 : 2) + '】列显示'"
            :src="towColumnsActive ? ColumnsActiveImg : ColumnsImg" alt="">
        </div>
        <div class="content" :class="{
          'towColumns': towColumnsActive && !selectCompList.length,
          'oneColumns': !towColumnsActive || !selectCompList.length
        }">
          <div class="item-comp-item" v-for="(subItem, index) in selectCompList" :class="{ active: subItem.active }">
            <div class="iconContent" @click="selectComp(subItem)" :key="index">
              <div class="chrome">
                <span class="close"></span><span class="min"></span><span class="resize"></span>
              </div>
              <img :src="subItem.icon" class="icon" alt="">
            </div>
            <div class="title">
              {{ subItem.label }}
            </div>
          </div>
          <span class="no-data" v-if="!selectCompList.length">
            没有数据
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, defineEmits, watch } from 'vue';
import { CompLibClassify } from '../configs/CompClassify';
import { CompList } from '../configs/Comp';

import ColumnsActiveImg from '@/assets/editor/colus-active.svg'
import ColumnsImg from '@/assets/editor/colus.svg'
import { useLocalStorageStore } from '@/stores/localStorage';

const emits = defineEmits(['selectType'])

const loadLocalStorageStore = useLocalStorageStore()
const CompLibClassifyList = ref(CompLibClassify) // 组件子分类
const SubClassify = ref('') // 组件子分类
const eChartsCompList = ref([]) // 组件列表
const compList = ref([...CompList]) // 组件列表
const selectCompList = ref([...CompList])
const currentCompLibClassify = ref(CompLibClassifyList.value[0])
const towColumnsActive = ref(true)

const selectCompLibClassify = (item: any) => {
  currentCompLibClassify.value = item
  const childrenType = item?.children?.[0]
  if (childrenType) {
    SubClassify.value = childrenType
  } else {
    SubClassify.value = null
  }
}

const selectSubClassify = (subItem: any) => {
  SubClassify.value = subItem
}

const changeActiveState = () => {
  const val = !towColumnsActive.value
  towColumnsActive.value = val
  loadLocalStorageStore.compTowColumnsActive(val)
}

const initActiveState = (currItem: any) => {
  if (Array.isArray(compList.value)) {
    compList.value.forEach((item: any) => {
      if (currItem.type == item.type) {
        item.active = true
      } else {
        item.active = false
      }

    })
  }
}


const selectComp = (item: any) => {
  initActiveState(item)
  emits('selectType', item.type)
}

const initData = () => {
  const data = CompLibClassifyList?.value[0]
  const subItem = data?.children?.[0]
  if (subItem) {
    SubClassify.value = subItem
  }
}

const selCompList = () => {
  const filterList = compList.value.filter(item => {
    return item.classify.includes(SubClassify.value?.type)
  })
  selectCompList.value = [...filterList]
}

watch(SubClassify, value => {
  selCompList()
})


onMounted(() => {
  eChartsCompList.value = [...CompList]
  initData()
})


</script>

<style lang="scss" scoped>
.editor-component-list {
  color: #c9cdd4;
  text-align: center;
  font-size: 11px;

  .nav {
    display: grid;
    grid-template-columns: 45px 60px 1fr;
    height: 100%;




    .item {
      height: 50px;
      cursor: pointer;
    }

  }

  .sub-nav {
    padding-top: 4px;
    background: RGBA(35, 35, 36, 0.5);

    .item-sub {
      cursor: pointer;
      margin: 4px 4px;
      padding: 6px 3px;
      border-radius: 5px;

      &.active {
        background: rgba(24, 144, 255, 0.15);
        color: #1890ff;
      }
    }
  }

  .comp-classify {
    height: calc(100% - 0px);
    width: 45px;
    padding-top: 15px;
    background: RGB(35, 35, 36);

    .item.active {
      color: #1890ff;

      .title {
        color: #1890ff;
      }
    }
  }

  .comp-list {
    overflow-y: auto;
    position: relative;
    // height: calc(100% - 152px);
    height: calc(100vh - 58px);
    overflow-x: hidden;
    overflow-y: scroll;

    .sub-header {
      height: 30px;
      line-height: 21px;
      // background: RGBa(35, 35, 36, 0.5);
      margin-bottom: 0px;
      // border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      background: RGBA(35, 35, 36, 1);
      color: darkgrey;
      text-align: right;
      position: sticky;
      top: 0;

      .icon {
        width: 14px;
        margin: 7px 10px;
      }
    }

    .content {
      padding: 10px 10px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 8px;

      &.oneColumns {
        grid-template-columns: 1fr;
      }
    }
  }

  .item-comp-item {
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    color: darkgrey;
    display: grid;
    grid-template-columns: 1fr 20px;

    &.active {
      .iconContent {
        border: 1px solid green;
      }

      .title {
        box-shadow: 3px 3px mediumspringgreen;
        color: aliceblue;
        background: dimgray;
      }
    }

    .title {
      font-size: 12px;
      padding: 6px 2px;
      background: rgba(255, 255, 255, 0.1);
      border-left: 1px solid rgb(16, 16, 20);
      // border-left: 1px solid darkgreen;
    }
  }

  .icon {
    font-size: 18px;
  }

  .iconContent {
    padding: 0px 8px 10px 8px;
  }

  .chrome {
    display: flex;
    flex-direction: row;
    padding: 9px 0 6px 0;

    span {
      width: 9px;
      height: 9px;
      margin-right: 4px;
      border-radius: 50%;
      background: limegreen;

      &.close {
        background: #FF3B30;
      }

      &.min {
        background: #F6A600;
      }
    }
  }

  img.icon {
    cursor: pointer;
    width: 96%;
    border-radius: 5px;
  }
}
</style>
