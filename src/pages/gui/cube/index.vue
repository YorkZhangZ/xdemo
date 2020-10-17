<template>
  <div id="cube">
    <div class="studio-view">
      <div>
        <el-switch v-model="isBorder"></el-switch>
        <span style="font-size:14px">模式：{{isBorder?'预览':'开发'}}</span>
      </div>
      <div :class="['cube-group',{'border':isBorder}]" v-for="group in groups" :key="group.id">
        <div class="cube-node" v-for="node in group.nodes" :key="node.id" @click="show(group,node)">
          <img :src="node.config.img" v-if="node.config.img" />
          <div v-else class="cube-node-text">点击以配置节点</div>
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
        <el-form label-position="right" label-width="80px">
          <el-form-item label="id">
            <span class="text-info" style="font-size:12px">{{activeNode.id}}</span>
          </el-form-item>
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
          <el-form-item label="触发事件">
            <el-select v-model="activeNode.config.event.model">
              <el-option label="路由跳转" value="router"></el-option>
              <el-option label="跳转url" value="url"></el-option>
              <el-option label="添加购物车" value="addBag"></el-option>
              <el-option label="自定义脚本" value="script"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="路由跳转" v-if="activeNode.config.event.model=='router'">
            <el-select v-model="activeNode.config.event.router.path">
              <el-option label="搜索页" value="/search"></el-option>
              <el-option label="品牌馆" value="/brand"></el-option>
              <el-option label="商品详情" value="/goods"></el-option>
              <el-option label="商品组" value="/goodsGroup"></el-option>
              <el-option label="自定义" value="other"></el-option>
            </el-select>
            <el-input
              style="margin-top:10px"
              v-if="activeNode.config.event.router.path=='other'"
              v-model="activeNode.config.event.router.other"
              placeholder="请输入受支持的路由"
            ></el-input>
            <el-button v-if="activeNode.config.event.router.path=='/goods'">选择商品</el-button>
          </el-form-item>
          <el-form-item label="跳转url" v-if="activeNode.config.event.model=='url'">
            <el-input v-model="activeNode.config.event.url.path" placeholder="请输入要跳转的地址">
              <template slot="prepend">Http://</template>
            </el-input>
          </el-form-item>
          <el-form-item label="购物车" v-if="activeNode.config.event.model=='addBag'">
            <el-button>选择商品及属性</el-button>
          </el-form-item>

          <el-form-item label="脚本" v-if="activeNode.config.event.model=='script'">
            <code-edit v-model="activeNode.config.event.script.value"></code-edit>
            <pre>{{activeNode.config.event.script.value}}</pre>
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