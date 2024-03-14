type User = {
  name: string,
  age: number,
  banned: boolean,
  status: "online" | "invisible" | "away" | "offline" | "dnd"
}

type Example = {
  creation_date: string; //datestring
  id: `${string}-${string}-${string}-${string}` //uuid
  like_count: number,
  author: User
}

enum Key {
  NONEXISTENT = "nonexistent",
  LIKE_COUNT = "like_count",
}

type Value = string | number;

/**
 * The following function has been implemented naively, with the widest types
 * The input params don't have any intellisense/autocomplete, and the function allows invalid imputs
 * Improve the function's type signature. Points are awarded for:
 * - autocompletion
 * - narrowness of types
 * - correctness of types and hence how good the build-time guarantees are
 * - readability
 * - extendability of relevant types
 */

function setValue(key: Key, value: Value): void {
  console.log(`Set ${key} to ${value}`)  //imagine this writes to something like LocalStorage or URLSearchParams
}

setValue(Key.NONEXISTENT, 1231)
setValue(Key.LIKE_COUNT, "morbillion")



/**
 * The following function should receive a list of allowed states and the initial state
 * Yet the current implementation doesn't check if the initial state is one of the allowed states
 * 
 * This is a bonus question, and you don't need to successfully complete it, but points will be made
 * for your approach to solving this problem, even if you don't succeed. While it is possible, solving it is not trivial
 * in current versions of Typescript, but TS has added a utility type that trivially solves it on the day of making this excercize 
 */
function bonus<T extends string>(allowed_states: Array<T>, initial: T) {
  console.log(allowed_states, initial)
}

bonus(["foo", "bar"], "invalid")