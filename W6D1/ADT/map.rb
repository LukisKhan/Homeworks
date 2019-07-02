class Map
    def initialize
        @key_val_pairs = [[]]
    end

    def set(key, val)
        loc = key_val_pairs.index ( [key,val] )
        if loc
            key_val_pairs[loc][1] = value
        else
            key_val_pairs.push([key,val])
        end
    end

    def get(key)
        loc = key_val_pairs.index { |pair| pair[0] == key}
        loc ? key_val_pairs[loc][1] : nil
    end

    def delete(key)
        loc = key_val_pairs.index { |pair| pair[0] == key}
        key_val_pairs.delete(key_val_pairs[loc])
        loc
    end
    def show
        key_val_pairs
    end
    private

    attr_reader :key_val_pairs
end