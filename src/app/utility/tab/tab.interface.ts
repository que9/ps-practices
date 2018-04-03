export interface Tab {
    title:string; 
    active?:boolean;
    styles?:Array<string>
}


export class TabCreator {
    static create(
        title:string,
        active:boolean = false,
        styles:Array<string> = []
    ):Tab {
        return {title,active,styles};
    }
}