<template>
  <div id="table">
    <el-card shadow="never">
      <el-card shadow="never">
        <el-table row-key="id" :data="list" border style="width: 100%">
          <el-table-column width="55" align="center">
            <template slot-scope="scope">
              <el-checkbox
                @change="(v)=>change1(v,scope.row)"
                :checked="selectList.indexOf(scope.row.id)>=0"
              ></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column prop="id" label="id"></el-table-column>
        </el-table>
        <div style="padding:10px 0">
          <el-pagination
            :current-page.sync="page"
            :page-size.sync="size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </el-card>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>