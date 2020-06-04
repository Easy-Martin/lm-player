export const computedIndexFormTime = (historyList, time) => {
  let index = 0
  try {
    index = historyList.fragments.findIndex((v) => v.end > time)
  } catch (e) {
    console.error('historyList data error', historyList)
  }
  return index
}
export const computedTimeAndIndex = (historyList, currentTime) => {
  const index = computedIndexFormTime(historyList, currentTime)
  let seekTime = 0
  try {
    const fragment = historyList.fragments[index]
    if (!fragment) {
      return [0, 0]
    }
    seekTime = currentTime - fragment.begin - 1
  } catch (e) {
    console.error('historyList data error', historyList)
  }
  return [index, seekTime]
}
