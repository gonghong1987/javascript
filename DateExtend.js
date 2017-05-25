Date.prototype.format = function(pattern){
    function zeroize(num){
        return num<10?"0"+num:num;
    };
    var pattern = pattern;    //    YYYY-MM-DD 或 MM-DD-YYYY 或 YYYY-MM-DD , hh : mm : ss
    var dateObj = {
        "Y" : this.getFullYear(),
        "M" : zeroize(this.getMonth()+1),
        "D" : zeroize(this.getDate()),
        "h" : zeroize(this.getHours()),
        "m" : zeroize(this.getMinutes()),
        "s" : zeroize(this.getSeconds())
    };
    return pattern.replace(/YYYY|MM|DD|hh|mm|ss/g,function(match){
        switch(match){
            case "YYYY" :
                return dateObj.Y;
            case "MM" :
                return dateObj.M;
            case "DD" :
                return dateObj.D;
            case "hh" :
                return dateObj.h;
            case "mm" :
                return dateObj.m;
            case "ss" :
                return dateObj.s;
        };
    });
};
Date.prototype.past = function(pattern,pastDays){
    function zeroize(num){
        return num<10?"0"+num:num;
    };
    var pastday = new Date((this - 0) - 1000*60*60*24*pastDays);
    var pattern = pattern;    //    YYYY-MM-DD 或 MM-DD-YYYY 或 YYYY-MM-DD , hh : mm : ss
    var dateObj = {
        "Y" : pastday.getFullYear(),
        "M" : zeroize(pastday.getMonth()+1),
        "D" : zeroize(pastday.getDate()),
        "h" : zeroize(pastday.getHours()),
        "m" : zeroize(pastday.getMinutes()),
        "s" : zeroize(pastday.getSeconds())
    };
    return pattern.replace(/YYYY|MM|DD|hh|mm|ss/g,function(match){
        switch(match){
            case "YYYY" :
                return dateObj.Y;
            case "MM" :
                return dateObj.M;
            case "DD" :
                return dateObj.D;
            case "hh" :
                return dateObj.h;
            case "mm" :
                return dateObj.m;
            case "ss" :
                return dateObj.s;
        };
    });
};
Date.prototype.yestoday = function(pattern){
    return this.past(pattern,1);
};
Date.prototype.tomorrow = function(pattern){
    return this.past(pattern,-1);
}
Date.prototype.formatDate=function(str){
    str= str.toLowerCase();
    var that=this;

    if(/yyyy/.test(str)){
        str=str.replace(/yyyy/,this.getFullYear());
    }
    if(/mm/.test(str)){
        str=str.replace(/mm/,this.getMonth()+1);
    }
    if(/dd/.test(str)){
        str=str.replace(/dd/,this.getDate());
    }
    if(/hh/.test(str)){
        str=str.replace(/hh/,function(){
            return that.getHours()>=10?that.getHours():("0"+that.getHours());
        });
    }
    if(/ii/.test(str)){
        str=str.replace( /ii/,function(){
            return that.getMinutes()>=10?that.getMinutes():("0"+that.getMinutes());
        });
    }
    if(/ss/.test(str)){
        str=str.replace( /ss/,function(){
            return that.getSeconds()>=10?that.getSeconds():("0"+that.getSeconds());
        });
    }
    if(/week/.test(str)){
        if(this.getDay()==0){
            str=str.replace(/week/,'星期日' );
        }
        if(this.getDay()==1){
            str=str.replace(/week/,'星期一' );
        }
        if(this.getDay()==2){
            str=str.replace(/week/,'星期二' );
        }
        if(this.getDay()==3){
            str=str.replace(/week/,'星期三' );
        }
        if(this.getDay()==4){
            str=str.replace(/week/,'星期四' );
        }
        if(this.getDay()==5){
            str=str.replace(/week/,'星期五' );
        }
        if(this.getDay()==6){
            str=str.replace(/week/,'星期六' );
        }
    }
    return str
}