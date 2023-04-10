/*                                  ObjectDestructuring                                   */

const MusicComposer={
 ComposerName : 'Hans Zimmer' ,
 FavBeat      :  'STAY'       ,
 Year         :  '1970s'      ,
 FamousSong   :  'HarryPotter'
}

// const FavBeat = MusicComposer.FavBeat
// const FamousSong = MusicComposer.FamousSong
// console.log(FavBeat,FamousSong )

// METHOD
const {FavBeat,FamousSong,...restinfo} = MusicComposer
console.log(FavBeat,FamousSong,restinfo)
console.log(FavBeat)
console.log(FamousSong)
console.log(restinfo)


