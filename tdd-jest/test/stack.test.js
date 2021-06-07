class Stack {
  constructor() {
    this.length = 0;
    this.items = {};
  }

  get peek() {
    return this.items[this.length - 1];
  }

  push(value) {
    this.items[this.length] = value;
    this.length += 1;
  }

  pop() {
    let item = this.items[this.length - 1];
    delete this.items[this.length - 1];
    this.length -= 1;
    return item;
  }
}

// ---

describe("Meu Primeiro Teste", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.length).toBe(0);
    expect(stack.items).toEqual({});
  });

  it("can push to the top", () => {
    stack.push("🐣");
    expect(stack.length).toBe(1);
    expect(stack.peek).toBe("🐣");
  });

  it("can pop off", () => {
    stack.push("🐱");
    stack.push("🐶");

    expect(stack.items).toEqual({ 0: "🐱", 1: "🐶" });
    expect(stack.length).toBe(2);

    expect(stack.pop()).toBe("🐶");
    expect(stack.length).toBe(1);

    expect(stack.pop()).toBe("🐱");
    expect(stack.length).toBe(0);

    expect(stack.items).toEqual({});
  });
});
