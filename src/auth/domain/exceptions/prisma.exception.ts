export class PrismaException {
    private error: any;

    constructor(error:any){
        this.error = error;
    }

    getError() {
        return this.error;
    }
}
