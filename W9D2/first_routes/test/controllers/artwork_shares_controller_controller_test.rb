require 'test_helper'

class ArtworkSharesControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get artwork_shares_controller_create_url
    assert_response :success
  end

  test "should get destroy" do
    get artwork_shares_controller_destroy_url
    assert_response :success
  end

  test "should get user_params" do
    get artwork_shares_controller_user_params_url
    assert_response :success
  end

  test "should get private" do
    get artwork_shares_controller_private_url
    assert_response :success
  end

  test "should get test" do
    get artwork_shares_controller_test_url
    assert_response :success
  end

end
