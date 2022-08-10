// Interface
import { AnyAction } from 'redux';

// Allows us to extend all of the the different action creator functions
// with an ability to match the received action by the type that this action creator
// is associated to

// We will attach properties to our actions creators so that they can behave also as
// action type guards

// Type predicate is kind of like a function that verifies whether a specific argument that it receives
// is going to be a narrower type or not - narrow as a more specific

type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>['type'];
  match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T; // This T will be one of the enum value of the types
  payload: P;
  // payload?: P; Why we don't use this to not have two Action types
  // because we want to be specific and type safe if we dont do this we need
  // to be dealing with a undefined payload an in TS we don't want that
};

export type Action<T> = {
  type: T;
};

// Dependending on if we have a payload or not we need to return the appropiate action
// We need to do function overloading
// Function overloading: Provide us with the ability to make multiple function type definitions
// of the same name, allows the function to receive different parameter types
// It should be the same number of paramters but what it does is that it can return different types
// depending on the parameter types that we receive

// Function overloading
// We don't need to write the entire function implementation
// Only the type that is going to return ActionWithPayload<T, P>
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

// Function overloading
// Even if we are not using a payload the function definition still expects a payload
// remember that for function overloading we expect the same number of parameters,
// but we can fix this using void, meaning that you dont expect anything for this parameter
export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

// If you hover over the function you can see that has a overload
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
