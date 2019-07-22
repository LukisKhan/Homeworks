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