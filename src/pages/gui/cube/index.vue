<template>
  <div id="cube">
    <div class="studio-view">
      <div class="cube-group" v-for="group in groups" :key="group.id">
        <div class="cube-node" v-for="node in group.nodes" :key="node.id" @click="show(group,node)">
          <img :src="node.config.img" v-if="node.config.img" />
          <div class="del" @click.stop="delNode(group,node)">
            <i class="el-icon-delete"></i>
          </div>
        </div>
        <div class="tool">
          <div class="tool-item" @click.stop="addNode(group)">
            <i class="el-icon-circle-plus-outline"></i>
          </div>
          <div class="tool-item" @click.stop="delGruop(group)">
            <i class="el-icon-delete"></i>
          </div>
        </div>
      </div>
      <div class="text-center" style="padding:10px">
        <el-button @click="addGroup()">addGroup</el-button>
      </div>
    </div>
    <el-drawer :modal="false" title="节点配置" :visible.sync="isShow" :before-close="nodeClose()">
      <div style="padding:20px" v-if="activeNode">
        <span class="text-info" style="font-size:12px">{{activeNode.id}}</span>
        <el-form label-position="top">
          <el-form-item label="img">
            <el-upload
              drag
              class="upload-demo"
              action
              :show-file-list="false"
              :before-upload="beforeUpload"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
              </div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>