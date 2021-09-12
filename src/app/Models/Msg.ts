export class Msg {
    public id?: number;
    public text_message: string;
    public sender: string;
    public date_msg: Date;
    public color: string;

    constructor(){
        this.date_msg = new Date();
        this.sender = "";
        this.text_message = "";
        this.color = "black";
    }

}
