
function formatHistoryList(playlist, startTime, endTime) {
    if (!Array.isArray(playlist) || playlist.length === 0) {
      return {
        beginDate: 0,
        duration: 0,
        fragments: []
      }
    }
    let fragment = {}
    fragment.beginDate = startTime * 1000
    fragment.duration = endTime - startTime
    fragment.fragments = []
  
    let fragments = []
    // 有历史视频处理断片时间
    
    if (playlist[0].beginTime !== startTime) {
      fragments.push({
        begin: 0,
        end: playlist[0].beginTime - startTime
      })
    }
  
    playlist.forEach((v, k) => {
      //begin----处理有视频部分
      fragments.push({
        begin: v.beginTime - startTime,
        end: v.endTime - startTime,
        file: v.url
      })
      //end----处理有视频部分
      //begin----处理无视频部分
      const nextData = playlist[k + 1]
      if (nextData) {
        //处理存在的，视频断片数据
        if (nextData.beginTime < v.endTime) {
          console.error('数据有问题，下一个的视频开始时间小于上一个视频的结束时间')
        }
        //下一个的begin大于上一个的end，就是存在断片
        if (nextData.beginTime > v.endTime) {
          fragments.push({
            begin: v.endTime - startTime,
            end: nextData.beginTime - startTime
          })
        }
      }
      //end----处理无视频部分
    })
  
    let lastItem = playlist[playlist.length - 1]
    if (lastItem.endTime < endTime) {
      fragments.push({
        begin: lastItem.endTime - startTime,
        end: endTime - startTime
      })
    }
    fragment.fragments = fragments
    return fragment
  }
  