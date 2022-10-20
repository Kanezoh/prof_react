resource "vercel_project" "with_git" {
  name = "prof-app-react"
  git_repository = {
    type = "github"
    # ユーザー名/リポジトリ名
    repo = "Kanezoh/prof_react"
  }
}