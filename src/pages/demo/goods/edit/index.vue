<template>
  <div id="edit">
    <el-card shadow="never">
      <el-alert title="介绍" type="info" description="主要功能包括：商品属性配置、商品sku配置" show-icon></el-alert>
      <el-form label-width="80px">
        <el-form-item label="属性">
          <el-checkbox-group v-model="form.props">
            <div class="prop-group" v-for="group in groups" :key="group.id">
              <div class="prop-group-title">{{group.name}}</div>
              <el-row :gutter="20">
                <div class="prop-list">
                  <el-col :span="3" v-for="prop in group.props" :key="prop.id">
                    <div class="prop-item">
                      <el-checkbox :label="prop.id">{{prop.name}}</el-checkbox>
                    </div>
                  </el-col>
                </div>
              </el-row>
            </div>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <el-table :data="form.skus" row-key="id">
        <el-table-column label="规格" align="center">
          <el-table-column
            v-for="(prop,i) in skuColumn"
            align="center"
            :key="i"
            :label="prop"
            :prop="`props[${i}].value`"
          ></el-table-column>
        </el-table-column>

        <el-table-column width="100" label="价格">
          <template slot-scope="scope">
            <el-input v-model="scope.row.price"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>