require 'test_helper'

class EpicsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @epic = epics(:one)
  end

  test "should get index" do
    get epics_url, as: :json
    assert_response :success
  end

  test "should create epic" do
    assert_difference('Epic.count') do
      post epics_url, params: { epic: { img_url: @epic.img_url, name: @epic.name, summary: @epic.summary, title: @epic.title } }, as: :json
    end

    assert_response 201
  end

  test "should show epic" do
    get epic_url(@epic), as: :json
    assert_response :success
  end

  test "should update epic" do
    patch epic_url(@epic), params: { epic: { img_url: @epic.img_url, name: @epic.name, summary: @epic.summary, title: @epic.title } }, as: :json
    assert_response 200
  end

  test "should destroy epic" do
    assert_difference('Epic.count', -1) do
      delete epic_url(@epic), as: :json
    end

    assert_response 204
  end
end
