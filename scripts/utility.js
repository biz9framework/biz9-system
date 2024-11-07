export const biz9_validate_email=(email)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export const biz9_get_money=(n)=>{
    n = parseFloat(n);
    if(!n || isNaN(n)){
        n = 0;
    }
    return "$" + n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}
export const biz9_get_id=(max)=>{
        if(!max){
            max = 99999;
        }
        var r=Math.floor(Math.random()*max)+1;
        return r.toString();
}
export const biz9_get_string=(text)=>{
    return text + Math.floor((Math.random() * 100000) + 1);
}
export const biz9_get_long_string=()=>{
    return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
}
export const biz9_get_random_amount=()=>{
    return ((Math.random() * 1000) + 1).toFixed(2);
}
export const biz9_get_date=()=>{
    return (new Date()).toISOString().substring(0, 10) ;
}
export const biz9_generate_valid_card=()=>{
    var cardNumber = generate(bin, length),
        luhnValid  = luhnChk(cardNumber),
        limit      = 20,
        counter   = 0;

    while (!luhnValid) {
        cardNumber = generate(bin, length);
        luhnValid  = luhnChk(cardNumber);
        counter++;

        if (counter === limit) {
            cardNumber = (luhnValid) ? cardNumber : 'cannot make valid card with given params'
            break;
        }
    }
    return cardNumber;
}
export const biz9_capatilze_first_letter=(str)=>{
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}
export const biz9_get_youtube_link=(link)=>{
    r_link = link.replace("https://youtu.be/", "https://www.youtube.com/embed/");
    return r_link.split( '&' )[0];
}
export const biz9_get_title_url=(title)=>{
    return title.replace(/[^a-z0-9]+/ig, "_").toLowerCase();
}
export const biz9_truncate_str=(str,n)=>{
        return (str.length > n) ? str.slice(0, n-1) + '&hellip;' : str;
}
export const biz9_get_textbox_date=(date)=>{
        dt=new Date(date);
        full_dt = new Date(String(dt.getFullYear()),String(dt.getDate()+1), String(dt.getMonth()+1));
        day = ("0" + full_dt.getDate()).slice(-2);
        month = ("0" + (full_dt.getMonth())).slice(-2);
        return dt.getFullYear() + "-" + day + "-" + month;
}
