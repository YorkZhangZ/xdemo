export default {
    name: 'node',
    data() {
        return {
            nodes: []
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.update();
        },
        // 用于更新一些数据
        async update() {

            let nodes = new Array(20).fill('').map((el, i) => this.getNode(i));
            nodes.forEach(el => {
                el.pins = [
                    this.getPin(1, 10),
                    this.getPin(2, 11),
                ];
            })
            this.nodes = nodes;

            // this.initGUI();

        },
        // studio
        initGUI() {
            let elem = document.getElementById('studio');
            let params = { width: 285, height: 200 };
            let two = new Two(params).appendTo(elem);

            two.makePath(10, 10, 20, 20, 30, 30);

            two.update();
        },
        getNode(id = this.$getNumber()) {
            return {
                id: id,
                name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                pins: []
            }
        },
        getPin(id = this.$getNumber(), targetId = '') {
            return {
                id: id,
                name: 'pin',
                targetId: targetId,//对应的流程id
                condition: [
                    {
                        form: '1',
                        field: 'name',
                    }
                ],//进行下一步的条件
            }
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