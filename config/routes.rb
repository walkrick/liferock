Rails.application.routes.draw do
 root "rock#show"
  get "/rock" => "rock#rock"
  get "/lame_ass" => "rock#lame"
end
