/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * key: rightNodes is the stack to track right nodes.
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var rightNodes = [];
    var order = [];
    while (root || rightNodes.length > 0) {
        if (root) {
            order.push(root.val);
            if (root.right) rightNodes.push(root.right);
            root = root.left;
        } else {
          root = rightNodes.pop();
        }
    }
    return order;
};
