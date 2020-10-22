<template>
  <div id="node">
    <div class="view">
      <div class="gui" id="studio"></div>
      <div class="node-list">
        <div class="node" v-for="node in nodes" :key="node.id" :id="`node${node.id}`">
          <div class="num">No.{{node.id}}</div>
          <div class="node-name">{{node.name}}</div>
          <div class="pin-list">
            <div class="pin-item" v-for="pin in node.pins" :key="pin.id">
              <a :href="`#node${pin.targetId}`">
                <i class="el-icon-link"></i>
                <span class="pin-id">No.{{pin.targetId}}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>