export default class Pipe {
    pipes = [];
    index = -1;
    ctx = null;
    /**
     * Pipe管道类，初始化的时候传入管道
     * @param {Array<String>|Array<Function>|String|Function} pipe 
     */
    constructor(pipe) {
        this.pipe(pipe);
    }
    async run(ctx) {
        this.ctx = ctx;
        return await this.next(ctx);
    }
    async next(ctx, request) {
        this.index++;
        if (this.index >= this.pipes.length) {
            this.index = -1;
            this.ctx = null;
            return request;
        }
        return this.pipes[this.index](ctx, (req) => this.next(ctx, req));
    }
    pipe(pipe) {
        if (typeof pipe == 'string') {
            this.pipes.push(eval(pipe));
            return;
        }
        if (Array.isArray(pipe)) {
            pipe.forEach(el => this.pipe(el));
            return;
        }
        this.pipes.push(pipe);
    }
}