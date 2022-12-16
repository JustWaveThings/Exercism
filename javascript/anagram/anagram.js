
export const findAnagrams = (target, candidates) => {
  let targetLC = target.toLowerCase()
  let candidatesLC = candidates.map((word) => word.toLowerCase());

  candidatesLC.forEach((word) => {
     if (word === targetLC || word.length !== targetLC.length) {candidatesLC.splice(candidatesLC.indexOf(word), 1)}
    
  })
  return candidatesLC
};
