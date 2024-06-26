Rails.application.routes.draw do
  
  devise_for :users

  resources :users  
  resources :books
  
  post 'books/search' => 'books#search', as: 'search'

  root to: "books#top"
  get 'home/about' => 'homes#about', as:"about"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
