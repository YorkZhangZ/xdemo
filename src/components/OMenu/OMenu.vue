<template>
  <el-menu router class="o-menu" background-color="#fff" text-color="#333">
    <el-menu-item index="/demo/table" :route="{path:'/demo/table'}">demo</el-menu-item>
    <el-menu-item index="/gui/cube" :route="{path:'/gui/cube'}">cube</el-menu-item>
    <el-menu-item index="/gui/form" :route="{path:'/gui/form'}">form</el-menu-item>
  </el-menu>
</template>
<script src="./OMenu.js"></script>
<style lang="scss" scoped>
@import "OMenu.scss";
</style>