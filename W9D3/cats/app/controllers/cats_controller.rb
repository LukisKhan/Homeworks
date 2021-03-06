class CatsController < ApplicationController

  def index
    @cats = Cat.all
    # if @cats.present?
    #     render :json "THERE ARE NO CATS"
    # else
    render :index
    # end
  end

  def show
    @cat = Cat.find(params[:id])
    render :show
  end
  
  def new
    @cat = Cat.new
    render :new
  end

  def create
    @cat = Cat.new(cat_params)

    if @cat.save
      redirect_to cat_url(@cat)
    else
      render :new, status: 422
    end
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :sex, :color, :birth_date, :description)
  end
end
