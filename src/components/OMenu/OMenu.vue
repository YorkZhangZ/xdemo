<template>
  <el-menu router class="o-menu" background-color="#fff" text-color="#333">
    <el-submenu index="demo">
      <template slot="title">
        <span>demo</span>
      </template>
      <el-menu-item index="/demo/table" :route="{path:'/demo/table'}">table</el-menu-item>
      <el-menu-item index="/demo/goods/edit" :route="{path:'/demo/goods/edit'}">Goods Edit</el-menu-item>
    </el-submenu>

    <el-submenu index="gui">
      <template slot="title">
        <span>gui</span>
      </template>
      <el-menu-item index="/gui/cube" :route="{path:'/gui/cube'}">cube</el-menu-item>
      <el-menu-item index="/gui/form" :route="{path:'/gui/form'}">form</el-menu-item>
      <el-menu-item index="/gui/oa/node" :route="{path:'/gui/oa/node'}">oa node</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script src="./OMenu.js"></script>
<style lang="scss" scoped>
@import "OMenu.scss";
</style>