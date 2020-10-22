export default {
    name: 'edit',
    data() {
        return {
            groups: [],
            form: {
                props: [],
                skus: []
            },
            skuColumn: [],
        };
    },
    // 一个对象，键是需要观察的表达式，值是对应回调函数。
    watch: {
        'form.props'() {
            this.getSelectProp();
        }
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.update();
            this.handleTable();
        },
        // 用于更新一些数据
        async update() {

            let groups = [
                ['颜色', ['黑', '白', '红']],
                ['尺寸', ['xs', 'sm', 'lg']],
                ['材质', ['金', '木', '水']],
                ['服务', ['3年保修', '5年质保', '10年换休']],
            ];

            this.groups = groups.map(group => {
                let groupId = this.$getRandom(32);
                return {
                    id: groupId,
                    name: group[0],
                    props: group[1].map(prop => {
                        return {
                            id: this.$getRandom(32),
                            parent_id: groupId,
                            name: prop,
                        }
                    })
                }
            })
        },
        getSelectProp() {

            // this.form.props;
            let groups = JSON.parse(JSON.stringify(this.groups));

            groups = groups.filter(group => {
                group.props = group.props.filter(prop => this.form.props.indexOf(prop.id) >= 0);
                return group.props.length > 0;
            });
            this.skuColumn = groups.map(g => g.name);

            let props = groups.map(g => g.props.map(p => p.name));

            props.forEach(prop => {
                console.warn(prop.join('\t'));
            });

            let test = props.reduce((a, b) => {
                console.warn('a', a);
                console.warn('b', b);
                let ret = [];
                a.forEach((a) => {
                    b.forEach((b) => {
                        ret.push(a.concat([b]));
                    });
                });
                return ret;
            }, [[]]);
            test.forEach(el => {
                console.warn(el.join('\t'));
            });


            let skus = test.map(el => {
                return {
                    id: el.join(''),
                    sku_id: el.join(''),
                    price: 0,
                    props: el.map(el => ({
                        name: '',
                        value: el
                    })),
                }
            });

            console.warn(skus);

            this.form.skus = skus;
            // this.handleTable();
        },

        handleTable() {
            if (this.form.skus.length > 0) {
                this.skuColumn = this.form.skus[0].props.map(el => el.name);
            } else {
                this.skuColumn = [];
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

    // 组件列表
    components: {},
};
