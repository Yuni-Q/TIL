// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  // console.log(root)
  const paths = []
  if(!root) return []
  if(!root.left  && !root.right){
      const val = JSON.stringify(root.val)
      paths.push(val)
      return paths
  }
  let stack = [root, root.val]
  // console.log(stack.length)
  while(stack.length>0){
      let path = stack.pop();
      let node = stack.pop();
      // console.log(path,node)
      if(!node.left  && !node.right){
          paths.push(path)
          console.log(path)
      }
      if(node.left){
          stack.push(node.left)
          stack.push(`${path}->${node.left.val}`)
      }
      if(node.right){
          stack.push(node.right)
          stack.push(`${path}->${node.right.val}`)
      }
  }
  return paths.reverse()
};