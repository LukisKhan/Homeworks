class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
    # render json: ["got the benches"]
    render :index
  end

  def create
  end
end
