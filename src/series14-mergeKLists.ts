class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next: ListNode | null) {
    this.val = val
    this.next = next
  }
}

import util from 'util'

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let result: ListNode | null = null

  if (lists.length === 0) {
    return result
  }

  if (lists.length === 1) {
    return lists[0]
  }

  for (let i = 0, len = lists.length; i < len; i++) {
    result = mergeTwoLists(result, lists[i])
  }

  return result
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null) {
  const pre: ListNode = {
    val: -1,
    next: null,
  }
  let tail = pre

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      tail.next = l1
      l1 = l1.next
    } else {
      tail.next = l2
      l2 = l2.next
    }

    tail = tail.next
  }

  if (!l1) {
    tail.next = l2
  }

  if (!l2) {
    tail.next = l1
  }

  return pre.next
}

const lists: (ListNode | null)[] = [
  {
    val: 1,
    next: {
      val: 2,
      next: null,
    },
  },
  {
    val: 3,
    next: null,
  },
  {
    val: 4,
    next: null,
  },
  {
    val: 1,
    next: null,
  },
]

const res = mergeTwoLists(lists[0], lists[1])

console.log(
  util.inspect(res, { showHidden: false, depth: null }),
  '\n---------------\n',
  util.inspect(lists, { showHidden: false, depth: null })
)
