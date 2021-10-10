import { ListNode } from '../semi'

function mergeSort(head: ListNode | undefined): ListNode | undefined {
  if (!head || !head.next) {
    return
  }
  let middlePtr = middle(head)
  let right = middlePtr?.next
  middlePtr!.next = undefined
  let left: ListNode | undefined = head
  left = mergeSort(left)
  right = mergeSort(right)
  return merge(left, right)
}

function middle(head: ListNode | undefined) {
  let fast = head
  let slow = head
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow?.next
  }
  return slow
}

function merge(l1: ListNode | undefined, l2: ListNode | undefined) {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }
  if (l1.element < l2.element) {
    l1.next = merge(l1.next, l2)
    return l1
  } else {
    l2.next = merge(l1, l2.next)
    return l2
  }
}
