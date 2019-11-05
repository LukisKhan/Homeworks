class Node {
    constructor(){
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
   constructor(){
       this.root = new Node ();
   }

   insertRecur(word, root = this.root){
        let letter = word[0]

       if (!(letter in root.children)) {
           root.children[letter] = new Node();
       }

       if (word.length === 1){
           root.children[letter].isTerminal = true;
       } else {
           this.insertRecur(word.slice(1), root.children[letter])
       }
   }
   
   insertIter(word){
       let letter
       let root = this.root
       let wordSlice = word

       while (wordSlice.length > 0){
           letter = wordSlice[0]
            if (!(letter in root.children)) {
                root.children[letter] = new Node();
            }
            // if (wordSlice.length === 1) {
            //     root.children[letter].isTerminal = true;
            // }
            wordSlice = wordSlice.slice(1)
            root = root.children[letter]
       }
       root.isTerminal = true;
   }
   searchRecur(word, root = this.root){
        if(word.length === 0 && root.isTerminal) return true;
        let letter = word[0]
        if(letter in root.children){
            return this.searchRecur(word.slice(1), root.children[letter])
        } else {
            return false;
        }
   }


   searchIter(word){
        let letter;
        let root = this.root;
        
        while(word.length) {
            letter = word[0]
            if(letter in root.children) {
                root = root.children[letter];
                word = word.slice(1);
            } else {
                return false;
            }
        }
        if(word.length === 0 && root.isTerminal) return true
        return false;
   }

    wordsWithPrefix(prefix, root = this.root){
        console.log("prefix", prefix)
        if(prefix.length === 0) {
            let result = [];
            if(root.isTerminal) result.push('')
            for (let letter in root.children){
                let child = root.children[letter]
                let suffixes = this.wordsWithPrefix(prefix, child)
                console.log("suffixes", suffixes)
                let words = suffixes.map(suffix => letter + suffix);
                result.push(...words);
            }
            return result;
        } else {
            let firstLetter = prefix[0];
            let child = root.children[firstLetter];
            if(child === undefined) {
                return [];
            } else {
                let suffixes = this.wordsWithPrefix(prefix.slice(1), child);
                let words = suffixes.map(suffix => firstLetter + suffix);
                return words;
            }
        }
   }
}

module.exports = {
    Node,
    Trie
};