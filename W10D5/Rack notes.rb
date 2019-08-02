require 'rack'

# most_basic_app = Proc.new do 
#     puts "got a request!"
#     [
#         '200',
#         {'Content-Type' => 'text/html'},
#         ['This is the most basic rack app,']
#     ]
# end

# cookie_party_app = Proc.new do |env|
#     req = Rack::Request.new(env)
#     res = Rack::Response.new
#     res.write("<h1>COOKIE PARTAY</h1>")
#     if req.cookies["cookie_party"]
#         res.write("<h2>We have cookies!</h2>")
#     else
#         res.write("<h2>We have not cookies!</h2>")
#     end
#     res.set_cookie("cookie_party", {value: true})
#     res.finish
# end

# Rack::Server.start(
#     app: cookie_party_app, 
#     Port: 3002
#     )

class FunApp
    def self.call(eanv)
        req = Rack::Request.new(eanv)
        res = Rack::Response.new
        res.status = '200'
        res['Content-Type'] = 'text/html'
        if req.path == '/cat'
            res.write('Hi cat')
        elsif req.path == '/dog'
            res.write('Hi doge')
        else
            res.status = '404'
            res.write ("404! I don't have what youre loing for")
        end
        res.finish
    end
end

Rack::Server.start(
    app: FunApp,
    Port: 3000
)
