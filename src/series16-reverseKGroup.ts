class ListNode {
  val: number
  next: ListNodeNull
  constructor(val: number, next: ListNodeNull) {
    this.val = val
    this.next = next
  }
}

type ListNodeNull = ListNode | null

export function reverseKGroup(head: ListNodeNull, k: number): ListNodeNull {
  return dfs(head, listLenth(head), k)
}

/**
 * 递归操作
 * @param head
 * @param len
 * @param k
 * @returns
 */
function dfs(head: ListNodeNull, len: number, k: number) {
  if (len < k) {
    return head
  }

  let tail: ListNodeNull = head,
    prev: ListNodeNull = null,
    temp: ListNodeNull = null

  for (let i = 0; i < k; i++) {
    temp = head!.next
    head!.next = prev
    prev = head
    head = temp
  }

  tail!.next = dfs(head, len - k, k)

  return prev
}

/**
 * 获取链表的长度
 * @param {ListNode | null} head
 * @returns {number}
 */
function listLenth(head: ListNodeNull): number {
  let len = 0
  while (head !== null) {
    head = head.next
    len++
  }

  return len
}

const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
}

const res = reverseKGroup(list, 3)
console.log(res)
