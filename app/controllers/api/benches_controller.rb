class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
  end

  def create
    @bench = Bench.new(bench_params)
    unless @bench.save
      render json: @bench.errors.full_messages
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
