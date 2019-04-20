
export function getVideoType(url) {
  const reg = /([^\.\/\\]+)\.(([a-z]|[0-9])+)$/i
  const resultArr = reg.exec(url)
  if (resultArr) {
    return resultArr[2]
  }
}

