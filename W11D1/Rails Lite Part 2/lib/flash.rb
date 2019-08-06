require 'json'

class Flash #< Hash
    attr_reader :flash

    def initialize(req)
        
        @req = req
        @flash = {}
        
    end

    def [](key)

        flash_cookie = @req.cookies['_rails_lite_app_flash']
  
        if flash_cookie
            @flash = JSON.parse(flash_cookie)
        end 

        if key.is_a?(String)
            @flash[key] 
        else
            @flash[key.to_s] 
        end
    end 
    
    def []=(key, value)
        
        @flash[key] = value
        
    end

    def store_flash(res)
        # @flash['_rails_lite_app'] = @req.cookies 
        cookie= @req.cookies['_rails_lite_app_flash']
        if cookie 
            @flash = JSON.parse(cookie)
        end 
        hash = { path: "/" , value: @flash }   #   '{ value: {"first_key"=>"first_val"}}'
        res.set_cookie(:_rails_lite_app_flash, hash.to_json)
        # cookie_val = cookie['_rails_lite_app_flash']
                    #   '{"first_key"=>"first_val"}'

    end 

    def now


    end 

end
