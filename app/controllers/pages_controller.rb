class PagesController < ApplicationController
  def about
    @title = "About Us - Reaper Studios"
  end

  def home
    @title = "Reaper Studios"
  end

  def contact
      @title = "Contact Us - Reaper Studios"
  end

  def services
      @title = "Services - Reaper Studios"
  end

  def portfolio
      @title = "Portfolio - Reaper Studios"
  end
end
