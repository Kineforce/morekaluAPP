export class Msg {
    public text_message: string;
    public sender: string;
    public date_msg: Date;

    constructor(){
        this.date_msg = new Date();
        this.sender = "";
        this.text_message = "";
    }

}
