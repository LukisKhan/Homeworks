class CommentsController < ApplicationController

# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text
#  user_id    :integer
#  artwork_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: comment
  end

  def index
    user = User.find(params[:user_id])
    artwork = Artwork.find(params[:artwork_id])
    user ? render json: user.comments : render json: artwork.comments
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :artwork_id)
  end
end
