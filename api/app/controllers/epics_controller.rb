class EpicsController < ApplicationController
  before_action :set_epic, only: [:show, :update, :destroy]

  # GET /epics
  def index
    @epics = Epic.all
    @epics_with_stories = @epics.map do |epic|
      {
        epic: epic,
        stories: epic.stories
      }
    end

    render json: @epics
  end

  # GET /epics/1
  def show
    render json: @epic
  end

  # POST /epics
  def create
    @epic = Epic.new(epic_params)

    if @epic.save
      render json: @epic, status: :created, location: @epic
    else
      render json: @epic.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /epics/1
  def update
    if @epic.update(epic_params)
      render json: @epic
    else
      render json: @epic.errors, status: :unprocessable_entity
    end
  end

  # DELETE /epics/1
  def destroy
    @epic.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_epic
      @epic = Epic.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def epic_params
      params.require(:epic).permit(:title, :name, :summary, :img_url, :lat, :long)
    end
end
