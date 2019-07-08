
class WhatIsSelf
  def test
    puts "At the instance level, self is #{self}"
  end
  def self.test
    puts "At the class level, self is #{self}"

  end
end
me = WhatIsSelf.new
"At the class level, self is <WhatIsSelf... obj sadfsd>"
WhatIsSelf.test
"At the class level, self is WhatIsSelf"

class JukeBox
  def initialize(playlist)
    @playlist = playlist
    @queue = []
  end


  def auto_play
    @playlist.ffrsttt...lppppppppppppppp  
  
  def select_song(index)
    @playlist[index].play
    @playlist.shift
  end

  def random_song
    @playlist.sample.play
    @playlist.shift
  end

  def next_song
    @playlist[@playlist.index(@current_song)+ 1].play
    @playlist.shift
  end

  d

  
  

end

class Song
  def initialize(artist, title, genre)
    @artist, @title, @genre = artist, title, genre
  end

  def play
    playthesong
  end


end

class Playlist
  attr_accessor :songs
  def initialize(songs)
    @songs = songs
  end

  def push_song(song)
    @songs << song
  end

  def insert_song(song,idx)
    @songs.insert(song,idx)
  end

  def shuffle_songs
    @songs.shuffle
  end

  def remove_song
    songs.shift
  end

  
end


n1 = Node.new(1) making a node with a value of 1
n1.bfs(1) 


def bfs(target=nil)
  raise 'We need at least a target or a proc' if (target.nil && prc.nil)
  prc ||= Proc.new { |a| a.value == target}
  found = false
  queue = [self]
  until queue.empty?
    current = queue.shift #deque
    # # if kiddiesprc.call # {|node| node.value == target}
    #   return target
    # else
    # end
    # kiddies = current.children #deque
    return target if prc.call(current)
    queue.concat(kiddies) #queue
  end
  
end






end