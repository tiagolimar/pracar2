const format = n => `${n}`.padStart(2,"0");

export function getDate(){
    const today = new Date();
    const day = format(today.getDate());
    const month = format(+today.getMonth()+1);
    const year = today.getFullYear();
    return `${year}-${month}-${day}`
}