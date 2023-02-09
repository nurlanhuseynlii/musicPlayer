class MusicPlayer {
    constructor(musciList){
        this.musciList = musciList;
        this.index = 0;
    }

    getMusic(){
        return this.musciList[this.index];
    }

    next(){
        if(this.index +1 != this.musciList.length){
            this.index ++;
        }else{
            this.index = 0
        }

        
    }


    previous(){
        if(this.index != 0){
            this.index --
        }else{
            this.index = this.musciList.length -1;
        }
    }
}