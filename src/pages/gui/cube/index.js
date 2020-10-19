export default {
    name: 'cube',
    data() {
        return {
            groups: [],
            isShow: false,
            activeNode: null,
            activeGroup: null,
            isBorder: true,
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.update();
        },
        // 用于更新一些数据
        async update() {
            this.addGroup();
            // this.show(this.groups[0], this.groups[0].nodes[0]);
        },
        show(group, node) {
            this.isShow = true;
            this.activeNode = node;
            this.activeGroup = node;
        },
        beforeUpload(file) {
            let a = new FileReader();
            a.readAsDataURL(file);
            a.onload = (f) => {
                this.activeNode.config.img = f.target.result
            }

            return false;
        },
        addNode(group) {
            group.nodes.push(this.getNode(group));
        },
        delNode(group, node) {
            if (group.nodes.length > 1) {
                group.nodes = group.nodes.filter(el => el.id != node.id);
            } else {
                this.$message.info('必须保留一个');
            }
        },
        addGroup() {
            let group = this.getGroup();
            group.nodes.push(this.getNode(group));
            group.nodes.push(this.getNode(group));
            group.nodes.push(this.getNode(group));
            group.nodes.push(this.getNode(group));
            this.groups.push(group);
        },
        delGruop(group) {
            if (this.groups.length > 1) {
                this.groups = this.groups.filter(el => el.id != group.id);
            } else {
                this.$message.info('必须保留一个');
            }
        },
        getGroup() {
            return {
                id: this.$getRandom(10),
                style: {},
                nodes: []
            }
        },
        getNode(group) {
            return {
                id: this.$getRandom(10),
                parentId: group.id,
                config: {
                    style: {},
                    img: '',
                    event: {
                        model: '',
                        router: {
                            path: '',
                            other: ''
                        },
                        url: {
                            path: '',
                        },
                        script: {
                            value: '//在这里输入脚本',
                        }
                    }
                },
            }
        },
        nodeClose() {

        }
    },
    // 计算属性
    computed: {},
    // 包含 Vue 实例可用过滤器的哈希表。
    filters: {},
    // 在实例创建完成后被立即调用
    created() { },
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    beforeMount() { },
    // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
    mounted() {
        this.init();
        this.$nextTick(() => { });
    },
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
    beforeUpdate() { },
    // keep-alive 组件激活时调用。
    activated() { },
    // keep-alive 组件停用时调用。
    deactivated() { },
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy() { },
    //Vue 实例销毁后调用。
    destroyed() { },
    // 当捕获一个来自子孙组件的错误时被调用。
    errorCaptured() { },
    // 包含 Vue 实例可用指令的哈希表。
    directives: {},
    // 一个对象，键是需要观察的表达式，值是对应回调函数。
    watch: {},
    // 组件列表
    components: {},
};