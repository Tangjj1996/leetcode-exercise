class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next: ListNode | null) {
    this.val = val
    this.next = next
  }
}

export function swapPairs(head: ListNode | null): ListNode | null {
  return connect(head)
}

function connect(node: ListNode | null) {
  if (!node) {
    return null
  }

  let left = node
  let mid = node.next
  let right = mid?.next

  if (!mid) {
    return left
  }
  mid!.next = left
  left.next = connect(right!)!

  return mid
}

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
}

const res = swapPairs(head)
console.log(res)
