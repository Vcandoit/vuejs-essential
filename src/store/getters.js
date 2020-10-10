// 返回添加用户信息后的所有文章
export const computedArticles = (state) => {
let articles = state.articles
let newArticles = []

// 添加用户信息，参数 isCurrentUser 代表是否是当前用户
const addUserInfo = function(isCurrentUser) {
const userName = state.user && state.user.name
const userAvatar = state.user && state.user.avatar
const avatarUrl = 'https://api.adorable.io/avatars/200/'

// 是当前用户时，设置用户数据为当前用户的信息
if (isCurrentUser) {
this.uname = userName
this.uavatar = userAvatar
} else {
// 不是当前用户时，设置用户数据为对象里用户的信息
this.uavatar = `${avatarUrl}${this.uname}`
}
}

if (Array.isArray(articles)) {
// 深拷贝 articles 以不影响其原值
newArticles = JSON.parse(JSON.stringify(articles))
newArticles.forEach((article) => {
const comments = article.comments
const likeUsers = article.likeUsers

// 添加用户信息到文章
if (article.uid === 1) {
addUserInfo.call(article, true)
} else {
addUserInfo.call(article)
}

// 添加用户信息到评论
if (Array.isArray(comments)) {
comments.forEach((comment) => {
if (comment.uid === 1) {
addUserInfo.call(comment, true)
} else {
addUserInfo.call(comment)
}
})
}

// 添加用户信息到点赞
if (Array.isArray(likeUsers)) {
likeUsers.forEach((likeUser) => {
if (likeUser.uid === 1) {
addUserInfo.call(likeUser, true)
} else {
addUserInfo.call(likeUser)
}
})
}
})
}

return newArticles
}