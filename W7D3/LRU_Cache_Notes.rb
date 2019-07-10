
W7D3 Notes
I. Set: unique Objects, un-ordered, any types of Objects
    -Methods: 
    Possibility 1: use an Array of length [min to max]
        .include? -> O(1) make element == index,
                          simply make array[index] = T if element exist
        .insert   -> O(1) make array[index] = true
        .delete   -> O(1) make array[index] = false
    "Time complexity" is great O(1)
    "Space complexity" is abysmal O(range max - min)
    Possibility 2: use n 'buckets' and place each element % k into their buckets
        .include? -> O(n/k) -> O(n)
                      element % k , scan linearly thru that bucket
        .insert -> O(n/k) -> O(n)
        .delete -> O(n/k) -> O(n)
    Possibility 3: Make k grow by 1 as n grows by 1
        .insert   -> O(n) when n + 1 then k + 1
                         create 1 extra bucket, re-% every n elements
        .include? -> O(1)
        .delete   -> O(1) 
    Optimization 4: Make k grow by n; as n grows > k
        .insert   -> O(1) when n > k then k += n
                         create 1 extra bucket, re-% every n elements
        .include? -> O(1)
        .delete   -> O(1) 
    'Space complexity' is O(n)
    Pathological Input: {0, 2, 4, 8, 16, 32}
        a large numbers of elements will land in 0 bucket
        BigO for include, insert, delete will be O(n)
II. Hashing functions: 
    - deterministic (one input will ALWAYS result in the same output)
    - uniform distribution
    - one-way (output can not predict input and independent of input)
    - Examples of functions: CityHash, CRC32 (bittorrent), MurmurHash(ruby)
                             Cryptographic(MDS, SHA-2, Blowfish)
    - class Object def hash (every object has .hash)
III. Hash Set:
    {2, 4, 8, 16, "hello", "dolly"}
    mod: object.hash % n buckets
    - Optimized by preventing Pathological input and any object can be included
    .include? -> O(1) "worst case could be O(n)"
    .insert   -> O(1) "worst case could be O(n)"
    .delete   -> O(1) "worst case could be O(n)"
    'Space complexity' is O(n)
    can make Set in ruby by require 'set' and Set.new([ele1, ele2])
    -default .hash returns objectID.hash which will be different, 
        so redefine def ==() and def hash
IV. LinkedList
    A. singly-LinkedList: (@head) 3 -- 4 -- 5 -- nil (@tail)
        - transverse the list with @next
        - def initialize(val, next = nil) @val, @next = val, next
        - find O(n) push() O(1) unshift O(1)
    B. doubly-LinkedList add an @prev
        -  same time complexity as singly-LinkedList
V. HashMap - uses the hash set model of bucks and objID.hash % n
    - each bucket will be a doubly-LinkedList
    - key.hash % n into a LinkedList of |k,v| linked to |k2,v2| 
    hash[key]       (getter)    O(1)
    hash[key] = val (setter)    O(1)
VI. Caching 
    LRU - least recently used
    Cache size stores up to a capacity
    Heuristic is to delete the oldest accessed object to add new object
    HashMap is unordered so deletion/insertion is O(n) while read is O(1)
    LinkedList can be ordered using @head (earliest) -> @tail (oldest)
        - deletion/insertion is O(1) while read is O(n)
VII. LRU Cache
    combines HashMap and LinkedList data structures
    { 
        mario => Obj1       LL Obj1 <-> Obj2 <-> Obj3
        brower => Obj2
        goomba => Obj3
    }
    Ejection, Insertion, Read are all O(1)
VIII. Simple Hash Methods
h = {color: "black", font: "monaco"}
h.fetch(:fontsize, "12pt") #=> "12pt"
h.values_at(:color, :font) #=> ["black", "monaco"]