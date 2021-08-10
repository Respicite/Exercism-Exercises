const Translation = {
      'AUG': 'Methionine',
      'UUU': 'Phenylalanine',
      'UUC': 'Phenylalanine',
      'UUA': 'Leucine',
      'UUG': 'Leucine',
      'UCU': 'Serine',
      'UCC': 'Serine',
      'UCA': 'Serine',
      'UCG': 'Serine',
      'UAU': 'Tyrosine',
      'UAC': 'Tyrosine',
      'UGU': 'Cysteine',
      'UGC': 'Cysteine',
      'UGG': 'Tryptophan',
      'UAA': 'STOP',
      'UAG': 'STOP',
      'UGA': 'STOP'
}

export const translate = (rna) => {
    let result = []
    if(!rna) return result

    for(let i=0; rna.length - i >= 3; i += 3){
      let protein = rna.slice(i, i+3)
      const translation = Translation[protein]
      if(translation === 'STOP') return result

      if(!translation) throw new Error('Invalid codon')

      result.push(translation)
    }

    if(!((rna.length % 3) === 0)) throw new Error('Invalid codon'); else return result
}


