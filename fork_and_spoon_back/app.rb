require 'sinatra'

get '/' do
  {message: 'ok', status: 200}.to_json
end
