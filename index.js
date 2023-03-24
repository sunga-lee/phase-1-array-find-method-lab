function superbowlWin(record){
 let entry = record.find(function(element){
    
    return element.result === "W"

 })
 
 if(entry !== undefined)
   return entry.year

   return entry 
 
}



// / code your solution here
// indexOf()
// /find()
// filter()

// reduce()
// map()
// forEach()