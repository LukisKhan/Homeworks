MVC model:
Client askes a question(request) using a Brower
Request is sent to a Rails Router that sends the request to the right Rails controller
Rails controller completes the request and sends back a response
Brower is on the client side / everything else is on Server side
REST convention:
    GET request/method
    POST
    PATCH/PUT 
    DELETE
Required: Requested URL path, Request Method, Status Code
    - GET request can not have a body, can only have a header
www.google.com/this_is_the_path/multiple_things?key1=val1&key2=val2
    -url/path?query_string

Step 1: getting bleats using requests
routes.rb file in config directory
    get "/bleats", to: "bleats#index"
                        #bleats controller, #index action
Step 2: make the class to process the action
# class ApplicationController < ActionController::Base
class BleatsController < ApplicationController
    def index
        self.render plain: "Hello World!"
    end
end
Step 3: tell rails to accept request
    call command in terminal
    bundle exec rails db:reset
    bundle exec rails server
Step 4: go to 0.0.0.0:3000 and localhost:3000/bleats
        #tcp://0.0.0.0:3000
        #localhost:3000
        self is a BleatsController, can use self.response, self.request
    can drop a debugger and load it by refreshing page
Step 5: get better error gems in the group :development do block
    gem 'better_errors'
    gem 'binding_of_caller'
Step 6: sending data as JSON (java hash-like objects uses strings as key-val pair)
    render json "{\"tommy\": \"hello\"}"
    render json '{"tommy": "hello"}'
    or render bleats
    bleats = Bleats.all
    render json: bleats
    #this will send SELECT * FROM bleats 
    #this results will be parsed to json
    #using the rails Model Bleats
Step 7: exposing a single bleat
    Rails.application.routes.draw do
        get "/bleats/:id", to: "bleats#show"
    end
    class BleatsController
        def index
            bleats = Bleats.all
        end
        def show
            bleat = Bleat.find(params[:id])
            render json: bleat
            #params shows the  paramaters of self.params
            #params is a hash with indifferent access, can use "id" or :id
            #SELECT "bleats".* FROM "bleats" WHERE "bleats"."id" = 3
        end
    localhost:3000/bleats/5?key1=tommy&key2-mashu
    Parameter: { "key1" => "tommy", "key2" => "mashu", "id" => "5"}