Rails.application.routes.draw do
  get 'client/home'

  get 'client/projects'

  get 'client/status'

  get 'client/milestones'

  get 'client/quotes'

  get 'client/support'

  get 'client/tickets'

  # set the index page
  root 'pages#home'

  get 'pages/about'

  get 'pages/home'

  get 'pages/contact'

  get 'pages/portfolio'

  get 'pages/services'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
