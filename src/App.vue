<template>
  <div class="bg-[url(@/assets/bg2.jpg)] w-screen h-screen @container">
    <div class="@md:w-[1120px] ml-auto mr-auto">
      <h1 class="text-center text-[48px] pt-[20px]">三角洲行动随机器</h1>
      <div class="flex">
        <div class="flex flex-col w-[120px]">
          <div class="w-[120px] h-[120px] border-[1px]" alt="头盔">头盔<br />{{store.getters.rand('头盔')}}</div>
          <div class="w-[120px] h-[120px] border-[1px]" alt="护甲">护甲<br />{{store.getters.rand('护甲')}}</div>
          <div class="w-[120px] h-[120px] border-[1px]" alt="胸挂">胸挂<br />{{store.getters.rand('胸挂')}}</div>
          <div class="w-[120px] h-[120px] border-[1px]" alt="背包">背包<br />{{store.getters.rand('背包')}}</div>
          <div class="w-[120px] h-[120px] border-[1px]" alt="枪械">枪械<br />{{store.getters.rand('枪械')}}</div>
        </div>
        <div class="flex-auto flex">
          <Button class="self-center" label="Submit" icon="pi pi-search" iconPos="top" />
        </div>
        <div class="flex flex-col w-[120px]">
          <div class="w-[120px] h-[120px] border-[1px]" alt="地图">地图<br />{{store.getters.rand('地图')}}</div>
          <div class="w-[120px] h-[120px] border-[1px]" alt="干员">干员<br />{{store.getters.rand('干员')}}</div>
          <div class="w-[120px] h-[120px] border-[1px]" alt="子弹">子弹<br />{{store.getters.rand('子弹')}}</div>
          <div class="w-[120px] h-[120px] border-[1px]" alt="任务">任务<br />{{store.getters.rand('任务')}}</div>
          <div class="w-[120px] h-[120px] border-[1px]" alt="撤离">撤离<br />{{store.getters.rand('撤离')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()
</script>

<style scoped>
</style>
