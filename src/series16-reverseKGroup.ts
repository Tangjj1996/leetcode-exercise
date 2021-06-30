class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next: ListNode | null) {
    this.val = val
    this.next = next
  }
}

export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  return connectK(head, k)
}

function connectK(head: ListNode | null, k: number): ListNode | null {
  if (head === null) {
    return null
  }

  if (k === 1) {
    return head
  }

  if (Object.keys(head).length < k) {
    return head
  }

  let left: ListNode = head
  let mid: ListNode | null = head.next
  let right: ListNode | null
  let pointer: ListNode | null = head // pointer指针指向head链表

  for (let i = 0; i < k; i++) {
    mid!.next = pointer
    pointer = pointer!.next
  }
  right = pointer!.next // 指向尾节点
  left.next = connectK(right!, k)

  return mid
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
const res = connectK(list, 3)
console.log(res)
