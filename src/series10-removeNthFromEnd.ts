/**
 * Definition for singly-linked list.
 * class ListNode {
 *  val: number
 *  next: ListNode | null
 *  constructor(val?: number, next?: ListNode | null) {
 *    this.val = (val === undefined ? 0 : val)
 *    this.next = (next === undefined ? null : next)
 *  }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  let first = head // 快指针
  for (let i = 0; i < n; i++) {
    first = first?.next!
  }

  if (!first) return head?.next! // 如果n+1大于链表长度 返回头结点

  let second = head! // 慢指针
  while (first.next) {
    first = first?.next
    second = second?.next!
  }

  second.next = second?.next?.next! // 让慢指针指向后面的后一个节点（删除后一个节点）

  return head
}

const head = {
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
  },
  n = 2
const res = removeNthFromEnd(head, n)
console.log(res)
