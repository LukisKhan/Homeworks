class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
    # @benches = Bench.all
    # debugger
    render :index
  end

  def create
  end


end
