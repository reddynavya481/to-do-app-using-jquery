
const fs=require('fs')
const path="D:/Right"
function Readpath(path,s)
{
const ca=fs.readdir(path,(err,items)=>
{
    if(items==undefined){
    return}
    for(var i=0;i<items.length;i++)
    {
        if(items[i].isDirectory)
        {
            console.log(indent(s)+items[i])   
        }
        else
        {
        Readpath(""+DirectoryIncrement(path,items[i]),s*3)
        console.log(indent(s)+items[i])   
        }
}})
}
Readpath("D:/Right",1)
function indent(i,msg){
    let space = '';
    for(let ind = 0; ind<i ; ind++){
        space = space + ' ';
    }
    return space;
}
function DirectoryIncrement(current,next){
    current = current+'/'+next
    return current
}