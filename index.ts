/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a single digit. 
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */


// ListNode class definition
class ListNode {
       val: number
       next: ListNode | null
       constructor(val?: number, next?: ListNode | null) {
           this.val = (val===undefined ? 0 : val)
           this.next = (next===undefined ? null : next)
       }
    }

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null  =>{

    // Recursive function
    const addNodes = (node1: ListNode | null, node2: ListNode | null, carry: number = 0): ListNode | null => {

        // Exit condition
        if(node1 === null && node2 === null && carry === 0) {
            return null; 
        }

        // Sum variable
        let sum = carry;
        
        if(node1 !== null) {
            sum+= node1.val;
            node1 = node1.next; 
        }

        if(node2 !== null) {
            sum+= node2.val; 
            node2 = node2.next; 
        }

        // NewNode initialized with only the val 
        const newNode = new ListNode(sum % 10);

        newNode.next = addNodes(node1, node2, Math.floor(sum / 10)); 

        return newNode;

    }

    return addNodes(l1, l2); 
};



