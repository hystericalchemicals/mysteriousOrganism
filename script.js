// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};



// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,
    mutate() {      
      let i = Math.floor(Math.random() * 15);      
      currentBase = this.dna[i];
      var dnaBasesToModify = ['A', 'T', 'C', 'G'];
      let j = dnaBasesToModify.indexOf(currentBase);
      dnaBasesToModify.splice(j, 1);
      let k = Math.floor(Math.random() * 3);
      this.dna[i] = dnaBasesToModify[k];
      return this.dna;
    },
    compareDNA(pAequorObject) {
      let currentDna = this.dna;
      let comparisonDna = pAequorObject.dna;
      console.log(comparisonDna);
      console.log(currentDna);
      let commonBases = 0;
      for (q = 0; q < currentDna.length; q++){
        if (currentDna[q] === comparisonDna[q]){
          commonBases++;
        }
      }
      return Math.round(commonBases/this.dna.length*100);
    },
    willLikelySurvive() {
      let numberOfCOrG = 0;
      for (k = 0; k < this.dna.length; k++){        
        if (this.dna[k] === 'C' || this.dna[k] === 'G'){
          numberOfCOrG++;
        }
      }       
        if (numberOfCOrG/this.dna.length >= 0.6) {
          return true;
        } else {
          return false;
        }      
    },
    willLikelySurvive2(dnaSequence) {
      let numberOfCOrG2 = 0;
      for (b = 0; b < dnaSequence.length; b++){        
        if (dnaSequence[b] === 'C' || dnaSequence[b] === 'G'){
          numberOfCOrG2++;
        }
      }        
        if (numberOfCOrG2/dnaSequence.length >= 0.6) {
          return true;
        } else {
          return false;
        }      
    },
    genomeLibraryMaker() {
      let setOfGenomes = [];
      do {
        let newStrand = mockUpStrand();
        if (this.willLikelySurvive2(newStrand) === true){
          setOfGenomes.push(newStrand);
      }
     } while (setOfGenomes.length < 30);
     for (p = 0; p < setOfGenomes.length; p ++){
      console.log(setOfGenomes[p]);
     }
    },
    complementaryStrandFinder() {
      let complementaryStrand = [];      
      this.dna.forEach (x => {
        if (x === 'A'){
          complementaryStrand.push('T');
        } else if (x === 'T'){
          complementaryStrand.push('A');
        } else if (x === 'C'){
          complementaryStrand.push('G');
        } else if (x === 'G'){
          complementaryStrand.push('C');
        }
      })
      return complementaryStrand;
    }   
  }  
};


//misc test objects / variables 

const testPAequorObject = {
  specimenNum: 2,
  dna: ['T', 'T', 'G', 'T', 'A', 'T', 'T', 'A', 'G', 'T', 'G', 'T', 'T', 'T', 'C']
}

const testPAequorObject2 = {
  specimenNum: 3,
  dna: mockUpStrand()
}

const randomStrand1 = ['A', 'C', 'C', 'C', 'A', 'C', 'A', 'G', 'G', 'G', 'C', 'C', 'T', 'C', 'G']
const randomStrand2 = mockUpStrand();
const test = pAequorFactory(1, randomStrand2);

console.log(test.complementaryStrandFinder());
