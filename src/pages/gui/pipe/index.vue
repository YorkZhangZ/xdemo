<template>
  <div id="pipe">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <div class="button" @click="runPipe">button</div>
          <p>{{msg}}{{count}}</p>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div v-for="comp in components" :key="comp.id">
            <code-edit v-model="comp.script"></code-edit>
          </div>
          <el-button @click="addComponent">添加组件</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>