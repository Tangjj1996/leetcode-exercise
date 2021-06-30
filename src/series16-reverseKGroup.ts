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
  return null
}

/**
 * 翻转node链表
 * @param node
 */
function reverse(node: ListNodeNull) {
  let pre: ListNodeNull = null,
    cur: ListNodeNull = node,
    next: ListNodeNull = null

  while (cur !== null) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return pre
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

const res = reverse(list)
console.log(res)
