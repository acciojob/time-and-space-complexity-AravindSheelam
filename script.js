//your JS code here. If required.
const second_para_text = "Space Complexity: Space complexity is related to the amount of memory occupied by a program. In simple terms, any program’s space complexity is calculated by the total amount of space it occupies in the computer’s memory. So when we calculate space complexity, we take into account all the inputs of the program as well as the auxiliary space used. For example, if a program takes an array of size n as input, the space complexity of the program becomes O(n).";
cy.get('p').eq(1).invoke('text').then((text) => {
  expect(text.trim()).to.equal(second_para_text.trim());
});