require 'sinatra'

get '/status' do
  {message: 'ok', status: 200}.to_json
end
