Rails.application.routes.draw do
  
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions',
    passwords: 'users/passwords'
  }
  
  resources :users  
  resources :books
  root to: "books#top"
  get 'home/about' => 'homes#about', as:"about"
  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
