type mapType = {
  [key: string]: number
}

export function findSubstring(s: string, words: string[]): number[] {
  if (s !== '' && words.length === 0) {
    return []
  }

  const n = s.length,
    oneWordLen = words[0].length,
    wordCnt = words.length,
    allLen = oneWordLen * wordCnt,
    wordsCnt: mapType = {} // 每个单词出现的次数

  for (let w of words) {
    if (Reflect.has(wordsCnt, w)) {
      wordsCnt[w] += 1
    } else {
      wordsCnt[w] = 0
    }
  }

  const res: number[] = []

  for (let i = 0; i < oneWordLen; i++) {
    // shell排序
    let curWNum = 0,
      L = i,
      R = i,
      curWDic: mapType = {}
    while (R + oneWordLen <= s.length) {
      const W = s.slice(R, R + oneWordLen)
      R += oneWordLen // R每次向右移一个单词的长度

      if (!Reflect.has(wordsCnt, W)) {
        L = R
        curWDic = {}
        curWNum = 0
      } else {
        curWDic[W] += 1
        curWNum += 1

        while (curWDic[W] > wordsCnt[W]) {
          const LW = s.slice(L, L + oneWordLen)
          L += oneWordLen
          curWDic[LW] -= 1
          curWNum -= 1
        }
        if (curWNum === wordCnt) {
          res.push(L)
        }
      }
    }
  }

  return res
}

const s = 'barfoothefoobarman',
  wrods = ['foo', 'bar']
const res = findSubstring(s, wrods)
console.log(res)
