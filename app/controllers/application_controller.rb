class ApplicationController < ActionController::Base
  before_action :basic_auth

  private

  def basic_auth
    #利用可なユーザーIDとパスワードを設定
    authenticate_or_request_with_http_basic do |username,password|
      username == ENV["BASIC_AUTH_USER"] && password == ENV["BASIC_AUTH_PASSWORD"]  # 環境変数を読み込む記述に変更
    end
  end

end
